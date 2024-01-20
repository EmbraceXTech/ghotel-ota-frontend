import EmptyStar from "../Icons/star/empty";
import FullStar from "../Icons/star/full";
import HalfStar from "../Icons/star/half";

export default function RatingSet({ ratings }: { ratings: number }) {
  const max = 5;
  return Array.from({ length: max }).map((_, index) => {
    if (index <= ratings - 1) {
      return <FullStar key={index} />;
    } else if (index > ratings - 1 && index < ratings) {
      return <HalfStar key={index} />;
    }
    return <EmptyStar key={index} />;
  });
}
