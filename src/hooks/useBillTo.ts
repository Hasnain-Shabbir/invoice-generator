import { useCallback } from 'react';
import { BillTo } from '../types';
import { useInvoice } from '.';

const useBillTo = () => {
  const { state, dispatch } = useInvoice();
  const billTo = state.billTo;

  const setBillTo = useCallback(
    (payload: Partial<BillTo>) => {
      dispatch({ type: 'SET_BILL_TO', payload });
    },
    [dispatch],
  );

  return { billTo, setBillTo };
};

export default useBillTo;
