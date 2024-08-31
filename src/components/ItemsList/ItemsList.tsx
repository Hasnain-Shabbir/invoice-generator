import { useState } from 'react';
import { Input } from '..';
import { Trash } from '../../assets';

const ItemsList = () => {
  const [itemName, setItemName] = useState('');

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Items List</h2>
      <div className="flex items-center justify-center gap-4">
        <div className="grid grid-cols-5 gap-4">
          <Input
            parentStyles="col-span-2"
            value={itemName}
            handleOnChange={setItemName}
            id="itemName"
            title="Item Name"
            placeholder="Item name"
          />
          <Input
            value={itemName}
            handleOnChange={setItemName}
            id="qty"
            title="Qty."
            placeholder="Qty"
          />
          <Input
            value={itemName}
            handleOnChange={setItemName}
            id="price"
            title="Price"
            placeholder="Price"
          />
          <Input
            value={itemName}
            handleOnChange={setItemName}
            id="total"
            title="Total"
            placeholder="Total"
          />
        </div>
        <div>
          <span className="mb-6 flex"></span>
          <Trash />
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
