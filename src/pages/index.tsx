import LandingProgress from "@/components/landings/LandingProgress";
import LandingHeader from "@/components/landings/LandingHeader";
import PropertyCard from "@/components/property/PropertyCard";
import FilterList from "@/components/search/FilterList";

export default function Home() {
  const mockHotel = {
    name: "Sri Panwa",
    location: "Panwa cape, Thailand",
    rating: 4.5,
    review: 82,
    price: 9135,
  };
  return (
    <div>
      <LandingHeader />
      <div className="w-full bg-white rounded-t-[40px] flex items-center flex-col pb-12">
        <div className="min-w-[855px]">
          <LandingProgress />
          <div className="text-2xl font-semibold mb-6">Special Properties</div>
          <div className="grid grid-cols-4 gap-6">
            <PropertyCard {...mockHotel} />
            <PropertyCard {...mockHotel} />
            <PropertyCard {...mockHotel} />
            <PropertyCard {...mockHotel} />
          </div>
        </div>
      </div>
    </div>
  );
}
