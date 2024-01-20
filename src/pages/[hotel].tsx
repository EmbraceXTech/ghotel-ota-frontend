import { BackgroundLayout } from "@/components/layouts/BackgroundLayout";
import PropertyBookingAction from "@/components/property/booking/PropertyBookingAction";
import PropertyBookingDetails from "@/components/property/booking/PropertyBookingDetails";
import PropertyBookingInformation from "@/components/property/booking/PropertyBookingInformation";
import PropertyBookingPrice from "@/components/property/booking/PropertyBookingPrice";
import PropertyDetails from "@/components/property/booking/PropertyDetails";
import { HOTEL_DETAIL_LISTS } from "@/mocks/hotel";
import { diffDate } from "@/utils/date.util";
import { toDashCase } from "@/utils/string.util";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function HotelPage() {
  const { query } = useRouter();
  const data = useMemo(() => {
    return HOTEL_DETAIL_LISTS.find(
      (hotel) => toDashCase(hotel.name) === query.hotel
    );
  }, [query]);

  const price = useMemo(
    () =>
      (data?.price || 0) *
        diffDate(query.checkOut as string, query.checkIn as string) +
      1,
    [data?.price, query.checkIn, query.checkOut]
  );
  return (
    <BackgroundLayout>
      <div className="grid grid-cols-3 gap-4 px-32 -mt-20">
        <div className="col-span-2">
          <PropertyDetails
            name={data?.name}
            propertyType={data?.type}
            rating={data?.rating}
            location={data?.location}
          />
        </div>
        <PropertyBookingDetails
          checkInDate={query?.checkIn as string}
          checkOutDate={query?.checkOut as string}
          durations={
            diffDate(query.checkOut as string, query.checkIn as string) + 1
          }
          guests={query?.guests as string}
        />
        <div className="col-span-2">
          <PropertyBookingInformation />
        </div>
        <PropertyBookingPrice
          rooms={query.rooms as string}
          durations={
            diffDate(query.checkOut as string, query.checkIn as string) + 1
          }
          price={data?.price || 0}
        />
        <div className="col-span-2">
          <PropertyBookingAction
            rooms={+(query.rooms as string)}
            durations={
              diffDate(query.checkOut as string, query.checkIn as string) + 1
            }
            price={data?.price || 0}
          />
        </div>
      </div>
    </BackgroundLayout>
  );
}
