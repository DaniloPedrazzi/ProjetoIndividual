function carregarHeader(page){
    var leaderboardSelected = "";
    var dashboardSelected = "";
    if(page == "leaderboard"){
        leaderboardSelected = "headerSelected";
    }else if(page == "dashboard"){
        dashboardSelected = "headerSelected";
    }

    document.getElementById("header").innerHTML =
    `
        <div class="logo">
            <a href="index.html">
                <img class="logo" src="./assets/img/celesteLogoOnlyMountain.png">
            </a>
        </div>
        <div class="headerCenter">
            <a class="headerLink" id="${leaderboardSelected}" href="leaderboard.html">Leaderboard</a>
            <a class="headerLink" id="${dashboardSelected}" href="dashboard.html">Dashboard</a>
        </div>
    `;

    if(validarSessaoHeader()){
        document.getElementById("header").innerHTML += `
        <div class="dropdown" id="dropdown">
            <div class="dropbtn" onclick="showDropdown()">
                <p>${sessionStorage.USERNAME_USUARIO}</p>
                <svg fill="#fff" height="11px" width="11px" viewBox="0 0 330 330">
                    <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                </svg>
            </div>
            <div id="dropDownContent" class="dropdown-content">
                <a href="perfil.html">Editar Perfil</a>
                <a href="cadastroSpeedrun.html">Adicionar Speedrun</a>
                <a href="index.html" onclick="sessionStorage.clear()">Sair</a>
            </div>
        </div>
        `;
        // Add event listener to hide dropdown when clicking outside of it
        document.addEventListener('click', function(event) {
            const isClickInsideDropdown = document.getElementById('dropdown').contains(event.target);
            if (!isClickInsideDropdown) {
                document.getElementById('dropDownContent').style.display = 'none';
                dropdownIsShowing = false;
            }
        });
    }else{
        document.getElementById("header").innerHTML += `
        <div>
            <a class="cadastroLink" href="cadastro.html">Cadastro</a>
            <a class="loginLink" href="login.html">Login</a>
        </div>
        `;
    }
}

var dropdownIsShowing;
function showDropdown() {
    if(dropdownIsShowing){
        document.getElementById("dropDownContent").style.display = "none";
        dropdownIsShowing = false;
    }else{
        document.getElementById("dropDownContent").style.display = "block";
        dropdownIsShowing = true;
    }
}

function validarSessaoHeader() {
    var username = sessionStorage.USERNAME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    if (username == null && idUsuario == null) {
        return false;
    }else {
        return true;
    }
}
