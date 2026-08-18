import { format } from "date-fns";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Field } from "./ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { IconCalendarWeek } from "@tabler/icons-react";

type DatePickerProps = {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  field: {
    value: Date;
    onChange: (date: Date | undefined) => void;
  }
}

export default function DatePicker({ date, setDate, field }: DatePickerProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Field className="w-44">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="ghost"
              id="date-picker-simple"
              className="justify-start font-medium text-sm p-0 hover:bg-chart-1"
            >
              {" "}
              <IconCalendarWeek />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          }
        />
        <PopoverContent className="w-auto rounded-sm p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={(date) => {
              setDate(date)
              field.onChange(date)
              setOpen(false)
            }}
            defaultMonth={field.value}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
