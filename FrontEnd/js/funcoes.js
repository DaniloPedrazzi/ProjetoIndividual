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

function calcularData(data){
    var currentDate = new Date();
    var dataJS = new Date(data);

    var timeDifference = currentDate - dataJS;
    var seconds = Math.floor(timeDifference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    if(days > 364 && days < 365 * 2){
        return `Há ${Math.floor(days / 365)} ano`;
    }else if(days > 30 * 12){
        return `Há ${Math.floor(days / 365)} anos`;
    }else if(days > 30 && days < 30 * 2){
        return `Há ${Math.floor(days / 30)} mes`;
    }else if(days > 30){
        return `Há ${Math.floor(days / 30)} meses`;
    }else if(days > 0){
        return `Há ${days} dias`;
    }else if(hours > 0){
        return `Há ${hours} horas`;
    }else if(minutes > 0){
        return `Há ${minutes} minutos`;
    }else if(seconds > 0){
        return `Há ${seconds} segundos`;
    }else{
        return `Agora`;
    }
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