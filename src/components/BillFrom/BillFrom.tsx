import { Input, SelectDropdown } from '..';
import { countries } from '../../data/data';
import { useBillFrom } from '../../hooks';

const BillFrom = () => {
  const { billFrom, setBillFrom } = useBillFrom();

  const handleInputChange = (id: string, value: string) => {
    setBillFrom({ [id]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Bill From</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          handleOnChange={value => handleInputChange('companyName', value)}
          id="companyName"
          placeholder="Company Name"
          title="Company Name"
          value={billFrom.companyName}
        />
        <Input
          handleOnChange={value => handleInputChange('companyEmail', value)}
          id="companyEmail"
          placeholder="Company Email"
          title="Company Email"
          value={billFrom.companyEmail}
        />
        <div className="col-span-full grid gap-4 sm:grid-cols-3">
          <SelectDropdown
            id="country"
            label="Country"
            onChange={value => handleInputChange('country', value)}
            options={countries}
            parentStyles="col-span-full md:col-auto"
            placeholder="Select Country"
          />
          <Input
            handleOnChange={value => handleInputChange('city', value)}
            id="city"
            placeholder="City"
            title="City"
            value={billFrom.city}
          />
          <Input
            handleOnChange={value => handleInputChange('postalCode', value)}
            id="postalCode"
            placeholder="Postal Code"
            title="Postal Code"
            value={billFrom.postalCode}
          />
          <div className="col-span-full">
            <Input
              handleOnChange={value =>
                handleInputChange('streetAddress', value)
              }
              id="streetAddress"
              placeholder="Street Address"
              title="Street Address"
              value={billFrom.streetAddress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
