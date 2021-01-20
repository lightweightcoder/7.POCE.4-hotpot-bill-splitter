module.exports = {
  up: async (queryInterface, Sequelize) => {
    const billsList = [];
    const peopleList = [];

    billsList.push({
      name: 'HDL dinner',
      total: 80.50,
      created_at: new Date(),
      updated_at: new Date(),
    });

    billsList.push({
      name: 'Mc Donalds',
      total: 50.50,
      created_at: new Date(),
      updated_at: new Date(),
    });

    try {
      const result = await queryInterface.bulkInsert('bills', billsList, { returning: true });
      console.log(result);

      result.forEach((bill) => {
        peopleList.push({
          name: 'alvin',
          amount: 20.10,
          bill_id: bill.id,
          created_at: new Date(),
          updated_at: new Date(),
        });
        peopleList.push({
          name: 'ben',
          amount: 10.10,
          bill_id: bill.id,
          created_at: new Date(),
          updated_at: new Date(),
        });
      });

      await queryInterface.bulkInsert('people', peopleList);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bills', null, {});
    await queryInterface.bulkDelete('people', null, {});
  },
};
