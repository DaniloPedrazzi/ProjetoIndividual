var mysql = require("mysql2");

// CleverCloud
var mySqlConfig = {
    host: "buffpj28r0fvkofuuuxp-mysql.services.clever-cloud.com",
    database: "buffpj28r0fvkofuuuxp",
    user: "uc7h3pezma7pam8q",
    password: "IaWauYVfTphzMum1LKds",
};

function executar(instrucao) {
    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(instrucao, function (erro, resultados) {
            conexao.end();
            if (erro) {
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });
        conexao.on('error', function (erro) {
            return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
        });
    });
}

module.exports = {
    executar
}