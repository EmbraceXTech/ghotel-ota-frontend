import { Input } from "@nextui-org/react";

export default function PropertyBookingInformation() {
  return (
    <div className="w-full bg-white px-6 py-4 rounded-xl">
      <div className="font-bold text-xl">Your Information</div>
      <div className="text-tertiary text-sm">
        Please tell us the name of the guest staying at the property as it
        appears on the ID that they will present at check-in.
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <Input
          type="text"
          variant="bordered"
          label="First name"
          placeholder="Enter your first name"
        />
        <Input
          type="text"
          variant="bordered"
          label="Last name"
          placeholder="Enter your last name"
        />
        <Input
          type="email"
          variant="bordered"
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          type="text"
          variant="bordered"
          label="Phone number"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}
