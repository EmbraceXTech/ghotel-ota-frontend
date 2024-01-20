import {
  Button,
  CircularProgress,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface LoadingSignatureModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function LoadingSignatureModal({
  isOpen,
  onOpenChange,
}: LoadingSignatureModalProps) {
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
              <ModalBody className="flex flex-col justify-between items-center py-10">
                <div className="flex flex-col items-center">
                  <CircularProgress
                    color="primary"
                    size="lg"
                    aria-label="Loading..."
                    className="my-4"
                  />
                  <p className="text-lg font-semibold">
                    Please sign the signature
                  </p>
                  <p className="text-sm font-medium text-tertiary">
                    Processing your request
                  </p>
                </div>
              </ModalBody>
              <ModalFooter className="pb-8">
                <p className="text-sm font-medium text-tertiary text-center">
                  Confirm request in your wallet
                </p>
              </ModalFooter>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
}
