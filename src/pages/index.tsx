import PropertyCard from "@/components/property/PropertyCard";
import FilterList from "@/components/search/FilterList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mockHotel = {
    name: "Sri Panwa",
    location: "Panwa cape, Thailand",
    rating: 4.5,
    review: 82,
    price: 9135,
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>GHOTEL OTA</div>
      <div className="text-2xl font-semibold">Special Properties</div>
      <PropertyCard {...mockHotel} />
      <FilterList />
    </main>
  );
}
