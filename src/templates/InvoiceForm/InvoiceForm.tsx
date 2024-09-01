import { BillFrom, ItemsList } from '../../components';
import BillTo from '../../components/BillTo/BillTo';

const InvoiceForm = () => {
  return (
    <div className="rounded-3xl border border-borderColor p-6">
      <BillFrom />
      <div className="py-8"></div>
      <BillTo />
      <div className="py-8"></div>
      <ItemsList />
    </div>
  );
};

export default InvoiceForm;
