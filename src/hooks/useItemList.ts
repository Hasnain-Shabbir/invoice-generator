import { useContext } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';
import { Item } from '../types';

const useItemList = () => {
  const { state, dispatch } = useContext(InvoiceContext);

  const handleInputChange = (
    index: number,
    field: keyof Item,
    value: string,
  ) => {
    const updatedItem = { ...state.items[index], [field]: value };

    // Calculate total if qty or price changes
    if (field === 'qty' || field === 'price') {
      const qty = field === 'qty' ? parseFloat(value) : updatedItem.qty;
      const price = field === 'price' ? parseFloat(value) : updatedItem.price;
      updatedItem.total = parseFloat((qty * price).toFixed(2));
    }

    dispatch({
      type: 'UPDATE_ITEM',
      index,
      payload: updatedItem,
    });
  };

  const handleAddItem = () => {
    const newItem: Item = { itemName: '', qty: 0, price: 0, total: 0 };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const handleRemoveItem = (index: number) => {
    if (state.items.length > 1) {
      dispatch({ type: 'REMOVE_ITEM', index });
    }
  };

  return {
    items: state.items,
    handleInputChange,
    handleAddItem,
    handleRemoveItem,
  };
};

export default useItemList;
