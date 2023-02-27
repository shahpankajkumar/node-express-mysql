module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
      name: {
          type: Sequelize.STRING
      },
      phone: {
          type: Sequelize.STRING
      },
      email: {
          type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING,
        allowNull: true
      },
      expiresAt: {
        type: Sequelize.DATE,
      }
  },{
      tableName: 'user',
      timestamps: true,
  });
  
  return User;
  };