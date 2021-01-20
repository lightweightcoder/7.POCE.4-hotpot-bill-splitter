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

  return {
    create,
  };
}
