import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import { StarIcon } from "../Icons/Star";

interface PropertyCardProps {
  name: string;
  location: string;
  rating: number;
  review: number;
  price: number;
}

export default function PropertyCard({
  name,
  location,
  rating,
  review,
  price,
}: PropertyCardProps) {
  return (
    <div>
      {/* <Image src="/hotel/1.jpg" alt="hotel1" /> */}
      <Card
        shadow="sm"
        isPressable
        onPress={() => console.log("item pressed")}
        className="w-[300px]"
      >
        <CardHeader className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="none"
            width="300px"
            alt={name}
            className="w-full object-cover h-[200px]"
            src="/hotel/1.jpg"
          />
        </CardHeader>
        <CardBody className="">
          <div className="text-base font-bold">{name}</div>
          <div className="text-xs text-[#A3A3A3] mb-2">{location}</div>
          <div className="flex space-x-2 text-xs items-center">
            <Chip
              endContent={<StarIcon />}
              variant="solid"
              color="primary"
              classNames={{
                base: "h-[18px] rounded-lg",
                content: "font-bold text-xs py-0 text-center",
              }}
            >
              {rating}
            </Chip>
            <div className="text-[#5B616E] font-medium">{review} Review</div>
          </div>
        </CardBody>
        <CardFooter className="justify-end space-x-1">
          <div className="text-[#A3A3A3] text-xs font-medium pt-1">Price</div>
          <div className="text-xl font-bold">THB {price.toLocaleString()}</div>
        </CardFooter>
      </Card>
    </div>
  );
}
