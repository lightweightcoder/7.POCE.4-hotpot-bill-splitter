import { resolve } from 'path';
import db from './models/index.mjs';

// import controllers
import initBillsController from './controllers/bills.mjs';

export default function routes(app) {
  // initialise controllers
  const BillsController = initBillsController(db);

  // create a new bill
  app.post('/bills', BillsController.create);

  // update a bill with total amount and amount each person owes
  app.put('/bills/:id', BillsController.update);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
