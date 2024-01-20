import { useState } from "react";
import { CalendarIcon } from "../../Icons/Calendar";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { getDayOfWeek } from "@/utils/date.util";
import { MONTHS } from "@/constants/date.constant";

interface DateSelectProps {
  value?: Date;
  onSelect: (selectedDate: DateObject) => void;
  label: string;
  isDisabled?: boolean;
}

export default function DateSelect({
  value,
  onSelect,
  label,
  isDisabled = false,
}: DateSelectProps) {
  return (
    <DatePicker
      disabled={isDisabled}
      render={(value, openCalendar) => {
        const formatDate = (date: Date | string) => {
          const dateObj = new Date(date);
          return `${getDayOfWeek(date)}, ${
            MONTHS[dateObj.getMonth()]
          } ${dateObj.getDate()}`;
        };
        return (
          <div
            className="min-w-60 h-14 border-1.5 rounded-lg px-4 pb-1 pt-2 cursor-pointer"
            onClick={openCalendar}
          >
            <div className="text-[#A3A3A3] text-xs">{label}</div>
            <div className="flex space-x-1 items-center">
              <CalendarIcon />
              <p className="text-sm font-medium">{formatDate(value)}</p>
            </div>
          </div>
        );
      }}
      value={value}
      onChange={onSelect}
    />
  );
}
