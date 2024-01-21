import { payWithVoucher } from "@/services/paymet.service";
import BookingModal from "./BookingModal";
import { Button, Checkbox, useDisclosure } from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { parseEther } from "viem";
import { useStore } from "@/stores/base.store";

// TODO: transcationHash
// TODO: press button to execute sign the signature

export default function PropertyBookingAction({
  rooms,
  durations,
  price,
}: {
  rooms: number;
  durations: number;
  price: number;
}) {
  const {
    isOpen: isOpenLoading,
    onOpen: onOpenLoading,
    onOpenChange: onOpenChangeLoading,
  } = useDisclosure();

  const [modalStatus, setModalStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  const { usePBM, setUsePBM } = useStore((state) => state);

  const chainId = useNetwork();
  const account = useAccount();
  const [txHash, setTxHash] = useState("");

  const { _price, _voucher } = useMemo(() => {
    const _price = Math.floor(price * durations * rooms * (usePBM ? 0.6 : 1.0));
    const _voucher = Math.floor(
      price * durations * rooms * (usePBM ? 0.4 : 0.0)
    );

    return { _price, _voucher };
  }, [durations, price, rooms, usePBM]);

  const handlePay = useCallback(async () => {
    onOpenLoading();
    if (chainId && chainId.chain && account && account.address) {
      const _fee = (_price + _voucher) * 0.05;

      const voucherId = BigInt(0); // Hotel voucher
      const price = parseEther(_price.toString());
      const voucher = parseEther(_voucher.toString());
      const fee = parseEther(_fee.toString());

      const hotelAddress = "0x320a8FFfaF8068Bff76ab373015723441Bc15521";
      const otaAddress = "0x0D4Db0105b81A4F5b041d7aC1c8D82884EB9384a";

      const tx = await payWithVoucher(
        chainId.chain.id,
        account.address,
        hotelAddress,
        otaAddress,
        voucherId,
        price,
        voucher,
        fee
      );

      await tx.wait();

      setTxHash(tx.hash);
      setModalStatus("success");
    }
  }, [onOpenLoading, chainId, account]);

  return (
    <div className="w-full bg-white px-6 py-8 space-y-3 rounded-xl">
      <Checkbox
        checked={usePBM}
        onChange={() => setUsePBM(!usePBM)}
        defaultSelected
        classNames={{ label: "text-sm font-medium" }}
      >
        Use TravelPBM Ticket
      </Checkbox>
      <Button color="primary" className="w-full font-bold" onPress={handlePay}>
        Pay {_price.toLocaleString()} GHO
      </Button>
      <BookingModal
        isOpen={isOpenLoading}
        onOpenChange={onOpenChangeLoading}
        status={modalStatus}
        transactionHash={txHash}
      />
    </div>
  );
}
