import { Select, SelectItem } from "@nextui-org/react";
import { LocationIcon } from "../../Icons/Location";

const COUNTRY_LIST = [
  {
    label: "Thailand",
    value: "thailand",
  },
];

export default function CountrySelect() {
  return (
    <Select
      label="Going to"
      variant="bordered"
      placeholder="Select an animal"
      startContent={<LocationIcon />}
      defaultSelectedKeys={["thailand"]}
      className="min-w-60"
      isDisabled
    >
      {COUNTRY_LIST.map((country) => (
        <SelectItem key={country.value} value={country.value}>
          {country.label}
        </SelectItem>
      ))}
    </Select>
  );
}
