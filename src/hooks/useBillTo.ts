import { useEffect, useCallback } from 'react';
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

  useEffect(() => {
    if (!billTo.invoiceDate) {
      const currentDate = new Date().toISOString().split('T')[0];
      setBillTo({ invoiceDate: currentDate });
    }
  }, [billTo.invoiceDate, setBillTo]);

  return { billTo, setBillTo };
};

export default useBillTo;
