import { FC, useContext } from 'react';
import { Controller } from 'react-hook-form';
import { Input, SelectDropdown } from '..';
import { countries } from '../../data/data';
import { InvoiceContext } from '../../context/InvoiceContext';

const BillTo: FC = () => {
  const { formMethods } = useContext(InvoiceContext);
  const {
    control,
    formState: { errors },
    register,
  } = formMethods;

  const invoiceTerms = ['Net 10 days', 'Net 20 days', 'Net 30 days'];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Bill To</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          id="clientName"
          placeholder="Client's Name"
          title="Client's Name"
          error={errors.billTo?.clientName?.message}
          {...register('billTo.clientName')}
        />
        <Input
          id="clientEmail"
          placeholder="Client's Email"
          title="Client's Email"
          error={errors.billTo?.clientEmail?.message}
          {...register('billTo.clientEmail')}
        />
        <div className="col-span-full grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Controller
            name="billTo.country"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectDropdown
                id="country"
                label="Country"
                options={countries}
                placeholder="Select Country"
                value={value}
                onChange={onChange}
                error={errors.billTo?.country?.message}
              />
            )}
          />
          <Input
            id="city"
            placeholder="City"
            title="City"
            error={errors.billTo?.city?.message}
            {...register('billTo.city')}
          />
          <Input
            id="postalCode"
            placeholder="Postal Code"
            title="Postal Code"
            error={errors.billTo?.postalCode?.message}
            {...register('billTo.postalCode')}
          />
          <div className="col-span-full">
            <Input
              id="streetAddress"
              placeholder="Street Address"
              title="Street Address"
              error={errors.billTo?.streetAddress?.message}
              {...register('billTo.streetAddress')}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Input
          id="invoiceDate"
          placeholder="Date"
          title="Invoice Date"
          error={errors.billTo?.invoiceDate?.message}
          type="date"
          {...register('billTo.invoiceDate')}
        />
        <Controller
          name="billTo.invoiceTerms"
          control={control}
          render={({ field: { onChange, value } }) => (
            <SelectDropdown
              id="invoiceTerms"
              label="Payment Terms"
              options={invoiceTerms}
              placeholder="Select Term"
              value={value}
              onChange={onChange}
              error={errors.billTo?.invoiceTerms?.message}
            />
          )}
        />
        <div className="col-span-full">
          <Input
            id="projectDescription"
            placeholder="Project Description"
            title="Project Description"
            error={errors.billTo?.projectDescription?.message}
            {...register('billTo.projectDescription')}
          />
        </div>
      </div>
    </div>
  );
};

export default BillTo;
