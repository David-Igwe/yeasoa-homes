import {createContext} from "react";
import type {OrderItem, Order} from './orderInterface'

type OrderContextType = {
  state: Order;
  addItem: (item: OrderItem) => void;
  removeItem: (item: OrderItem) => void;
  clearOrder: () => void;
};


export const OrderContext = createContext<OrderContextType>({
  state: [],
  addItem: () => {},
  removeItem: () => {},
  clearOrder: () => {}
});