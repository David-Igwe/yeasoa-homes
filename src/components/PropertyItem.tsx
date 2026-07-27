import { type propertyItemType } from "../../public/data/propertyList";
import { formatCurrency } from "@automattic/format-currency";
import { IconBed, IconUsers } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function PropertyItem({property}: {property: propertyItemType}) {
  const { propertyName, price, capacity, imgUrl, location, rooms } = property;
  const formattedPrice = formatCurrency(price, "NGN", { stripZeros: true });
  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative w-60 h-45 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute h-1/5 w-1/2 right-0 bottom-0 bg-chart-1 flex justify-center items-center font-semibold text-xs md:text-sm">
          From {formattedPrice}
        </div>
      </div>

      <div>
        <p className="font-semibold">{propertyName}</p>
        <p className="text-sm">{location}</p>
      </div>

      <div className="flex justify-start">
        <div className="text-chart-3 me-5">
          <IconBed className="inline me-1" />
          <span className="text-sm">
            {rooms} {rooms === 1 ? "Room" : "Rooms"}
          </span>
        </div>

        <div className="text-chart-3">
          <IconUsers className="inline me-1 size-4.5" />
          <span className="text-sm">
            {capacity} {capacity === 1 ? "Guest" : "Guests"}
          </span>
        </div>
      </div>

      <Button
        variant="default"
        nativeButton={false}
        render={<Link to="#" />}
        className="w-fit"
      >
        BOOK NOW
      </Button>
    </div>
  );
}
