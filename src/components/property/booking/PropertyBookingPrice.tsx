import { useMemo } from "react";

interface PropertyBookingPriceProps {
  rooms: string;
  durations: number;
  price: number;
}

export default function PropertyBookingPrice({
  rooms,
  durations,
  price,
}: PropertyBookingPriceProps) {
  const pbmPrice = useMemo(() => {
    return Math.floor(price * durations * +rooms * 0.4);
  }, [price, durations, rooms]);
  return (
    <div className="w-full bg-white px-6 py-4 rounded-xl font-medium text-sm h-fit">
      <div className="font-semibold text-base mb-4">Price details</div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>
            {rooms} room x {durations} night
          </div>
          <div>${(price * durations * +rooms).toLocaleString()}</div>
        </div>
        <div className="flex justify-between">
          <div></div>
          <div>{pbmPrice.toLocaleString()} PBM</div>
        </div>
        <div className="flex justify-between">
          <div>PBM Discount</div>
          <div className="text-primary">-${pbmPrice.toLocaleString()}</div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between items-center">
        <div className="font-semibold">Final Price</div>
        <div className="text-xl font-bold">
          ${(price * durations * +rooms - pbmPrice).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
