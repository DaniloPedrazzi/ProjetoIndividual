var database = require("../database/config")

// Apenas para testes
function listar() {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(username, senha) {
    var instrucao = `
        SELECT * FROM usuario WHERE username = '${username}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(username, email, pais, senha) {
    var instrucao = `
        INSERT INTO usuario (username, email, pais, senha) VALUES ('${username}', '${email}', '${pais}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar
};