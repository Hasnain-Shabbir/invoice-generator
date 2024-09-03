import React from 'react';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { Button, Input } from '..';
import { InvoiceState } from '../../types';
import { Trash } from '../../assets';

interface Item {
  itemName: string;
  qty: number;
  price: number;
  total: number;
}

interface ItemRowProps {
  index: number;
  item: Item;
  onInputChange: (field: keyof Item, value: string) => void;
  onRemove: () => void;
  register: UseFormRegister<InvoiceState>;
  errors: FieldErrors<InvoiceState>;
  trigger: UseFormTrigger<InvoiceState>;
}

const ItemRow: React.FC<ItemRowProps> = ({
  index,
  onRemove,
  register,
  errors,
}) => (
  <div className="grid items-end gap-4 md:flex">
    <div className="grid items-center gap-4 sm:grid-cols-4">
      <Input
        {...register(`items.${index}.itemName` as const, {
          required: 'Item name is required',
        })}
        error={errors.items?.[index]?.itemName?.message}
        id={`itemName-${index}`}
        placeholder="Item name"
        title="Item Name"
      />
      <Input
        {...register(`items.${index}.qty`, { valueAsNumber: true })}
        error={errors.items?.[index]?.qty?.message}
        id={`qty-${index}`}
        placeholder="Qty"
        title="Qty."
        type="number"
      />
      <Input
        {...register(`items.${index}.price`, { valueAsNumber: true })}
        error={errors.items?.[index]?.price?.message}
        id={`price-${index}`}
        placeholder="Price"
        title="Price"
        type="number"
      />
      <Input
        {...register(`items.${index}.total`, { valueAsNumber: true })}
        disabled
        id={`total-${index}`}
        placeholder="Total"
        title="Total"
        type="number"
      />
    </div>
    <div className="flex items-center justify-end md:justify-center">
      <Button variant="outlined" onClick={onRemove}>
        <Trash />
      </Button>
    </div>
  </div>
);

export default ItemRow;
