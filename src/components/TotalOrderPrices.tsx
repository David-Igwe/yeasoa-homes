import { useOrder } from "../context/Order/useOrder";
import { Separator } from "./ui/separator";
import { formatCurrency } from "@automattic/format-currency";

export default function TotalOrderPrices() {
  const { subTotal, taxPercentage, taxAmount, grandTotal } = useOrder();
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>
          {formatCurrency(subTotal, "NGN", {
            stripZeros: true,
          })}
        </p>
      </div>
      <Separator />
      <div className="flex justify-between">
        <p>Tax ({taxPercentage * 100}%)</p>
        <p>
          {formatCurrency(taxAmount, "NGN", {
            stripZeros: true,
          })}
        </p>
      </div>
      <Separator />
      <div className="flex justify-between">
        <p className="font-semibold">Grand Total</p>
        <p className="font-bold">
          {formatCurrency(grandTotal, "NGN", {
            stripZeros: true,
          })}
        </p>
      </div>
    </div>
  );
}
