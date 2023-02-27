module.exports = (sequelize, Sequelize) => {
    const Phoneaccesories = sequelize.define("phoneaccesories", {
        mid: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        }    
    },{
        tableName: 'phoneaccesories',
        timestamps: true,
    });
    
    return Phoneaccesories;
    };