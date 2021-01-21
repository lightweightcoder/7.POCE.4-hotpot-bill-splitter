/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function PersonAndItemForm({
  billId, itemsList, sendItemsList, peopleList, sendPeopleList,
}) {
  // Don't display this form when a user has not created a bill
  if (billId === null) {
    return <div />;
  }

  // to store the item to be added to items list
  const [item, setItem] = useState({ name: '', price: '' });
  // to store the person's name to be added to the people dropdown list
  const [person, setPerson] = useState('');

  // handle to update item name change as user types
  const handleItemNameChange = (event) => {
    const updatedItemName = event.target.value;

    setItem({ ...item, name: updatedItemName });
  };

  // handle to update item price change as user types
  const handleItemPriceChange = (event) => {
    const updatedItemPrice = event.target.value;

    setItem({ ...item, price: updatedItemPrice });
  };

  // handle to add the item to the items list in the parent component
  const handleItemSubmit = () => {
    sendItemsList([item, ...itemsList]);
  };

  // handle to update name change as user types
  const handlePersonChange = (event) => {
    const updatedPerson = event.target.value;

    setPerson(updatedPerson);
  };

  // handle to add the person to the people list in the parent component
  const handlePersonSubmit = () => {
    sendPeopleList([person, ...peopleList]);
  };

  return (
    <div>
      <label htmlFor="item-name">
        {'item name to add: '}
        <input id="item-name" type="text" value={item.name} onChange={handleItemNameChange} />
      </label>
      <label htmlFor="item-price">
        {'item price: '}
        <input id="item-price" type="number" step="0.01" value={item.price} onChange={handleItemPriceChange} />
      </label>
      <button type="button" onClick={handleItemSubmit}> add item </button>
      <br />
      <label htmlFor="person">
        {'person name to add: '}
        <input id="person" type="text" value={person} onChange={handlePersonChange} />
      </label>
      <button type="button" onClick={handlePersonSubmit}> add person </button>
    </div>
  );
}