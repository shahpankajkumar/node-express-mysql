const express = require('express');
const router = express.Router();

const {
    createapi,
    displayapi,
    oneToOne,
    belongTO,
    oneTOmany
} = require('../controllers/categoriesController');

const {
    subcreateapi,
    subdisplayapi
} = require('../controllers/subcategoriesController');

//categories && subcategories
router.post("/insert",createapi);
router.get("/display",displayapi);

router.post("/subinsert",subcreateapi);
router.get("/subdisplay",subdisplayapi);

//one to one
router.get("/onetoone",oneToOne);

//belongsTo
router.get("/belongto",belongTO);

//one TO Many
router.get("/onetomany",oneTOmany);

module.exports = router;
