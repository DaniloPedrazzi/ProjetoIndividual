var usuarioModel = require("../models/usuarioModel");

function pegarInformacoes(req, res) {
    var idUsuario = req.params.idUsuario;

    usuarioModel.pegarInformacoes(idUsuario)
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

function entrar(req, res) {
    var username = req.body.usernameServer;
    var senha = req.body.senhaServer;

    if (username == undefined) {
        res.status(400).send("Seu username está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(username, senha)
            .then(
                function (resultado) {
                    if (resultado.length == 1) {
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Username e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var username = req.body.userNameServer;
    var email = req.body.emailServer;
    var pais = req.body.paisServer;
    var senha = req.body.senhaServer;

    if (username == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (pais == undefined) {
        res.status(400).send("Seu pais está undefined!");
    } else {
        usuarioModel.cadastrar(username, email, pais, senha)
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

function editar(req, res){
    var idUsuario = req.params.idUsuario;
    var username = req.body.usernameServer;
    var email = req.body.emailServer;
    var pais = req.body.paisServer;
    var senha = req.body.senhaServer;

    if (username == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (pais == undefined) {
        res.status(400).send("Seu pais está undefined!");
    } else {
        usuarioModel.editar(idUsuario, username, email, pais, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a Edição! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    pegarInformacoes,
    entrar,
    cadastrar,
    editar
}