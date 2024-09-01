import { useState } from 'react';
import { Input, SelectDropdown } from '..';
import { countries } from '../../data/data';
import { getCurrentDate } from '../../utils';

interface FormData {
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

const BillTo = () => {
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    clientEmail: '',
    country: '',
    city: '',
    invoiceTerms: '',
    invoiceDate: getCurrentDate(),
    postalCode: '',
    projectDescription: '',
    streetAddress: '',
  });

  const invoiceTerms = ['Net 10 days', 'Net 20 days', 'Net 30 days'];

  const handleChange = (id: keyof FormData) => (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Bill To</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          handleOnChange={value => handleChange('clientName')(value)}
          id="clientName"
          placeholder="Client's Name"
          title="Client's Name"
          value={formData.clientName}
        />
        <Input
          handleOnChange={value => handleChange('clientEmail')(value)}
          id="clientEmail"
          placeholder="Client's Email"
          title="Client's Email"
          value={formData.clientEmail}
        />
        <div className="col-span-full grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <SelectDropdown
            parentStyles="col-span-full md:col-auto"
            placeholder="Select Country"
            onChange={handleChange('country')}
            options={countries}
            label="Country"
            id="country"
          />
          <Input
            handleOnChange={value => handleChange('city')(value)}
            id="city"
            placeholder="City"
            title="City"
            value={formData.city}
          />
          <Input
            handleOnChange={value => handleChange('postalCode')(value)}
            id="postalCode"
            placeholder="Postal Code"
            title="Postal Code"
            value={formData.postalCode}
          />
          <div className="col-span-full">
            <Input
              handleOnChange={value => handleChange('streetAddress')(value)}
              id="streetAddress"
              placeholder="Street Address"
              title="Street Address"
              value={formData.streetAddress}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Input
          handleOnChange={value => handleChange('invoiceDate')(value)}
          id="invoiceDate"
          title="Invoice Date"
          placeholder="Date"
          type="date"
          value={formData.invoiceDate}
        />
        <SelectDropdown
          id="invoiceTerms"
          label="Payment Terms"
          options={invoiceTerms}
          placeholder="Select Term"
          onChange={handleChange('invoiceTerms')}
        />
        <div className="col-span-full">
          <Input
            handleOnChange={value => handleChange('projectDescription')(value)}
            id="projectDescription"
            placeholder="Project Description"
            title="Project Description"
            value={formData.projectDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default BillTo;
