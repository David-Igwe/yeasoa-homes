import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import TopNav from "../src/components/TopNav";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import DatePicker from "../src/components/DatePicker";
import PropertyFeatures from "../src/components/PropertyFeatures";
import PropertyItem from "../src/components/PropertyItem";
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";
import { Separator } from "../src/components/ui/separator";
import { FieldGroup, FieldError } from "../src/components/ui/field";
import Footer from "../src/components/Footer";

import { propertyList, type propertyItemType } from "../src/data/propertyList";
import { type OrderItem } from "../src/context/Order/orderInterface";
import { useOrder } from "../src/context/Order/useOrder";
import { formatCurrency } from "@automattic/format-currency";
import { differenceInDays } from "date-fns";

export default function Property() {
  const { propertyId } = useParams();
  const property = propertyList.find(
    (property) => property.id === propertyId,
  ) as propertyItemType;
  const {
    propertyName,
    price,
    description,
    location,
    imgUrl,
    features,
    capacity,
  } = property;
  const formattedPrice = formatCurrency(price, "NGN", { stripZeros: true });

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const bookingFormSchema = z.object({
    startDate: z.date({ error: "A date is required." }),
    endDate: z.date({ error: "A date is required." }),
    guests: z
      .number()
      .min(1, "There must be at least one guest")
      .max(capacity, `There can be at most ${capacity} guests`),
  });

  type bookingFormType = z.infer<typeof bookingFormSchema>;

  const defaultBookingFormValues = {
      startDate: undefined,
      endDate: undefined,
      guests: 1,
    }

  const bookingForm = useForm<bookingFormType>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: defaultBookingFormValues,
  });

  const {addOrderItem} = useOrder();
  const navigate = useNavigate()

  const resetBookingForm = () => {
    bookingForm.reset(defaultBookingFormValues);
    setStartDate(undefined);
    setEndDate(undefined);
  }

  const onSubmitBookingForm = (data: bookingFormType) => {
    const nights = differenceInDays(data.endDate, data.startDate);

    const order: OrderItem = {
      propertyName,
      propertyId: property.id,
      bookingPeriod: {
        start: data.startDate,
        end: data.endDate,
      },
      nights,
      guests: data.guests,
      pricePerNight: price,
      totalPrice: price * nights,
    };

    addOrderItem(order);
    resetBookingForm();
    navigate("/order/create");  
  };

  return (
    <>
      <TopNav />
      <Navbar />
      <Hero heading={propertyName} subheading={location} image={imgUrl} />
      <section className="py-8 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] justify-items-end gap-5 md:gap-0">
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
                <p>
                  From <span className="font-bold">{formattedPrice}</span>
                </p>
                <p className="text-chart-3 text-sm">per night</p>
              </div>
            </div>
          </div>

          <div className="w-[80%] md:w-[70%] justify-self-center flex flex-col gap-4">
            <p className="underline underline-offset-8 text-sm font-bold">
              Book Your Stay
            </p>
            <form onSubmit={bookingForm.handleSubmit(onSubmitBookingForm)}>
              <FieldGroup>
                <Controller
                  name="startDate"
                  control={bookingForm.control}
                  render={({ field, fieldState }) => (
                    <div className="bg-chart-1 p-2 rounded-sm">
                      <p className="text-chart-5 text-sm font-medium">
                        Check In
                      </p>
                      <DatePicker
                        date={startDate}
                        setDate={setStartDate}
                        field={field}
                        data-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  )}
                />

                <Controller
                  name="endDate"
                  control={bookingForm.control}
                  render={({ field, fieldState }) => (
                    <div className="bg-chart-1 p-2 rounded-sm">
                      <p className="text-chart-5 text-sm font-medium">
                        Check Out
                      </p>
                      <DatePicker
                        date={endDate}
                        setDate={setEndDate}
                        field={field}
                        data-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  )}
                />

                <Controller
                  name="guests"
                  control={bookingForm.control}
                  render={({ field, fieldState }) => (
                    <div
                      data-invalid={fieldState.invalid}
                      className="bg-chart-1 p-2 rounded-sm"
                    >
                      <p className="text-chart-5 text-sm font-medium">Guests</p>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        type="number"
                        min={1}
                        max={capacity}
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter number of guests"
                        className="font-medium border-none"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                  )}
                />

                <Button
                  variant="outline"
                  className="w-full border-primary font-semibold uppercase py-6 rounded-sm hover:bg-primary hover:text-primary-foreground ease-in-out duration-100 transition"
                  type="submit"
                >
                  Book Now
                </Button>
              </FieldGroup>
            </form>
          </div>
        </div>
      </section>
      <Separator />
      <PropertyFeatures features={features} heading="Property Features" />
      <section className="py-10">
        <h3 className="mb-5 sm:mx-40 text-center sm:text-start font-medium text-xl">
          More Rooms
        </h3>
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
