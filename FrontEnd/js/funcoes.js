// sessão
function validarSessao() {
    var username = sessionStorage.USERNAME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    if (username == null && idUsuario == null) {
        window.location = "login.html";
    }
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";
}

function ShowPassword(input){
    var inputSenha = document.getElementById("inputSenha");
    var inputConfirmarSenha = document.getElementById("inputConfirmarSenha");
    var eye1 = document.getElementById("eye1");
    var eye2 = document.getElementById("eye2");
    if(input == 1){
        if (inputSenha.type === "password") {
            inputSenha.type = "text";
            eye1.style.backgroundImage = "url(../assets/img/hiddenEye.svg)";
        } else {
            inputSenha.type = "password";
            eye1.style.backgroundImage = "url(../assets/img/showingEye.svg)";
        }
    }else{
        if (inputConfirmarSenha.type === "password") {
            inputConfirmarSenha.type = "text";
            eye2.style.backgroundImage = "url(../assets/img/hiddenEye.svg)";
        } else {
            inputConfirmarSenha.type = "password";
            eye2.style.backgroundImage = "url(../assets/img/showingEye.svg)";
        }
    }
}