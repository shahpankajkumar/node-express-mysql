module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        uid: {
            type: Sequelize.INTEGER
          },
          title: {
            type: Sequelize.STRING
          },
          desc: {
            type: Sequelize.STRING
          },
          hours: {
            type: Sequelize.INTEGER
          },
    },{
        tableName: 'task',
        timestamps: true,
    });
    
    return Task;
    };