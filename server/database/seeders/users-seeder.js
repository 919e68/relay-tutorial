module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
        username: 'wilson',
        email: 'wilson@mail.com',
        password: 'abcabc',
        firstName: 'Wilson',
        lastName: 'Anciro'
      },
      {
        username: 'arielle',
        email: 'arielle@mail.com',
        password: 'abcabc',
        firstName: 'Arielle Marie',
        lastName: 'Andrade'
      }
    ])
  },

  down: function(queryInterface, Sequelize) {

  }
};
