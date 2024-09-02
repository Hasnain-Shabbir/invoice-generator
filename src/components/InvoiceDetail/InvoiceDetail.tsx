import { useContext, useMemo } from 'react';
import { InvoiceContext } from '../../context/InvoiceContext';
import { Divider, InvoiceSummary, InvoiceTable, ListColumn } from '..';

const InvoiceDetail = () => {
  const { state } = useContext(InvoiceContext);
  const { billFrom, billTo, items } = state;

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.total, 0);
  }, [items]);

  return (
    <div className="rounded-2xl bg-white p-4">
      <h3 className="text-lg font-semibold">New Invoice</h3>
      <Divider margin="my-4" />
      <div className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-4">
          <ListColumn listData={billTo.invoiceDate} title="Invoice Date" />
          <ListColumn listData={billTo.invoiceTerms} title="Payment Terms" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-4">
          <ListColumn
            listData={[
              billFrom.companyName,
              billFrom.companyEmail,
              billFrom.streetAddress,
              billFrom.city,
              billFrom.country,
              billFrom.postalCode,
            ]}
            title="Billed From"
          />
          <ListColumn
            listData={[
              billTo.clientName,
              billTo.clientEmail,
              billTo.streetAddress,
              billTo.city,
              billTo.country,
              billTo.postalCode,
            ]}
            title="Billed To"
          />
        </div>
        <ListColumn
          listData={billTo.projectDescription}
          title="Project Description"
        />
      </div>
      <InvoiceTable items={items} />
      <Divider margin="my-4" />
      <InvoiceSummary tax="10" subtotal={subtotal} />
    </div>
  );
};

export default InvoiceDetail;
