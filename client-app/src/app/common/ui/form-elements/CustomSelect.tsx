import clsx from "clsx";
import { useState } from "react";
import Select from "react-select";

type Props = {
  options: {
    value: any;
    label: string;
  }[];
};

const CustomSelect = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  return (
    <Select
      defaultValue={selectedOption}
      onChange={(value) => setSelectedOption(value as any)}
      className="w-full"
      blurInputOnSelect
      isSearchable={false}
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
      }}
      classNames={{
        option: ({ isSelected, isFocused }) =>
          clsx(
            isSelected ? "!bg-dark/30 !text-black" : "hover:!bg-dark/20 !bg-white",
            isFocused && !isSelected ? "hover:!bg-dark/20" : ""
          ),
        control: ({ isFocused }) =>
          clsx(
            "!cursor-pointer",
            isFocused
              ? "!border-alternate !outline-none !ring-none !shadow-none"
              : "!border-dark/50"
          ),
      }}
      options={props.options}
    />
  );
};

export default CustomSelect;
