import React, { useEffect, useMemo, useRef } from 'react';
import { Button, ItemRow } from '..';
import { useItemsList } from '../../hooks';
import { Item } from '../../types';
import { Plus } from '../../assets';

const ItemsList: React.FC = () => {
  const {
    fields,
    handleAddItem,
    handleInputChange,
    register,
    errors,
    remove,
    trigger,
    watch,
  } = useItemsList();

  const watchedFields = watch('items');
  const prevValuesRef = useRef<{
    [key: number]: { qty: number; price: number };
  }>({});

  const watchedFieldsStr = useMemo(
    () => JSON.stringify(watchedFields),
    [watchedFields],
  );

  useEffect(() => {
    watchedFields.forEach((item: Item, index: number) => {
      const prevValues = prevValuesRef.current[index] || { qty: 0, price: 0 };
      const currentQty = item.qty ?? 0;
      const currentPrice = item.price ?? 0;

      if (currentQty !== prevValues.qty) {
        handleInputChange(item, index, 'qty', currentQty);
      }

      if (currentPrice !== prevValues.price) {
        handleInputChange(item, index, 'price', currentPrice);
      }

      prevValuesRef.current[index] = { qty: currentQty, price: currentPrice };
    });
  }, [watchedFieldsStr, handleInputChange]);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Items List</h2>
      <div className="flex flex-col gap-4">
        {fields.map((item, index) => (
          <ItemRow
            key={item.id}
            item={item}
            index={index}
            onInputChange={(field, value) =>
              handleInputChange(item, index, field, parseFloat(value))
            }
            onRemove={() => remove(index)}
            register={register}
            errors={errors}
            trigger={trigger}
          />
        ))}
        <Button styles="w-full mt-4" icon={<Plus />} onClick={handleAddItem}>
          Add New Item
        </Button>
      </div>
    </div>
  );
};

export default ItemsList;
