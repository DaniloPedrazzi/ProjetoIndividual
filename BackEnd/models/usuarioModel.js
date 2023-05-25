var database = require("../database/config")

function pegarInformacoes(idUsuario) {
    var instrucao = `
        SELECT * FROM usuario WHERE idUsuario = ${idUsuario};
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

function editar(idUsuario, username, email, pais, senha) {
    var instrucao = `
        UPDATE usuario SET username = '${username}', email = '${email}', pais = '${pais}', senha = '${senha}' WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    pegarInformacoes,
    entrar,
    cadastrar,
    editar
};