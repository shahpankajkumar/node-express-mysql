require("dotenv").config();
const db = require("../models");
const User = db.user;
const Task = db.task;
const jwt = require('jsonwebtoken');

const getAll = async (req, res) => {
    try {
        const user = await User.findAndCountAll();
        res.json({ message: "findAll API", data: user });
    } catch (error) {
        res.json({ error: "error findAll API" })
    }
};

const create = async (req, res) => {
    const { name, phone, email, password, token, expiresAt } = req.body;
    try {
        const newData = await User.create({
            name: name,
            phone: phone,
            email: email,
            password: password,
            token: null,
            expiresAt: new Date(Date.now())
        });
        res.status(200).json(newData);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

// const create = async (req, res) => {
//     console.log("--->",userValidator.schema)
//     const  { name,phone,email,password } = req.body;
// const schema = Joi.object().keys({
//     name: Joi.string().min(3).max(30).required(),
//     phone: Joi.string().min(10).max(10).required(),
//     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
//     password: Joi.string().min(3).max(10).required(),
// })  
//    const {error} = schema.validate(req.body,{abortEarly:false});
//     if(error){
//         res.status(400).json({error:error})
//     }else{
//         try{
//             const newData = await User.create({
//                              name:name,
//                              phone:phone,
//                              email:email,
//                              password:password
//                              });
//                         res.status(200).json(newData);
//                 } catch (err) {
//                     res.status(500).json({ message: err });
//                 }
//     }  
// };


const updateapi = async (req, res) => {
    try {
        const { name, phone, email, password, token, expiresAt } = req.body;
        const data = await User.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        await data.update({
            name: name,
            phone: phone,
            email: email,
            password: password,
            token: null,
            expiresAt: new Date(Date.now())
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const deleteapi = async (req, res) => {
    try {
        const data = await User.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        await data.destroy();
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const findapi = async (req, res) => {
    try {
        const data = await User.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const loginapi = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: { email: email, password: password },
    });
    if (user) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h', // expires in 1 hours
        });
        user.token = token;
        user.save();


        res.status(200).json({ token });

    } else {
        res.status(400).json("username & password is Wrong")
    }
};


const logoutapi = async (req, res) => {
    console.log("req.headers.authorization", req.user)
    const user = await User.findOne({
        where: { id: req.user.id },
    });
    console.log("user-->", user);
    user.token = null;
    user.save();
    res.send('You have been logged out successfully.');
};

////user with task

const taskinsert = async (req, res) => {
    const {uid,title, desc, hours} = req.body;
    try {
        const newData = await Task.create({
            uid: uid,
            title: title,
            desc: desc,
            hours: hours,
        });
        res.status(200).json(newData);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

const taskdisplay = async (req, res) => {
    const id = req.params.id
    try {
        const task = await User.findAll({
            include: [{
                model: Task,
                attributes: ['id', 'uid', 'title', 'desc', 'hours','updatedAt']
            }],
            where: { id: id }
        });
        res.json(task);
    } catch (error) {
        res.json({ error: "error display task API" })
    }
};

const taskupdateapi = async (req, res) => {
    try {
        const { uid,title, desc, hours } = req.body;
        const data = await Task.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        await data.update({
            uid: uid,
            title: title,
            desc: desc,
            hours: hours,
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const taskdeleteapi = async (req, res) => {
    try {
        const data = await Task.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        await data.destroy();
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const taskuserfindapi = async (req, res) => {
    const email = req.params.email
    try {
        const user = await User.findOne({
            where: { email:email},
        });
        if (!user) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const findtaskapi = async (req, res) => {
    try {
        const data = await Task.findByPk(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    create,
    getAll,
    updateapi,
    deleteapi,
    findapi,
    loginapi,
    logoutapi,
    taskdisplay,
    taskinsert,
    taskupdateapi,
    taskdeleteapi,
    taskuserfindapi,
    findtaskapi
}
