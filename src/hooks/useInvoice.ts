import { useContext } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';

const useInvoice = () => useContext(InvoiceContext);

export default useInvoice;
