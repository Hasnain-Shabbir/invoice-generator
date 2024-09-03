import { z } from 'zod';

export const invoiceFormSchema = z.object({
  billFrom: z.object({
    companyName: z.string().min(1, 'Company Name is required'),
    companyEmail: z.string().email('Invalid email address'),
    country: z.string().min(1, 'Country is required'),
    city: z.string().min(1, 'City is required'),
    postalCode: z.string().min(1, 'Postal Code is required'),
    streetAddress: z.string().min(1, 'Street Address is required'),
  }),
  billTo: z.object({
    clientName: z.string().min(1, "Client's Name is required"),
    clientEmail: z.string().email('Invalid email address'),
    country: z.string().min(1, 'Country is required'),
    city: z.string().min(1, 'City is required'),
    postalCode: z.string().min(1, 'Postal Code is required'),
    invoiceTerms: z.string().min(1, 'Payment Terms are required'),
    invoiceDate: z.string().min(1, 'Invoice Date is required'),
    projectDescription: z.string().min(1, 'Project Description is required'),
    streetAddress: z.string().min(1, 'Street Address is required'),
  }),
  items: z.array(
    z.object({
      itemName: z.string().min(1, 'Item Name is required'),
      qty: z.number().min(1, 'Quantity must be at least 1'),
      price: z.number().min(0.01, 'Price must be greater than 0'),
      total: z.number().min(0, 'Total cannot be negative'),
    }),
  ),
});

export type FormData = z.infer<typeof invoiceFormSchema>;
