var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT usuario.username, usuario.pais, speedrun.tempoHora, speedrun.tempoMinuto, speedrun.tempoSegundo, speedrun.tempoMilesimo, speedrun.mortes, speedrun.categoria, speedrun.plataforma, speedrun.linkConfirmacao, speedrun.dataSpeedrun FROM usuario JOIN speedrun ON idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarCategoria(categoria) {
    var instrucao = `
        SELECT usuario.username, usuario.pais, speedrun.tempoHora, speedrun.tempoMinuto, speedrun.tempoSegundo, speedrun.tempoMilesimo, speedrun.mortes, speedrun.categoria, speedrun.plataforma, speedrun.linkConfirmacao, speedrun.dataSpeedrun FROM usuario JOIN speedrun ON idUsuario = fkUsuario WHERE speedrun.categoria = '${categoria}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(h, m, s, ms, mortes, categoria, plataforma, linkConfirmacao, idUsuario) {
    var instrucao = `
        INSERT INTO speedrun (tempoHora, tempoMinuto, tempoSegundo, tempoMilesimo, mortes, categoria, plataforma, linkConfirmacao, fkUsuario) VALUES ('${h}', '${m}', '${s}', '${ms}', ${mortes}, '${categoria}', '${plataforma}', '${linkConfirmacao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    listarCategoria
};