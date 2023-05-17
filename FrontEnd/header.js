function carregarHeader(page){
    var leaderboardSelected = "";
    var cadastroSelected = "";
    var loginSelected = "";
    var dashboardSelected = "";
    if(page == "leaderboard"){
        leaderboardSelected = "headerSelected";
    }else if(page == "cadastro"){
        cadastroSelected = "headerSelected";
    }else if(page == "login"){
        loginSelected = "headerSelected";
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
            <a class="headerLink" id="${leaderboardSelected}" href="leaderboard.html">LeaderBoard</a>
            <a class="headerLink" id="${dashboardSelected}" href="dashboard.html">Dashboard</a>
        </div>
        <div>
            <a class="cadastroLink" id="${cadastroSelected}" href="cadastro.html">Cadastro</a>
            <a class="loginLink" id="${loginSelected}" href="login.html">Login</a>
        </div>
    `;
}
