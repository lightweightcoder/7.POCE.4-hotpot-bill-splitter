/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

export default function SaveBill({
  billId, peopleList, sendBIllId,
}) {
  // Don't display this form when a user has not created a bill
  if (billId === null) {
    return <div />;
  }

  // calculate the total bill amount
  const reducer = (accumulator, person) => Number(accumulator) + Number(person.amount);
  const totalBillAmount = peopleList.reduce(reducer, 0);
  console.log('bill amount', totalBillAmount);

  // handle to save the total bill amount and amount each person owed in the database
  const handleSaveBillClick = () => {
    axios.put(`/bills/${billId}`, { totalBillAmount, peopleList })
      .then((result) => {
        console.log('result', result);

        // // set the billId to null again so only the CreateBill component will be displayed
        // sendBIllId(null);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h5>Total Bill Amount</h5>
          <p>{`$ ${totalBillAmount}`}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button type="button" onClick={handleSaveBillClick}> save bill </button>
        </div>
      </div>
    </div>
  );
}
