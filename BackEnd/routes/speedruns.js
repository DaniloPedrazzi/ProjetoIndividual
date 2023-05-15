var express = require("express");
var router = express.Router();

var speedrunController = require("../controllers/speedrunController");

router.get("/listar", function (req, res) {
    speedrunController.listar(req, res);
});

router.post("/listarCategoria", function (req, res) {
    speedrunController.listarCategoria(req, res);
});

router.post("/cadastrar", function (req, res) {
    speedrunController.cadastrar(req, res);
})

module.exports = router;