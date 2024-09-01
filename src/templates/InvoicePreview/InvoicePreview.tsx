import { InvoiceDetail } from '../../components';

const InvoicePreview = () => {
  return (
    <div className="rounded-3xl bg-neutral-100 p-6">
      <h2 className="mb-4 text-2xl font-semibold">Preview</h2>
      <InvoiceDetail />
    </div>
  );
};

export default InvoicePreview;
