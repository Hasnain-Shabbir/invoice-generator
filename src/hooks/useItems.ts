import { useState } from 'react';

interface Item {
  itemName: string;
  qty: number;
  price: number;
  total: number;
}

const useItems = () => {
  const [items, setItems] = useState<Item[]>([
    { itemName: '', qty: 0, price: 0, total: 0 },
  ]);

  const handleInputChange = (
    index: number,
    field: keyof Item,
    value: string,
  ) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]:
        field === 'qty' || field === 'price' || field === 'total'
          ? parseFloat(value)
          : value,
    };
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { itemName: '', qty: 0, price: 0, total: 0 }]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  return {
    items,
    handleInputChange,
    handleAddItem,
    handleRemoveItem,
  };
};

export default useItems;
