import React from 'react';
import { Button, ItemRow } from '..';
import { useItemList } from '../../hooks';
import { Item } from '../../types';
import { Plus } from '../../assets';

const ItemsList: React.FC = () => {
  const { items, handleInputChange, handleAddItem, handleRemoveItem } =
    useItemList();

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Items List</h2>
      <div className="flex flex-col gap-4">
        {items.map((item: Item, index: number) => (
          <ItemRow
            key={index}
            item={item}
            index={index}
            onInputChange={handleInputChange}
            onRemove={handleRemoveItem}
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
