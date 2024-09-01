import { FC, memo } from 'react';

interface InvoiceSummaryProps {
  subtotal: number;
  tax: string;
}

const InvoiceSummary: FC<InvoiceSummaryProps> = memo(({ subtotal, tax }) => {
  const taxRate = parseFloat(tax) / 100;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

  return (
    <div className="flex justify-end">
      <table className="text-left font-semibold rtl:text-right">
        <tbody>
          <tr className="bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-2 font-semibold"
            >
              Subtotal
            </th>
            <td className="px-6 py-2 text-right">{formatCurrency(subtotal)}</td>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-2 font-semibold"
            >
              Tax
            </th>
            <td className="px-6 py-2 text-right">{tax}%</td>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-2 text-xl font-semibold"
            >
              Total
            </th>
            <td className="px-6 py-2 text-right text-xl">
              {formatCurrency(total)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

export default InvoiceSummary;
