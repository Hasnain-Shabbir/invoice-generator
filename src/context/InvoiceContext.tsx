import React, { createContext, useReducer } from 'react';
import { BillFrom, BillTo, Item, InvoiceState } from '../types';

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
    invoiceDate: '',
    postalCode: '',
    projectDescription: '',
    streetAddress: '',
  },
  items: [],
};

// Action types
type Action =
  | { type: 'SET_BILL_FROM'; payload: Partial<BillFrom> }
  | { type: 'SET_BILL_TO'; payload: Partial<BillTo> }
  | { type: 'SET_ITEMS'; payload: Item[] }
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; index: number }
  | { type: 'UPDATE_ITEM'; index: number; payload: Partial<Item> };

// Reducer function to manage state updates
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
    default:
      return state;
  }
};

// Create context
export const InvoiceContext = createContext<{
  state: InvoiceState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider component
export const InvoiceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(invoiceReducer, initialState);

  return (
    <InvoiceContext.Provider value={{ state, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
};
