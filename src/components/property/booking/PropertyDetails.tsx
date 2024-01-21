import { Image } from "@nextui-org/react";

import { CounterTopIcon } from "@/components/Icons/facilities";
import RatingSet from "@/components/ui/RatingSet";
import { toDashCase } from "@/utils/string.util";
import { useRouter } from "next/router";

interface PropertyDetailsProps {
  name?: string;
  propertyType?: string;
  rating?: number;
  location?: string;
  // facilities: {
  //   icons: React.ReactNode;
  //   label: string;
  // }[];
}

export default function PropertyDetails({
  name,
  propertyType,
  rating,
  location,
}: PropertyDetailsProps) {
  const { query } = useRouter();
  const isFlight = query.hotel?.includes("air");

  const facilities = [
    {
      icons: <CounterTopIcon />,
      label: `1 ${isFlight ? "Ticket" : "Room"}`,
    },
  ];
  return (
    <div className="w-full bg-white px-6 py-4 rounded-xl flex space-x-4">
      <Image
        radius="none"
        width={250}
        height={200}
        alt={name}
        className="w-full object-cover rounded-md"
        src={`/${isFlight ? "flight" : "hotel"}/${toDashCase(name ?? "")}.jpg`}
      />
      <div>
        <div className="flex space-x-1">
          <div className="text-xs">{propertyType}</div>
          <RatingSet ratings={rating ?? 0} />
        </div>
        <div className="text-xl font-bold">{name}</div>
        <div className="text-sm my-3">{location}</div>
        {facilities.map((facility, key) => {
          return (
            <div
              className="flex items-center space-x-1 mt-1 text-[#A3A3A3]"
              key={key}
            >
              {facility.icons}
              <div className="text-xs">{facility.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
