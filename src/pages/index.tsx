import PropertyCard from "@/components/property/PropertyCard";
import { BackgroundLayout } from "@/components/layouts/BackgroundLayout";
import FilterList from "@/components/property/PropertyFilterList";
import { HOTEL_LISTS } from "@/mocks/hotel";
import { FLIGHT_LISTS } from "@/mocks/flight";

export default function Home() {
  return (
    <BackgroundLayout>
      <div className="w-full h-fit bg-white border rounded-lg -mt-[50px] mb-[50px] shadow-md py-5 px-7">
        <FilterList />
      </div>
      <div className="text-2xl font-semibold mb-6 -mt-4">
        Special Room For You
      </div>
      <div className="grid grid-cols-4 gap-6">
        {HOTEL_LISTS.map((hotel) => {
          return <PropertyCard dataType="hotel" {...hotel} key={hotel.id} />;
        })}
      </div>
      <div className="text-2xl font-semibold mb-6 mt-10">
        Special Flight For You
      </div>
      <div className="grid grid-cols-4 gap-6">
        {FLIGHT_LISTS.map((flight) => {
          return <PropertyCard dataType="flight" {...flight} key={flight.id} />;
        })}
      </div>
    </BackgroundLayout>
  );
}
