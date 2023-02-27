module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        name: {
            type: Sequelize.STRING
        },
    },{
        tableName: 'phone',
        timestamps: true,
    });
    
    return Phone;
    };