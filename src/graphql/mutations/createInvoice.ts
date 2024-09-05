import { gql } from '@apollo/client';

const CREATE_INVOICE = gql`
  mutation CreateInvoice($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      billingFrom {
        billingFromAddress {
          streetAddress
          city
          country
          postalCode
        }
        companyEmail
        companyName
        id
      }
      billingTo {
        billingToAddress {
          streetAddress
          city
          country
          postalCode
        }
        clientEmail
        clientName
        id
      }
      id
      invoiceDate
      items {
        id
        name
        price
        quantity
        totalPrice
      }
      paymentTerms
      projectDescription
      subTotal
      tax
      totalAmount
    }
  }
`;

export default CREATE_INVOICE;
