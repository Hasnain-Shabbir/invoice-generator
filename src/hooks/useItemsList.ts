import { useContext } from 'react';
import { useFieldArray } from 'react-hook-form';
import { InvoiceContext } from '../context/InvoiceContext';
import { Item } from './../types/index';

const useItemsList = () => {
  const { formMethods } = useContext(InvoiceContext);
  const {
    control,
    register,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = formMethods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  // Utility function to handle the addition of a new item
  const handleAddItem = () => {
    append({ itemName: '', qty: 0, price: 0, total: 0 });
  };

  // Utility function to update item with new values
  const updateItem = (item: Item, field: keyof Item, value: number): Item => {
    // const parsedValue = parseFloat(value);
    const updatedItem = { ...item, [field]: value };

    if (field === 'qty' || field === 'price') {
      const qty = field === 'qty' ? value : updatedItem.qty;
      const price = field === 'price' ? value : updatedItem.price;
      updatedItem.total = parseFloat((qty * price).toFixed(2));
    }

    return updatedItem;
  };

  // Handle input change with proper validation
  const handleInputChange = (
    item: Item,
    index: number,
    field: keyof Item,
    value: number,
  ) => {
    const updatedItem = updateItem(item, field, value);
    setValue(`items.${index}`, updatedItem);
    trigger(`items.${index}`);
  };

  return {
    fields,
    append,
    remove,
    handleAddItem,
    handleInputChange,
    register,
    setValue,
    errors,
    watch,
    trigger,
  };
};

export default useItemsList;
