/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function ItemList({
  billId, itemsList, sendItemsList, peopleList, sendPeopleList,
}) {
  // Don't display this form when a user has not created a bill
  if (billId === null) {
    return <div />;
  }

  // make JSX of person options for dropdown menu
  const personOptions = peopleList.map((person) => (
    <option key={person.name} value={person.name}>{person.name}</option>
  ));

  // component for selecting a person
  function PersonSelector({ itemIndex }) {
    const [selectedName, setSelectedName] = useState('select');
    console.log('selected name', selectedName);

    // handle for when a person is selected
    const handleSelectChange = (event) => {
      // set the event target's value, which is the selected option's value (i.e. person name)
      setSelectedName(event.target.value);
    };

    // handle for when a user clicks on 'add person' btn to add a person to an item
    const handlePersonNameSubmit = () => {
      console.log('inside handlePersonNameSubmit');
      // add the selected person name into the corresponding
      // item in the itemslist
      itemsList[itemIndex].people.push(selectedName);

      // update the itemsList in the app component
      sendItemsList([...itemsList]);

      // find the index of the submitted person in peopleList array
      console.log('submitted Name', selectedName);
      const isSubmittedPerson = (person) => person.name === selectedName;
      const indexOfPerson = peopleList.findIndex(isSubmittedPerson);
      console.log('indexOfPerson', indexOfPerson);

      // add the item's price to the person's total amount that he has to pay
      // (peopleList is in the app component)
      peopleList[indexOfPerson].amount += Number(itemsList[itemIndex].price);

      // update the peopleList in the app component on the person's total amount to pay for bill
      sendPeopleList([...peopleList]);

      // set the selected option's value back to default value
      setSelectedName('select');
    };

    return (
      <div className="row" id="person-selection">
        <div className="col-6">
          <select
            className="person-name"
            value={selectedName}
            onChange={handleSelectChange}
          >
            <option key="select" value="select" hidden>select</option>
            {personOptions}
          </select>
        </div>
        <div className="col-6">
          <button type="button" onClick={handlePersonNameSubmit}>
            Add Person
          </button>
        </div>
      </div>
    );
  }

  // component for display a list of people who is paying for that item
  function PeopleNamesList({ item }) {
    const { people } = item;

    const peopleNamesJsx = people.map((personName) => <li key={personName}>{personName}</li>);

    return (
      <div className="row" id="person-names-list">
        <div className="col-12">
          <h5>people names list</h5>
          <ul>
            {peopleNamesJsx}
          </ul>
        </div>
      </div>
    );
  }

  // make an array of item elements, 1 item element for 1 item
  const itemsJsx = itemsList.map((item, index) => (
    <div key={index} className="container item-container">
      <div className="row" id="item-detail">
        <div className="col-6">
          item name:
          {item.name}
        </div>
        <div className="col-6">
          item price:
          {item.price}
        </div>
      </div>
      <PersonSelector itemIndex={index} />
      <PeopleNamesList item={item} />
    </div>
  ));

  return (
    <div>
      <h4>Items List</h4>
      {itemsJsx}
    </div>
  );
}
