import { useState } from 'react';
import Input from '../Input/Input';

const BillFrom = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    country: '',
    city: '',
    postalCode: '',
    streetAddress: '',
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Bill From</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Input
          handleOnChange={value => handleInputChange('companyName', value)}
          id="companyName"
          title="Company Name"
          value={formData.companyName}
        />
        <Input
          handleOnChange={value => handleInputChange('companyEmail', value)}
          id="companyEmail"
          title="Company Email"
          value={formData.companyEmail}
        />
        <div className="col-span-full grid gap-4 sm:grid-cols-3">
          <Input
            handleOnChange={value => handleInputChange('country', value)}
            id="country"
            title="Country"
            value={formData.country}
          />
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
    </div>
  );
};

export default BillFrom;
