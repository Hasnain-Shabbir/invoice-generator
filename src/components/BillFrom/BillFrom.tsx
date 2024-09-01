import { useState } from 'react';
import { Input, SelectDropdown } from '..';
import { countries } from '../../data/data';

interface FormData {
  companyName: string;
  companyEmail: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
}

const BillFrom = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    companyEmail: '',
    country: '',
    city: '',
    postalCode: '',
    streetAddress: '',
  });

  const handleChange = (id: keyof FormData) => (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Bill From</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          handleOnChange={value => handleChange('companyName')(value)}
          id="companyName"
          placeholder="Company Name"
          title="Company Name"
          value={formData.companyName}
        />
        <Input
          handleOnChange={value => handleChange('companyEmail')(value)}
          id="companyEmail"
          placeholder="Company Email"
          title="Company Email"
          value={formData.companyEmail}
        />
        <div className="col-span-full grid gap-4 sm:grid-cols-3">
          <SelectDropdown
            id="country"
            label="Country"
            onChange={handleChange('country')}
            options={countries}
            parentStyles="col-span-full md:col-auto"
            placeholder="Select Country"
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
    </div>
  );
};

export default BillFrom;
