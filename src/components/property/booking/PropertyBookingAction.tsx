import LoadingSignatureModal from "@/components/modals/LoadingSignature";
import { Button, Checkbox, useDisclosure } from "@nextui-org/react";

export default function PropertyBookingAction() {
  const {isOpen: isOpenLoading, onOpen: onOpenLoading, onOpenChange: onOpenChangeLoading} = useDisclosure();

  const price = 146.51;
  return (
    <div className="w-full bg-white px-6 py-8 space-y-3 rounded-xl">
      <Checkbox defaultSelected classNames={{ label: "text-sm font-medium" }}>
        Please email me great deals, last-minute offers and information about
        properties
      </Checkbox>
      <Button color="primary" className="w-full font-bold" onPress={onOpenLoading}>Pay USD {price}</Button>
      <LoadingSignatureModal isOpen={isOpenLoading} onOpenChange={onOpenChangeLoading} />
    </div>
  );
}
