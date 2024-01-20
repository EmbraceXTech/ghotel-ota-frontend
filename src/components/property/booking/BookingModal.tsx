import CorrectIcon from "@/components/Icons/Correct";
import {
  Button,
  CircularProgress,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  status: "loading" | "success" | "error";
  transactionHash?: string;
}

// TODO: GHO3045 -> GHO{random}

export default function BookingModal({
  isOpen,
  onOpenChange,
  status = "loading",
  transactionHash = "",
}: BookingModalProps) {
  const router = useRouter();
  const url = `https://sepolia.etherscan.io/tx/${transactionHash}`;

  const currentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleDateString(undefined, { month: "long" });
    const getOrdinalSuffix = (number: number): string => {
      const suffixes = ["th", "st", "nd", "rd"];
      const v = number % 100;
      return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    };

    const formattedDate = `${month} ${getOrdinalSuffix(day)}`;

    return formattedDate;
  };
  const body = useMemo(() => {
    switch (status) {
      case "loading":
        return (
          <div className="flex flex-col justify-between items-center py-8">
            <div className="flex flex-col items-center">
              <CircularProgress
                color="primary"
                size="lg"
                aria-label="Loading..."
                className="my-4"
              />
              <p className="text-lg font-semibold">Please sign the signature</p>
              <p className="text-sm font-medium text-tertiary">
                Processing your request
              </p>
            </div>
          </div>
        );
      case "success":
        return (
          <div className="flex flex-col justify-between items-center pt-4">
            <div className="flex flex-col items-center space-y-2">
              <CorrectIcon />
              <p className="text-lg font-semibold">Your booking successfully</p>
              <p className="text-sm font-medium text-tertiary text-center">
                Your booking is confirmed. Since no credit card was required for
                this booking, we will contact you before the check-in date to
                re-confirm
              </p>
              <p className="text-sm font-medium text-tertiary text-center">
                Your booking id:{" "}
                <span className="font-semibold text-black">GHO3045</span> on{" "}
                <span className="font-semibold text-black">
                  {currentDate()}
                </span>
                <br />
                <Link
                  className="cursor-pointer"
                  onPress={() => window.open(url, "_blank")}
                >
                  View on Etherscan
                </Link>{" "}
                if something&apos;s wrong
              </p>
            </div>
          </div>
        );
    }
  }, [status, url]);

  const footer = useMemo(() => {
    switch (status) {
      case "loading":
        return (
          <p className="text-sm font-medium text-tertiary text-center">
            Confirm request in your wallet
          </p>
        );
      case "success":
        return (
          <Button
            color="primary"
            className="w-full font-bold"
            onPress={() => {
              onOpenChange();
              router.push("/");
            }}
          >
            Done
          </Button>
        );
    }
  }, [onOpenChange, router, status]);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="md"
      classNames={{
        footer: "flex flex-col",
      }}
    >
      <ModalContent>
        {(onClose) => {
          return (
            <>
              <ModalBody className="flex flex-col justify-between items-center py-8">
                {body}
              </ModalBody>
              <ModalFooter className="pb-8">{footer}</ModalFooter>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
}
