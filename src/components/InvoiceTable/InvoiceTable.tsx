import { FC } from 'react';

interface InvoiceItem {
  item: string;
  qty: number | string;
  price: number | string;
  totalAmount: number | string;
}

interface InvoiceTableProps {
  items: InvoiceItem[];
}

const InvoiceTable: FC<InvoiceTableProps> = ({ items }) => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full text-left">
        <thead className="bg-neutral-100 text-secondary-50">
          <tr className="rounded-3xl">
            <th scope="col" className="rounded-l px-3 py-2 font-normal">
              Item
            </th>
            <th scope="col" className="px-3 py-2 font-normal">
              Qty.
            </th>
            <th scope="col" className="px-3 py-2 font-normal">
              Price
            </th>
            <th
              scope="col"
              className="rounded-r px-3 py-2 text-right font-normal"
            >
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="bg-white font-medium">
              <td className="px-3 py-2">{item.item}</td>
              <td className="px-3 py-2">{item.qty}</td>
              <td className="px-3 py-2">{item.price}</td>
              <td className="px-3 py-2 text-right">{item.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
