console.log("Chargement du navBar.js");
function afficheNavBar() {
    var nav = document.getElementById("NavBar");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
}
