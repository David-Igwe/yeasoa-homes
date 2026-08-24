import { Link } from "react-router-dom";

import { useOrder } from "../context/Order/useOrder";

import { Button } from "./ui/button";
import TotalOrderPrices from "./TotalOrderPrices";

import { IconTrash } from "@tabler/icons-react";

import { format } from "date-fns";
import { formatCurrency } from "@automattic/format-currency";

export default function OrderPriceSummary() {
  const { state, removeOrderItem } = useOrder();

  return (
    <section className="mx-5 sm:mx-20 py-8">
      <h2 className="font-display text-2xl font-bold mb-5">Price Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="flex flex-col gap-4">
            {state.map((orderItem) => (
              <div className="border border-border rounded-lg shadow-xl bg-primary-foreground px-3 py-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg mb-1">
                    {orderItem.propertyName}
                  </h3>
                  <IconTrash
                    className="size-5 hover:cursor-pointer hover:stroke-muted-foreground"
                    onClick={() => {
                      removeOrderItem(orderItem);
                    }}
                  />
                </div>
                <p className="text-muted-foreground text-sm mb-3">{`${format(orderItem.bookingPeriod.start, "PPP")} - ${format(orderItem.bookingPeriod.end, "PPP")} (${orderItem.nights} ${orderItem.nights === 1 ? "Night" : "Nights"})`}</p>
                <p className="text-sm font-semibold">Price Breakdown</p>
                <div className="flex justify-between mb-1">
                  <div className="text-sm text-muted-foreground">
                    Price per night
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatCurrency(orderItem.pricePerNight, "NGN", {
                      stripZeros: true,
                    })}
                  </div>
                </div>
                <div className="flex justify-between mb-1">
                  <div className="text-sm">Total Price</div>
                  <div className="text-sm font-semibold">
                    {formatCurrency(orderItem.totalPrice, "NGN", {
                      stripZeros: true,
                    })}
                  </div>
                </div>
              </div>
            ))}
            <Link
              to={`/property/${state.at(0)?.propertyId}`}
              className="hover:pointer hover:text-secondary relative hover:-left-3 transition"
            >
              &larr; Back to Properties
            </Link>
          </div>
        </div>
        <div>
          <TotalOrderPrices />
          <Button
            variant="secondary"
            nativeButton={false}
            render={<Link to="/order/create/checkout" />}
            className="uppercase p-2 w-full mt-3"
          >
            Check Out Now
          </Button>
        </div>
      </div>
    </section>
  );
}
