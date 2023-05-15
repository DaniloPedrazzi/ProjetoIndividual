var speedrunModel = require("../models/speedrunModel");

function listar(req, res) {
    speedrunModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarCategoria(req, res) {
    var categoria = req.body.categoriaServer;

    speedrunModel.listarCategoria(categoria)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var tempo = req.body.tempoServer;
    var categoria = req.body.categoriaServer;
    var plataforma = req.body.plataformaServer;
    var linkConfirmacao = req.body.linkConfirmacaoServer;

    // Faça as validações dos valores
    if (tempo == undefined) {
        res.status(400).send("Você precisa colocar um tempo para sua speedrun!");
    } else if (categoria == undefined) {
        res.status(400).send("Você precisa colocar uma categoria para sua speedrun!");
    } else if (plataforma == undefined) {
        res.status(400).send("Você precisa colocar a plataforma da sua speedrun!");
    } else if (linkConfirmacao == undefined) {
        res.status(400).send("Você precisa colocar um link para a confirmação de sua speedrun!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        speedrunModel.cadastrar(tempo, categoria, plataforma, linkConfirmacao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    listarCategoria
}