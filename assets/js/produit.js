console.log("produit.js chargé !");

function detail(id, imagePATH, nom, detail, format, bio) {
    let produit = document.getElementById(id);
    //let imgproduit = document.getElementById(`imageproduit${id}`);
    produit.classList.remove('produitLess');
    produit.classList.add('produitMore');
    /*imgproduit.style.width = "auto";
    imgproduit.style.height = "200px";*/
    detailDiv = document.createAttribute("div");
    let formatList = format.split(',');
    let formatAffichage = "";
    let formatNum = 1;
    formatList.forEach(msg => {
        //console.log(msg);
        formatAffichage += `<li>format ${formatNum}: ${msg}</li>`;
        formatNum++;
    });
    detailDiv.value = "";
    let icons;
    icons = "<img src=\"assets/img/made_in_france.png\" class=\"icon\" alt=\"Icon de certification du Made In France\" width=\"64px\"/>";
    if(bio) {
        icons += "<img src=\"assets/img/bio.png\" class=\"icon\" alt=\"Icon de certification Bio\"  width=\"64px\"/>"
    }
    detailDiv.innerHTML = `
        <div style="display: flex;float left; justify-content: space-around">
            <img id="image${id}" src="${imagePATH}" alt="Image de ${nom} le produit ${id} de la page" style="min-width: 20%;flex-grow: 0;padding: 15px;" width="auto">
            <div style="text-align:left;min-width: 50%;flex-grow: 0;">
                <h2 style="text-align:center;">${nom}</h2>
                <p class="tag">Descriptif :</p>
                <p>${detail}</p>
                <p class="tag">Format :</p>
                <ul>
                    ${formatAffichage}
                </ul>
                ${icons}
            </div>
        </div>
        <h3 onclick="moinsdetail('${id}', '${imagePATH}', '${nom}', '${detail}', '${format}', ${bio})">⬅ VOIR MOINS</h3>
    `;
    //console.log(detailDiv.innerHTML);
    document.getElementById(id).innerHTML = detailDiv.innerHTML;
}

function moinsdetail(id, imagePATH, nom, detail, format, bio) {
    let produit = document.getElementById(id);
    produit.classList.remove('produitMore');
    produit.classList.add('produitLess');
    produit.innerHTML = `
    <img id="imageproduit${id}" src="${imagePATH}" alt="Image de ${nom} le produit ${id} de la page" width="100%">
    <h3 onclick="detail('${id}', '${imagePATH}', '${nom}', '${detail}', '${format}', ${bio})">VOIR PLUS ➔</h3>`;
}