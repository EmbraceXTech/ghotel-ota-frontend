import { Button, CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { CountrySelect, PeopleSelect, DateSelect } from "../ui/select";
import { SearchIcon } from "../Icons/Search";
import { DateObject } from "react-multi-date-picker";
import { usePropertyFilter } from "@/stores/propertyFilter.store";

export default function FilterList() {
  const { getFilter, setFilter } = usePropertyFilter();
  const [checkIn, setCheckIn] = useState<Date>(
    getFilter().checkIn ?? new Date()
  );
  const [checkOut, setCheckOut] = useState<Date>(
    getFilter().checkOut ?? new Date()
  );
  const [rooms, setRooms] = useState<number>(getFilter().rooms ?? 1);
  const [guests, setGuests] = useState<number>(getFilter().guests ?? 1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSelectCheckIn = (selectedDates: DateObject) => {
    setCheckIn(new Date(selectedDates?.format()));
  };
  const onSelectCheckOut = (selectedDates: DateObject) => {
    setCheckOut(new Date(selectedDates?.format()));
  };

  const handleFilter = () => {
    setIsSubmitting(true);
    setFilter({ checkIn, checkOut });
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="flex space-x-3">
      <CountrySelect />
      <DateSelect
        label="Check In"
        value={checkIn}
        onSelect={onSelectCheckIn}
        isDisabled={isSubmitting}
      />
      <DateSelect
        label="Check Out"
        value={checkOut}
        onSelect={onSelectCheckOut}
        isDisabled={isSubmitting}
      />
      <PeopleSelect />
      <Button
        startContent={isSubmitting ? null : <SearchIcon />}
        color="primary"
        className="w-full h-auto px-8"
        onPress={handleFilter}
        isDisabled={isSubmitting}
      >
        {isSubmitting ? (
          <CircularProgress color="primary" aria-label="Loading..." />
        ) : (
          "Search"
        )}
      </Button>
    </div>
  );
}
