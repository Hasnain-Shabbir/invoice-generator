import { generateEnum } from '../../utils';
import { InvoiceState } from '../../types';

export const prepareInvoiceInput = (
  data: InvoiceState,
  mutationUniqueId: string,
) => ({
  clientMutationId: mutationUniqueId,
  createInvoiceAttributes: {
    invoiceDate: data.billTo.invoiceDate,
    paymentTerms: generateEnum(data.billTo.invoiceTerms),
    projectDescription: data.billTo.projectDescription,
    billingFromAttributes: {
      companyName: data.billFrom.companyName,
      companyEmail: data.billFrom.companyEmail,
      billingFromAddressAttributes: {
        streetAddress: data.billFrom.streetAddress,
        city: data.billFrom.city,
        country: data.billFrom.country,
        postalCode: data.billFrom.postalCode,
      },
    },
    billingToAttributes: {
      clientName: data.billTo.clientName,
      clientEmail: data.billTo.clientEmail,
      billingToAddressAttributes: {
        streetAddress: data.billTo.streetAddress,
        city: data.billTo.city,
        country: data.billTo.country,
        postalCode: data.billTo.postalCode,
      },
    },
    itemAttributes: data.items.map(item => ({
      name: item.itemName,
      quantity: item.qty,
      price: item.price,
    })),
  },
});
