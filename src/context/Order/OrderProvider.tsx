import {type ReactNode, useReducer} from 'react';
import {OrderContext} from './orderContext';
import type {OrderItem, Order} from './orderInterface';

function reducer(state: Order, action: {type: string, payload?: OrderItem }): Order{
  switch (action.type) {
    case 'ADD_ITEM':
        if(action.payload)
          return [...state, action.payload]
        else
          return state    

      case 'REMOVE_ITEM':
        return state.filter((orderItem) => orderItem.propertyId !== action.payload?.propertyId)

      case 'CLEAR_ORDER':
        return []

      default:
      throw new Error();  
  }
};

export default function OrderProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(reducer, []);

  const addOrderItem = (orderItem: OrderItem) => dispatch({type: 'ADD_ITEM', payload: orderItem});

  const removeOrderItem = (orderItem: OrderItem) => dispatch({type: 'REMOVE_ITEM', payload: orderItem});

  const clearOrder = () => dispatch({type: 'CLEAR_ORDER'});

  const orderItemsPrices = state.map((orderItem) => orderItem.totalPrice);

  const subTotal = orderItemsPrices.length ? orderItemsPrices.reduce((acc, curr) => acc + curr) : 0

  const taxPercentage = 0.05;

  const taxAmount = subTotal * taxPercentage;

  const grandTotal = subTotal + taxAmount;

  return (
    <OrderContext.Provider value={{state, addOrderItem, removeOrderItem, clearOrder, subTotal, taxPercentage, taxAmount, grandTotal}}>
      {children}
    </OrderContext.Provider>
  )
}


