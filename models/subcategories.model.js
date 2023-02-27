module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define("subcategories", {
        cid: {
            type: Sequelize.STRING
        },
        sname: {
            type: Sequelize.STRING
        }    
    },{
        tableName: 'subcategories',
        timestamps: true,
    });
    
    return Categories;
    };