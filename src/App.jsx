import React, { useState } from 'react';
import CreateBillForm from './components/CreateBillForm.jsx';

export default function App() {
  const [billName, setBillName] = useState('');
  const [billId, setBillId] = useState(null);
  console.log('billId', billId);

  return (
    <div>
      <CreateBillForm billName={billName} sendBillName={setBillName} sendBillId={setBillId} />
    </div>
  );
}
