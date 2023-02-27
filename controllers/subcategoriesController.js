const db = require("../models");
const subCategories = db.subcategories;

const subcreateapi = async (req, res) => {
    const { cid,sname } = req.body;
    try {
        const newData = await subCategories.create({
            cid: cid,
            sname: sname
        });
        res.status(200).json(newData);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const subdisplayapi = async (req, res) => {
    try {
        const subcategories = await subCategories.findAll();
        res.json({data: subcategories });
    } catch (error) {
        res.json({ error: "error findAll API" })
    }
};

module.exports = { subcreateapi,subdisplayapi }