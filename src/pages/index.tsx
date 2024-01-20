import PropertyCard from "@/components/property/PropertyCard";
import { BackgroundLayout } from "@/components/layouts/BackgroundLayout";
import FilterList from "@/components/property/PropertyFilterList";
import { HOTEL_LISTS } from "@/mocks/hotel";

export default function Home() {
  return (
    <BackgroundLayout>
      <div className="w-full h-fit bg-white border rounded-lg -mt-[50px] mb-[50px] shadow-md py-5 px-7">
        <FilterList />
      </div>
      <div className="text-2xl font-semibold mb-6">Special Properties</div>
      <div className="grid grid-cols-4 gap-6">
        {HOTEL_LISTS.map((hotel) => {
          return <PropertyCard {...hotel} key={hotel.id} />;
        })}
      </div>
    </BackgroundLayout>
  );
}
