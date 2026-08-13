import { Link, useParams } from "react-router-dom";

import TopNav from "../src/components/TopNav";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import DatePicker from "../src/components/DatePicker";
import PropertyFeatures from "../src/components/PropertyFeatures";
import PropertyItem from "../src/components/PropertyItem";
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";
import { Separator } from "../src/components/ui/separator";
import Footer from "../src/components/Footer";

import { propertyList, type propertyItemType } from "../src/data/propertyList";
import { formatCurrency } from "@automattic/format-currency";



export default function Property() {
  const { propertyId } = useParams();
  const property = propertyList.find(
    (property) => property.id === propertyId,
  ) as propertyItemType;
  const { propertyName, price, description, location, imgUrl, features } = property;
  const formattedPrice = formatCurrency(price, "NGN", { stripZeros: true });

  return (
    <>
      <TopNav />
      <Navbar />
      <Hero heading={propertyName} subheading={location} image={imgUrl} />
      <section className="py-8 px-5 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-[65%_35%] justify-items-end gap-5 sm:gap-0">
          <div className="w-full">
            <img
              src={imgUrl}
              alt={propertyName}
              className="object-cover object-center rounded-lg w-full h-65 lg:h-75 mb-5"
            />
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold text-xl">Description</h2>
                <p className="text-chart-3">{description}</p>
              </div>
              <div>
                <p>From <span className="font-bold">{formattedPrice}</span></p>
                <p className="text-chart-3 text-sm">per night</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[70%] justify-self-center flex flex-col gap-4">
            <p className="underline underline-offset-8 text-sm font-bold">
              Book Your Stay
            </p>
            <div className="bg-chart-1 p-2 rounded-sm">
              <p className="text-chart-5 text-sm font-medium">Check In</p>
              <DatePicker />
            </div>
            <div className="bg-chart-1 p-2 rounded-sm">
              <p className="text-chart-5 text-sm font-medium">Check Out</p>
              <DatePicker />
            </div>
            <div className="bg-chart-1 p-2 rounded-sm">
              <p className="text-chart-5 text-sm font-medium">Guests</p>
              <Input
                type="number"
                min="1"
                placeholder="Enter number of guests"
                className="font-medium border-none"
              />
            </div>
            <Button
              variant="outline"
              className="w-full border-primary font-semibold uppercase py-6 rounded-sm hover:bg-primary hover:text-primary-foreground ease-in-out duration-100 transition"
              nativeButton={false}
              render={<Link to={`/order/create`} />}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
      <Separator />
      <PropertyFeatures features={features} heading="Property Features" />
      <section className="py-10">
        <h3 className="mb-5 sm:mx-40 text-center sm:text-start font-medium text-xl">More Rooms</h3>
        <div className="flex flex-col md:flex-row items-center gap-y-10 justify-evenly mt-10">
                {propertyList.map((property) => (
                  <PropertyItem property={property} key={property.propertyName} />
                ))}
              </div>
      </section>
      <Footer />
    </>
  );
}
