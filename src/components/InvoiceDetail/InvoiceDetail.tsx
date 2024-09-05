import { FC, useContext, useEffect, useState } from 'react';
import { InvoiceContext } from '../../context/InvoiceContext';
import { Divider, InvoiceSummary, InvoiceTable, ListColumn } from '..';

const InvoiceDetail: FC = () => {
  const [subtotal, setSubtotal] = useState(0);
  const { formMethods } = useContext(InvoiceContext);

  const { watch } = formMethods;
  const formFieldsData = watch();
  const { billFrom, billTo, items } = formFieldsData;
  const pricesAndQtys = items.flatMap(item => [item.price, item.qty]);

  useEffect(() => {
    const newSubtotal = items.reduce(
      (acc, item) => acc + (item.price || 0) * (item.qty || 0),
      0,
    );
    setSubtotal(newSubtotal);
  }, [items, pricesAndQtys]);

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
