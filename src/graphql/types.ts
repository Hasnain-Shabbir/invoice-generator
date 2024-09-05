export interface AddressAttributes {
  streetAddress: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface BillingFromAttributes {
  companyName: string;
  companyEmail: string;
  billingFromAddressAttributes: AddressAttributes;
}

export interface BillingToAttributes {
  clientName: string;
  clientEmail: string;
  billingToAddressAttributes: AddressAttributes;
}

export interface ItemAttributes {
  name: string;
  quantity: number;
  price: number;
}

export interface CreateInvoiceAttributes {
  invoiceDate: string;
  paymentTerms: 'NET_10_DAYS' | 'NET_20_DAYS' | 'NET_30_DAYS';
  projectDescription: string;
  billingFromAttributes: BillingFromAttributes;
  billingToAttributes: BillingToAttributes;
  itemAttributes: ItemAttributes[];
}

export interface CreateInvoiceInput {
  clientMutationId?: string;
  createInvoiceAttributes: CreateInvoiceAttributes;
}

export interface CreateInvoiceResponse {
  createInvoice: {
    billingFrom: {
      billingFromAddress: AddressAttributes;
      companyEmail: string;
      companyName: string;
      id: string;
    };
    billingTo: {
      billingToAddress: AddressAttributes;
      clientEmail: string;
      clientName: string;
      id: string;
    };
    id: string;
    invoiceDate: string;
    items: Array<{
      id: string;
      name: string;
      price: number;
      quantity: number;
      totalPrice: number;
    }>;
    paymentTerms: string;
    projectDescription: string;
    subTotal: number;
    tax: number;
    totalAmount: number;
  };
}
