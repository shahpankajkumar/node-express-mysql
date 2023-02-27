module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define("categories", {
        cname: {
            type: Sequelize.STRING
        },
    },{
        tableName: 'categories',
        timestamps: true,
    });
    
    return Categories;
    };