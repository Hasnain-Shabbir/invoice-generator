import React, { useContext } from 'react';
import { Controller } from 'react-hook-form';
import { Input, SelectDropdown } from '..';
import { InvoiceContext } from '../../context/InvoiceContext';
import { countries } from '../../data/data';

const BillFrom: React.FC = () => {
  const { formMethods } = useContext(InvoiceContext);
  const {
    control,
    formState: { errors },
    register,
  } = formMethods;

  return (
    <div>
      <h2 className="text-2xl font-semibold">Bill From</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          id="companyName"
          placeholder="Company Name"
          title="Company Name"
          error={errors.billFrom?.companyName?.message}
          {...register('billFrom.companyName')}
        />
        <Input
          id="companyEmail"
          placeholder="Company Email"
          title="Company Email"
          error={errors.billFrom?.companyEmail?.message}
          {...register('billFrom.companyEmail')}
        />
        <div className="col-span-full grid gap-4 sm:grid-cols-3">
          <Controller
            name="billFrom.country"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectDropdown
                id="country"
                label="Country"
                options={countries}
                placeholder="Select Country"
                value={value}
                onChange={onChange}
                error={errors.billFrom?.country?.message}
                parentStyles="col-span-full md:col-auto"
              />
            )}
          />
          <Input
            id="city"
            placeholder="City"
            title="City"
            error={errors.billFrom?.city?.message}
            {...register('billFrom.city')}
          />
          <Input
            id="postalCode"
            placeholder="Postal Code"
            title="Postal Code"
            error={errors.billFrom?.postalCode?.message}
            {...register('billFrom.postalCode')}
          />
        </div>
        <div className="col-span-full">
          <Input
            id="streetAddress"
            placeholder="Street Address"
            title="Street Address"
            error={errors.billFrom?.streetAddress?.message}
            {...register('billFrom.streetAddress')}
          />
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
