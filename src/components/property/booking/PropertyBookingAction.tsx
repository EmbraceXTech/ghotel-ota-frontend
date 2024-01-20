import { Button, Checkbox } from "@nextui-org/react";

export default function PropertyBookingAction() {
  const price = 146.51;
  return (
    <div className="w-full bg-white px-6 py-8 space-y-3 rounded-xl">
      <Checkbox defaultSelected classNames={{ label: "text-sm font-medium" }}>
        Please email me great deals, last-minute offers and information about
        properties
      </Checkbox>
      <Button color="primary" className="w-full font-bold">Pay USD {price}</Button>
    </div>
  );
}
