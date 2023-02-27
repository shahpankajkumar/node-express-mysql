const express = require('express');
const router = express.Router();

const {
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
} = require('../controllers/userController');
const {userValidatation}=require('../validators/user');
const AuthorizationMiddleware = require('../middleware/auth');
const authorization = new AuthorizationMiddleware();


// user all data
router.post("/insert",[authorization.auth,userValidatation],create);
router.post("/registaration",userValidatation,create);
router.get("/display",authorization.auth,getAll);
router.put("/update/:id",authorization.auth,updateapi);
router.delete("/delete/:id",authorization.auth,deleteapi);
router.get("/find/:id",authorization.auth,findapi);

//login api
router.post("/login",loginapi);
router.get("/logout",authorization.auth,logoutapi);

//user task 
router.post("/taskinsert",authorization.auth,taskinsert);
router.get("/taskdispkay/:id",authorization.auth,taskdisplay);
router.put("/taskupdate/:id",authorization.auth,taskupdateapi);
router.delete("/taskdelete/:id",authorization.auth,taskdeleteapi);
router.get("/userfind/:email",authorization.auth,taskuserfindapi);
router.get("/findtask/:id",authorization.auth,findtaskapi);
module.exports = router;


