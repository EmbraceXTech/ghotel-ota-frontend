import { formatDate } from "@/utils/date.util";
import { useRouter } from "next/router";

interface PropertyBookingDetailsProps {
  checkInDate?: string | Date;
  checkOutDate?: string | Date;
  durations?: number;
  guests?: string;
}

export default function PropertyBookingDetails({
  checkInDate = new Date(),
  checkOutDate = new Date(),
  durations = 1,
  guests = "1",
}: PropertyBookingDetailsProps) {
  const { query } = useRouter();
  const isFlight = query.hotel?.includes("air");

  return (
    <div className="w-full bg-white px-6 py-4 rounded-xl">
      <h1 className="font-semibold text-base mb-4">Your booking details</h1>
      <div className="grid grid-cols-2 gap-y-3 font-medium text-xs">
        <div>
          <div className="text-tertiary">{`${
            isFlight ? "Departure" : "Check In"
          }`}</div>
          <div className="font-semibold text-base">
            {formatDate(checkInDate).replace(",", "")}
          </div>
          <div>{isFlight ? "11:00" : "15:00 - 00:00"}</div>
        </div>
        <div>
          <div className="text-tertiary">{`${
            isFlight ? "Arrival" : "Check Out"
          }`}</div>
          <div className="font-semibold text-base">
            {formatDate(checkOutDate).replace(",", "")}
          </div>
          <div>{isFlight ? "" : "Until"} 12:00</div>
        </div>
        <div>
          <div className="text-tertiary">{`${
            isFlight ? "Flight Duration" : "Duration of Stay"
          }`}</div>
          <div className="font-semibold text-base">
            {durations} {isFlight ? "Hours" : "Night"}
          </div>
        </div>
        <div>
          <div className="text-tertiary">Guest</div>
          <div className="font-semibold text-base">{guests} Guest(s)</div>
        </div>
      </div>
    </div>
  );
}
