const db = require("../models");
const Categories = db.categories;
const subCategories = db.subcategories;

const createapi = async (req, res) => {
    const { cname } = req.body;
    try {
        const newData = await Categories.create({
            cname: cname
        });
        res.status(200).json(newData);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const displayapi = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.json({data: categories });
    } catch (error) {
        res.json({ error: "error findAll API" })
    }
};

const oneToOne = async (req, res) => {
    // const id = await Categories.findByPk(req.params.id);
    try {
        const categories = await Categories.findAll({
            include:subCategories,
            where :{id:1}
        });
        res.json({data: categories });
    } catch (error) {
        res.json({ error: "error one TO one API" })
    }
};

// const oneToParticular = async (req, res) => {
//     try {
//         const categories = await Categories.findAll({
//             attributes:['id','cname'],
//             include:[{
//                 model:subCategories,
//                 attributes:['id','cid','sname']
//             }],
//             where:{id:1}
//         });
//         res.json({data: categories });
//     } catch (error) {
//         res.json({ error: "error oneToParticular API" })
//     }
// };


const belongTO = async (req, res) => {
    try {
        const subcategories = await subCategories.findAll({
            attributes:['id','cid','sname'],
            include:[{
                model:Categories,
                attributes:['id','cname']
            }],
            where:{id:5}
        });
        res.json({data: subcategories });
    } catch (error) {
        res.json({ error: "error one TO one API" })
    }
};


const oneTOmany = async (req, res) => {
    try {
        const categories = await Categories.findAll({
            attributes:['id','cname'],
            include:[{
                model:subCategories,
                attributes:['id','cid','sname']
            }],
            where:{id:1}
        });
        res.json({data: categories });
    } catch (error) {
        res.json({ error: "error oneToParticular API" })
    }
};

module.exports = { 
    createapi,
    displayapi,
    oneToOne,
    belongTO,
    oneTOmany 
}