/* eslint-disable max-len */
import React, { useState } from 'react';
import CreateBillForm from './components/CreateBillForm.jsx';
import PersonAndItemForm from './components/PersonAndItemForm.jsx';
import ItemList from './components/ItemList.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log('error detected! we are setting state');
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      console.log('rendering error');
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong inside app
          {'\''}
          s children!!
        </h1>
      );
    }

    return children;
  }
}

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
      <ErrorBoundary>
        <CreateBillForm billName={billName} sendBillName={setBillName} sendBillId={setBillId} />
        <PersonAndItemForm billId={billId} itemsList={itemsList} sendItemsList={setItemsList} peopleList={peopleList} sendPeopleList={setPeopleList} />
        <ItemList billId={billId} itemsList={itemsList} sendItemsList={setItemsList} peopleList={peopleList} sendPeopleList={setPeopleList} />
      </ErrorBoundary>
    </div>
  );
}
