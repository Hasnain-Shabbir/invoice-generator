import { Input, SelectDropdown } from '..';
import { countries } from '../../data/data';
import { useBillTo } from '../../hooks';

const BillTo = () => {
  const { billTo, setBillTo } = useBillTo();

  const handleInputChange = (id: string, value: string) => {
    setBillTo({ [id]: value });
  };

  const invoiceTerms = ['Net 10 days', 'Net 20 days', 'Net 30 days'];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Bill To</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          handleOnChange={value => handleInputChange('clientName', value)}
          id="clientName"
          placeholder="Client's Name"
          title="Client's Name"
          value={billTo.clientName}
        />
        <Input
          handleOnChange={value => handleInputChange('clientEmail', value)}
          id="clientEmail"
          placeholder="Client's Email"
          title="Client's Email"
          value={billTo.clientEmail}
        />
        <div className="col-span-full grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <SelectDropdown
            parentStyles="col-span-full md:col-auto"
            placeholder="Select Country"
            onChange={value => handleInputChange('country', value)}
            options={countries}
            label="Country"
            id="country"
          />
          <Input
            handleOnChange={value => handleInputChange('city', value)}
            id="city"
            placeholder="City"
            title="City"
            value={billTo.city}
          />
          <Input
            handleOnChange={value => handleInputChange('postalCode', value)}
            id="postalCode"
            placeholder="Postal Code"
            title="Postal Code"
            value={billTo.postalCode}
          />
          <div className="col-span-full">
            <Input
              handleOnChange={value =>
                handleInputChange('streetAddress', value)
              }
              id="streetAddress"
              placeholder="Street Address"
              title="Street Address"
              value={billTo.streetAddress}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Input
          handleOnChange={value => handleInputChange('invoiceDate', value)}
          id="invoiceDate"
          title="Invoice Date"
          placeholder="Date"
          type="date"
          value={billTo.invoiceDate}
        />
        <SelectDropdown
          id="invoiceTerms"
          label="Payment Terms"
          options={invoiceTerms}
          placeholder="Select Term"
          onChange={value => handleInputChange('invoiceTerms', value)}
        />
        <div className="col-span-full">
          <Input
            handleOnChange={value =>
              handleInputChange('projectDescription', value)
            }
            id="projectDescription"
            placeholder="Project Description"
            title="Project Description"
            value={billTo.projectDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default BillTo;
