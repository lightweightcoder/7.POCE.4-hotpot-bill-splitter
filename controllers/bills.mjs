export default function initBillsController(db) {
  const create = async (request, response) => {
    try {
      console.log('request.body', request.body);

      const bill = await db.Bill.create(request.body.newBill);

      response.send({ bill });
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (request, response) => {
    try {
      console.log('request.body', request.body);
      console.log('request.params', request.params);

      // update the bill amount
      await db.Bill.update({
        total: request.body.totalBillAmount,
      },
      {
        where: {
          id: request.params.id,
        },
      });

      // create entries in people table for amount each person owes
      const { peopleList } = request.body;
      const peopleListQueries = [];
      for (let i = 0; i < peopleList.length; i += 1) {
        const person = {
          name: peopleList[i].name,
          amount: peopleList[i].amount,
          billId: request.params.id,
        };

        peopleListQueries.push(db.Person.create(person));
      }

      await Promise.all(peopleListQueries);

      response.send({ message: 'updated bill!' });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    create,
    update,
  };
}
