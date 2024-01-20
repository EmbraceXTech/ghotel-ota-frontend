import BookingModal from "./BookingModal";
import { Button, Checkbox, useDisclosure } from "@nextui-org/react";
import { useMemo, useState } from "react";

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

  const [modalStatus, setModalStatus] = useState<"loading" | "success" | "error">("loading");

  const { _price, _voucher } = useMemo(() => {
    const _price = Math.floor(price * durations * rooms * 0.6);
    const _voucher = Math.floor(price * durations * rooms * 0.4);

    return { _price, _voucher };
  }, [durations, price, rooms]);

  return (
    <div className="w-full bg-white px-6 py-8 space-y-3 rounded-xl">
      <Checkbox defaultSelected classNames={{ label: "text-sm font-medium" }}>
        Please email me great deals, last-minute offers and information about
        properties
      </Checkbox>
      <Button
        color="primary"
        className="w-full font-bold"
        onPress={onOpenLoading}
      >
        Pay GHO {_price.toLocaleString()} + PBM {_voucher.toLocaleString()}
      </Button>
      <BookingModal
        isOpen={isOpenLoading}
        onOpenChange={onOpenChangeLoading}
        status={modalStatus}
        transactionHash=""
      />
    </div>
  );
}
