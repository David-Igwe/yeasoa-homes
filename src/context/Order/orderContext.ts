import {createContext} from "react";
import type {OrderItem, Order} from './orderInterface'

type OrderContextType = {
  state: Order;
  addOrderItem: (item: OrderItem) => void;
  removeOrderItem: (item: OrderItem) => void;
  clearOrder: () => void;
};


export const OrderContext = createContext<OrderContextType>({
  state: [],
  addOrderItem: () => {},
  removeOrderItem: () => {},
  clearOrder: () => {}
});