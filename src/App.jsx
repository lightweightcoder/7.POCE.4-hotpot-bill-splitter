/* eslint-disable max-len */
import React, { useState } from 'react';
import CreateBillForm from './components/CreateBillForm.jsx';
import PersonAndItemForm from './components/PersonAndItemForm.jsx';

export default function App() {
  const [billName, setBillName] = useState('');
  const [billId, setBillId] = useState(null);
  const [itemsList, setItemsList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  console.log('billId', billId);
  console.log('peopleList', peopleList);
  console.log('itemsList', itemsList);

  return (
    <div>
      <CreateBillForm billName={billName} sendBillName={setBillName} sendBillId={setBillId} />
      <PersonAndItemForm billId={billId} itemsList={itemsList} sendItemsList={setItemsList} peopleList={peopleList} sendPeopleList={setPeopleList} />
    </div>
  );
}
