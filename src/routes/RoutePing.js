const {Router} = require("express")

const router = Router()

router.get("/ping", async(req,res) => {
			res.send("Pong!")
		})

module.exports = router