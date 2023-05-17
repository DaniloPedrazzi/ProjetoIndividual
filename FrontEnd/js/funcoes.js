// sessão
function validarSessao() {
    var username = sessionStorage.USERNAME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    if (username != null && idUsuario != null) {
        window.alert(`Seja bem-vindo, ${username}!`);
    } else {
        window.location = "login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

