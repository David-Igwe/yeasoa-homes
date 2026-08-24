import {createContext} from "react";
import type {OrderItem, Order} from './orderInterface'

type OrderContextType = {
  state: Order;
  addOrderItem: (item: OrderItem) => void;
  removeOrderItem: (item: OrderItem) => void;
  clearOrder: () => void;
  subTotal: number;
  taxPercentage: number;
  taxAmount: number;
  grandTotal: number;
};


export const OrderContext = createContext<OrderContextType>({
  state: [],
  addOrderItem: () => {},
  removeOrderItem: () => {},
  clearOrder: () => {},
  subTotal: 0,
  taxPercentage: 0,
  taxAmount: 0,
  grandTotal: 0
});