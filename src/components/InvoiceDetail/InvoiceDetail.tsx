import { Divider, InvoiceTable, ListColumn } from '..';

const InvoiceDetail = () => {
  const listDataBilledFrom = [
    'Weissnat Design Agency',
    'support@weissnatdesign.co',
    '1234 Elm Street',
    'New York, 10001',
    'United States',
  ];

  const listDataBilledTo = [
    'John Glover',
    'john.glover@gmail.com',
    '699 Hope Throughway',
    'New York, 10001',
    'United States',
  ];

  const invoiceData = [
    { id: 1, item: 'Banner Design', qty: 1, price: 120, totalAmount: 120.0 },
    { id: 2, item: 'Email Design', qty: 2, price: 100, totalAmount: 200 },
  ];

  return (
    <div className="rounded-2xl bg-white p-4">
      <h3 className="text-lg font-semibold">New Invoice</h3>
      <Divider margin="my-4" />
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <ListColumn listData="12 Dec, 2024" title="Invoice Date" />
          <ListColumn listData="Net 30 Days" title="Payment Terms" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ListColumn listData={listDataBilledFrom} title="Billed From" />
          <ListColumn listData={listDataBilledTo} title="Billed To" />
        </div>
        <ListColumn
          listData="Graphic Design Project"
          title="Project Description"
        />
      </div>
      <InvoiceTable items={invoiceData} />
      <Divider margin="my-4" />
    </div>
  );
};

export default InvoiceDetail;
