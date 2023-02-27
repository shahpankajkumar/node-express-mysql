module.exports = (sequelize, Sequelize) => {
    const Phonemodel = sequelize.define("phonemodel", {
        mid: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        }    
    },{
        tableName: 'phonemodel',
        timestamps: true,
    });
    
    return Phonemodel;
    };