function generate() {
    coordonnate = document.getElementById("co").value;
    shopName = document.getElementById("sp").value;
    result = document.getElementById("result");
    console.log(`Coordonate : ${coordonnate} Name : ${shopName}`);
    coord = coordonnate.split(",");
    result.innerHTML += `<p class="result">[{ lat: ${coord[0]}, lng:${coord[1]} }, "${shopName}"],</p><br/>`;
}