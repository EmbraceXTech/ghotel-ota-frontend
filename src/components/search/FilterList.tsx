import { Button } from "@nextui-org/react";
import CountrySelect from "./Country";
import DateSelect from "./Date";
import PeopleSelect from "./People";
import { SearchIcon } from "../Icons/Search";

export default function FilterList() {
  return (
    <div className="flex space-x-3">
      <CountrySelect />
      <DateSelect />
      <DateSelect />
      <PeopleSelect />
      <Button
        startContent={<SearchIcon />}
        color="primary"
        className="w-full h-auto px-8"
      >
        Search
      </Button>
    </div>
  );
}
