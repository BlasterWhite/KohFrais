console.log("Chargement de map.js");

function initMap() {
    const shop = [
        [{ lat: 48.12815210335411, lng: -2.5954605161198625 }, "CENTER SHOP"],
        [{ lat: 48.216558014964995, lng: -1.8873127030320629 }, "Magazin à Poil"],
        [{ lat: 48.06537829344155, lng: -2.8986297997643726 }, "Futuroscope Magazin"],
        [{ lat: 47.79894610296563, lng: -4.197041405017037 }, "Vacination Magazin"],
        [{ lat: 48.03516676028967, lng: -4.851097830143387 }, "Chez Bruno"],
        [{ lat: 48.38855138780739, lng: -4.497430843813103 }, "A la montagne"],
        [{ lat: 48.8485214604291, lng: -3.228523548808686 }, "La Farm"],
        [{ lat: 48.847516394977355, lng: -3.1368960646168356 }, "Les Mouettes"],
        [{ lat: 48.684107976667434, lng: -3.073858208063183 }, "ça fouette"],
        [{ lat: 48.5696156951435, lng: -2.8174533428483595 }, "Pordick"],
        [{ lat: 48.44007315486742, lng: -2.7671001983590897 }, "Perdu"],
        [{ lat: 47.838748386720404, lng: -2.638098064954954 }, "Plus D'elec"],
        [{ lat: 47.84964051922393, lng: -2.6523903604037087 }, "Le Jardin de Yves"],
        [{ lat: 47.86295491515932, lng: -2.9450787219614565 }, "Avatar"],
        [{ lat: 47.77828281070864, lng: -3.294412576115389 }, "Le Resto"],
        [{ lat: 47.78673356162109, lng: -3.5830705185952674 }, "Chez Ludo"],
        [{ lat: 47.79311983682976, lng: -3.7950362217767375 }, "C'est L'île"],
        [{ lat: 48.05024873362491, lng: -3.997556415423238 }, "Au Poney"],
        [{ lat: 48.165700243332786, lng: -4.03909902140456 }, "= 8"],
        [{ lat: 48.509320210129395, lng: -3.2644297396243926 }, "Pas là"],
        [{ lat: 48.51832195956603, lng: -3.2501319699498654 }, "Malou"],
        [{ lat: 48.23555396811655, lng: -3.464261441923297 }, "La Couverture de Paul"],
        [{ lat: 48.29395819774972, lng: -3.1804226594863185 }, "Petite Lan ?"],
        [{ lat: 48.02260778756892, lng: -3.356606722185392 }, "Ile 2"],
        [{ lat: 48.57140194857191, lng: -3.8133861761623105 }, "La joie"],
        [{ lat: 48.620933790284106, lng: -4.254334444508663 }, "SNCF"]
    ];

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: shop[0][0],
        disableDefaultUI: true
    });

    // const marker = new google.maps.Marker({
    //     position: positionCenter,
    //     map: map,
    // });
    // let marker2 = new google.maps.Marker({
    //     position: positionCenter2,
    //     map: map,
    // });
    shop.forEach(data => {
        new google.maps.Marker({
            position: data[0],
            map,
            title: data[1],
        });
    });
}