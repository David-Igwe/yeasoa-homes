import { useOrder } from "../src/context/Order/useOrder";

import OrderPriceSummary from "../src/components/OrderPriceSummary";
import NoOrder from "../src/components/NoOrder";

export default function OrderSummary() {
  const { state } = useOrder();

  return <>{state.length ? <OrderPriceSummary /> : <NoOrder />}</>;
}
