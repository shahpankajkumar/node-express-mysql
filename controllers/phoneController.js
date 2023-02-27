const db = require("../models");
const Phone = db.phone;
const Phonemodel = db.phonemodel;
const Phoneaccesories = db.phoneaccesories;

// const oneTOmanyApi = async (req, res) => {
    // try {
    //     const phone = await Phone.findAll({
    //         include: [{
    //             model: Phonemodel,
    //             as: 'models'
    //         },{
    //             model: Phoneaccesories,
    //             as: 'accessories'
    //         }],
    //         where:{id:1}
    //     });
    //     res.json({data: phone });
    // } catch (error) {
    //     res.json({ error: "error okk API" })
    // }
// };

const oneTOmanyApi = async (req, res) => {
    const name = req.params.name
    try {
        const phone = await Phone.findAll({
            include: [{
                model: Phonemodel,
                as: 'models'
            },{
                model: Phoneaccesories,
                as: 'accessories'
            }],
            where:{name:name}
        });
        res.json({data: phone });
    } catch (error) {
        res.json({ error: "error okk API" })
    }
};

module.exports = { 
    oneTOmanyApi 
}