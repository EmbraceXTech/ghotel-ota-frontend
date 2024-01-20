import { Image } from "@nextui-org/react";

import { CounterTopIcon } from "@/components/Icons/facilities";

export default function PropertyDetails() {
  const name = "Sri Panwa";
  const propertyType = "Luxury Villas";
  const star = 5;
  const location = "Cherng Talay, Thalang District, Phuket, Thailand";
  const facilities = [
    {
      icons: <CounterTopIcon />,
      label: "1 rooms",
    },
  ];
  return (
    <div className="w-full bg-white px-6 py-8 rounded-xl flex space-x-4">
      <Image
        radius="none"
        width={250}
        height={200}
        alt={name}
        className="w-full object-cover rounded-md"
        src="/hotel/1.jpg"
      />
      <div>
        <div className="flex space-x-1">
          <div className="text-xs">{propertyType}</div>
          <div>star</div>
        </div>
        <div className="text-xl font-bold">{name}</div>
        <div className="text-sm my-3">{location}</div>
        {facilities.map((facility, key) => {
          return (
            <div className="flex items-center space-x-1 mt-1 text-[#A3A3A3]" key={key}>
              {facility.icons}
              <div className="text-xs">{facility.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
