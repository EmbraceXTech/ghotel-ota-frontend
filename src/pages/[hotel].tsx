import { BackgroundLayout } from "@/components/layouts/BackgroundLayout";
import PropertyBookingAction from "@/components/property/booking/PropertyBookingAction";
import PropertyBookingDetails from "@/components/property/booking/PropertyBookingDetails";
import PropertyBookingInformation from "@/components/property/booking/PropertyBookingInformation";
import PropertyBookingPrice from "@/components/property/booking/PropertyBookingPrice";
import PropertyDetails from "@/components/property/booking/PropertyDetails";

export default function HotelPage() {
  return (
    <BackgroundLayout>
      <div className="grid grid-cols-3 gap-4 px-32">
        <div className="col-span-2">
          <PropertyDetails />
        </div>
        <PropertyBookingDetails />
        <div className="col-span-2">
          <PropertyBookingInformation />
        </div>
        <PropertyBookingPrice />
        <div className="col-span-2">
          <PropertyBookingAction />
        </div>
      </div>
    </BackgroundLayout>
  );
}
