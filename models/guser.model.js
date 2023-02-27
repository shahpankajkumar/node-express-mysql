module.exports = (sequelize, Sequelize) => {
    const Guser = sequelize.define("guser", {
        displayName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
    },{
        tableName: 'guser',
        timestamps: true,
    });
    
    return Guser;
    };