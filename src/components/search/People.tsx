import { PeopleIcon } from "../Icons/People";

export default function PeopleSelect() {
  const label = "Guests";
  const message = "1 Room, 2 Adults";
  return (
    <div className="min-w-60 h-14  border-1.5 rounded-lg px-4 pb-1 pt-2 cursor-pointer">
      <div className="text-[#A3A3A3] text-xs">{label}</div>
      <div className="flex space-x-1 items-center">
        <PeopleIcon />
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}
