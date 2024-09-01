import { useCallback } from 'react';
import { BillFrom } from '../types';
import { useInvoice } from '.';

const useBillFrom = () => {
  const { state, dispatch } = useInvoice();
  const billFrom = state.billFrom;

  const setBillFrom = useCallback(
    (payload: Partial<BillFrom>) => {
      dispatch({ type: 'SET_BILL_FROM', payload });
    },
    [dispatch],
  );

  return { billFrom, setBillFrom };
};

export default useBillFrom;
