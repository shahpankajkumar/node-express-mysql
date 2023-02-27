require('dotenv').config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.dialect,
    operatorsAliases: false,
    debug:console.log
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);
db.categories = require("../models/categories.model")(sequelize, Sequelize);
db.subcategories = require("../models/subcategories.model")(sequelize, Sequelize);
db.task = require("../models/task.model")(sequelize, Sequelize);


//task data access in user table
db.user.hasMany(db.task,{foreignKey:'uid'})

db.subcategories.belongsTo(db.categories,{foreignKey:'cid'})

db.categories.hasMany(db.subcategories,{foreignKey:'cid'})

db.categories.hasOne(db.subcategories,{foreignKey:'cid'})


//phone categories
db.phone = require("../models/phone.model")(sequelize, Sequelize);
db.phonemodel = require("../models/phonemodel.model")(sequelize, Sequelize);
db.phoneaccesories = require("../models/phoneaccesories.model")(sequelize, Sequelize);


db.phone.hasMany(db.phonemodel,{ as:'models',foreignKey:'id'});
db.phonemodel.belongsTo(db.phone,{ as:'phone',foreignKey:'id'});
db.phone.hasMany(db.phoneaccesories,{ as:'accessories',foreignKey:'id'});
db.phoneaccesories.belongsTo(db.phone,{ as:'phone',foreignKey:'id'});

module.exports = db;

