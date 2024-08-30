import { useState } from 'react';
import { Input, SelectDropdown } from '..';

const BillTo = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    country: '',
    city: '',
    invoiceTerms: '',
    invoiceDate: '',
    postalCode: '',
    projectDescription: '',
    streetAddress: '',
  });

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
  ];

  const invoiceTerms = ['Net 10 days', 'Net 20 days', 'Net 30 days'];

  const handleInputChange = (id: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Bill To</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Input
          handleOnChange={value => handleInputChange('clientName', value)}
          id="clientName"
          title="Client's Name"
          value={formData.clientName}
        />
        <Input
          handleOnChange={value => handleInputChange('clientEmail', value)}
          id="clientEmail"
          title="Client's Email"
          value={formData.clientEmail}
        />
        <div className="col-span-full grid grid-cols-3 gap-4">
          <SelectDropdown options={countries} label="Country" id="country" />
          <Input
            handleOnChange={value => handleInputChange('city', value)}
            id="city"
            title="City"
            value={formData.city}
          />
          <Input
            handleOnChange={value => handleInputChange('postalCode', value)}
            id="postalCode"
            title="Postal Code"
            value={formData.postalCode}
          />
          <div className="col-span-full">
            <Input
              handleOnChange={value =>
                handleInputChange('streetAddress', value)
              }
              id="streetAddress"
              title="Street Address"
              value={formData.streetAddress}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <Input
          handleOnChange={value => handleInputChange('invoiceDate', value)}
          id="invoiceDate"
          title="Invoice Date"
          value={formData.invoiceDate}
        />
        <SelectDropdown
          options={invoiceTerms}
          label="Payment Terms"
          id="paymentTerms"
        />
        <div className="col-span-full">
          <Input
            handleOnChange={value =>
              handleInputChange('projectDescription', value)
            }
            id="projectDescription"
            title="Project Description"
            value={formData.projectDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default BillTo;
