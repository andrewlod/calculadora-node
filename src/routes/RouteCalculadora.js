const {Router} = require("express")
const {ControllerCalculadora} = require("./../controllers")
const {validate} = require('express-validation')
const {ValidationNumbers} = require('./../validation')

const router = Router()

router.post("/soma", validate(ValidationNumbers), ControllerCalculadora.soma())
router.post("/sub", validate(ValidationNumbers), ControllerCalculadora.sub())
router.post("/multi", validate(ValidationNumbers), ControllerCalculadora.multi())
router.post("/div", validate(ValidationNumbers), ControllerCalculadora.div())

module.exports = router