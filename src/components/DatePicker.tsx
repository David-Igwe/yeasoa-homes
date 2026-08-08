import { format } from "date-fns";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Field } from "./ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { IconCalendarWeek } from "@tabler/icons-react";

export default function DatePicker() {
  const [date, setDate] = useState<Date>();

  return (
    <Field className="w-44">
      <Popover>
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
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
