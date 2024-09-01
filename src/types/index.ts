export interface BillFrom {
  companyName: string;
  companyEmail: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
}

export interface BillTo {
  clientName: string;
  clientEmail: string;
  country: string;
  city: string;
  invoiceTerms: string;
  invoiceDate: string;
  postalCode: string;
  projectDescription: string;
  streetAddress: string;
}

export interface Item {
  itemName: string;
  qty: number;
  price: number;
  total: number;
}

export interface InvoiceState {
  billFrom: BillFrom;
  billTo: BillTo;
  items: Item[];
}
