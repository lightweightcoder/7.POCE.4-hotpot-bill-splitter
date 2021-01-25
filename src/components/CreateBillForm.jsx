/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

export default function CreateBillForm({
  billId, billName, sendBillName, sendBillId,
}) {
  // helper function to create a new bill in DB
  const createNewBill = () => {
    const newBill = {
      name: billName,
    };

    axios.post('/bills', { newBill })
      .then((result) => {
        // set the created bill's id in the parent component
        sendBillId(result.data.bill.id);
        console.log('result.data', result.data);
      });
  };

  // helper function to remove the form when a new bill is submitted
  const removeForm = () => {
    // set the bill name input in the form to empty
    sendBillName('');
  };

  // handle for submitting new link
  const handleBillNameSubmit = () => {
    console.log('inside handleBillNameSubmit');

    createNewBill();

    removeForm();
  };

  // handle for updating the input value as the user types
  const handleChange = (event) => {
    console.log('inside handleChange');

    // set the link in the parent component
    sendBillName(event.target.value);
  };

  if (billId !== null) {
    return <div />;
  }

  return (
    <div>
      <label htmlFor="bill-name">
        {'bill name to add: '}
        <input id="bill-name" type="text" value={billName} onChange={handleChange} />
      </label>
      <button type="button" onClick={handleBillNameSubmit}> create bill </button>
    </div>
  );
}
