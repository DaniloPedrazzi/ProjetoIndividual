var express = require("express");
var cors = require("cors");
var path = require("path");
const PORTA = process.env.PORT || 3030;

var app = express();

var indexRouter = require("./BackEnd/routes/index");
var usuarioRouter = require("./BackEnd/routes/usuarios");
var speedrunRouter = require("./BackEnd/routes/speedruns");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "FrontEnd")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/speedruns", speedrunRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA}`);
});
