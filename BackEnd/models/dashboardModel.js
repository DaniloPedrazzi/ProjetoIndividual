var database = require("../database/config");

function buscarDados(idUsuario) {
    var instrucao = `SELECT tempoHora, tempoMinuto, tempoSegundo, tempoMilesimo, mortes, categoria, dataSpeedrun FROM speedrun WHERE fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarDados
}
