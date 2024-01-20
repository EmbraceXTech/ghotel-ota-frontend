export default function PropertyBookingPrice() {
  const price = 142.03;
  const pbmPrice = 40;
  return (
    <div className="w-full bg-white px-6 py-4 rounded-xl font-medium text-sm h-fit">
      <div className="font-semibold text-base mb-4">Price details</div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>1 room x 2 night</div>
          <div>${price}</div>
        </div>
        <div className="flex justify-between">
          <div></div>
          <div>{pbmPrice} PBM</div>
        </div>
        <div className="flex justify-between">
          <div>PBM Discount</div>
          <div className="text-primary">-${pbmPrice}</div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between items-center">
        <div className="font-semibold">Final Price</div>
        <div className="text-xl font-bold">$146.51</div>
      </div>
    </div>
  );
}
