import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import { BillFrom, BillTo, Item, InvoiceState } from '../types';
import { getCurrentDate } from '../utils';

// Initial state
const initialState: InvoiceState = {
  billFrom: {
    companyName: '',
    companyEmail: '',
    country: '',
    city: '',
    postalCode: '',
    streetAddress: '',
  },
  billTo: {
    clientName: '',
    clientEmail: '',
    country: '',
    city: '',
    invoiceTerms: '',
    invoiceDate: getCurrentDate(),
    postalCode: '',
    projectDescription: '',
    streetAddress: '',
  },
  items: [{ itemName: '', qty: 0, price: 0, total: 0 }],
};

// Action types
type Action =
  | { type: 'SET_BILL_FROM'; payload: Partial<BillFrom> }
  | { type: 'SET_BILL_TO'; payload: Partial<BillTo> }
  | { type: 'SET_ITEMS'; payload: Item[] }
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; index: number }
  | { type: 'UPDATE_ITEM'; index: number; payload: Partial<Item> }
  | { type: 'RESET_FORM' };

const invoiceReducer = (state: InvoiceState, action: Action): InvoiceState => {
  switch (action.type) {
    case 'SET_BILL_FROM':
      return { ...state, billFrom: { ...state.billFrom, ...action.payload } };
    case 'SET_BILL_TO':
      return { ...state, billTo: { ...state.billTo, ...action.payload } };
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, i) => i !== action.index),
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item, i) =>
          i === action.index ? { ...item, ...action.payload } : item,
        ),
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

export const InvoiceContext = createContext<{
  state: InvoiceState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider component
export const InvoiceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(invoiceReducer, initialState);

  return (
    <InvoiceContext.Provider value={{ state, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
};
