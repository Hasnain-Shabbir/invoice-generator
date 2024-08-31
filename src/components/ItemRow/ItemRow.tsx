import React from 'react';
import { Button, Input } from '..';
import { Trash } from '../../assets';

interface Item {
  itemName: string;
  qty: number;
  price: number;
  total: number;
}

interface ItemRowProps {
  item: Item;
  index: number;
  onInputChange: (index: number, field: keyof Item, value: string) => void;
  onRemove: (index: number) => void;
}

const ItemRow: React.FC<ItemRowProps> = ({
  item,
  index,
  onInputChange,
  onRemove,
}) => (
  <div className="flex items-end gap-4">
    <div className="grid grid-cols-5 items-center gap-4">
      <Input
        parentStyles="col-span-2"
        value={item.itemName}
        handleOnChange={value => onInputChange(index, 'itemName', value)}
        id={`itemName-${index}`}
        title="Item Name"
        placeholder="Item name"
      />
      <Input
        value={item.qty}
        handleOnChange={value => onInputChange(index, 'qty', value)}
        id={`qty-${index}`}
        title="Qty."
        placeholder="Qty"
        type="number"
      />
      <Input
        value={item.price}
        handleOnChange={value => onInputChange(index, 'price', value)}
        id={`price-${index}`}
        title="Price"
        placeholder="Price"
        type="number"
      />
      <Input
        value={item.total}
        handleOnChange={value => onInputChange(index, 'total', value)}
        id={`total-${index}`}
        title="Total"
        placeholder="Total"
        type="number"
      />
    </div>
    <div className="flex items-center justify-center">
      <Button variant="outlined" onClick={() => onRemove(index)}>
        <Trash />
      </Button>
    </div>
  </div>
);

export default ItemRow;
