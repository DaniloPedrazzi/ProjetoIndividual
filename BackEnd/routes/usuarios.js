var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/editar/:idUsuario", function (req, res) {
    usuarioController.editar(req, res);
});

router.post("/:idUsuario", function (req, res) {
    usuarioController.pegarInformacoes(req, res);
});

module.exports = router;