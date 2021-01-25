/* eslint-disable react/prop-types */
import React from 'react';

export default function PersonList({
  billId, peopleList,
}) {
  // Don't display this form when a user has not created a bill
  if (billId === null) {
    return <div />;
  }

  // component for display a list of people and the amount they are paying for the bill
  const peopleDetailJsx = peopleList.map((person) => (
    <li key={person.name}>
      <div className="row">
        <div className="col-6">{person.name}</div>
        <div className="col-6">{person.amount}</div>
      </div>
    </li>
  ));

  return (
    <div className="row">
      <div className="col-12">
        <h5>Amount Owed Person List</h5>
        <div className="row">
          <div className="col-6">Person Name</div>
          <div className="col-6">Amount Owed in $</div>
        </div>
        <ul>
          {peopleDetailJsx}
        </ul>
      </div>
    </div>
  );
}
