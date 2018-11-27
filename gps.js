/* var lieux = [
    ['Chateau de Champs-Sur-Marne', 48.854141, 2.604219],
    ['La Ferme Du Buisson', 48.844330, 2.624482],
    ['Université Paris-Est Marne-La-Vallée', 48.840096, 2.586034]
]; */


function initialiser() {
    var latlng = new google.maps.LatLng(48.852298, 2.602724);
    var options = {
        center: latlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable : false,
        minZoom : 12,
        maxZoom : 20,
    };
    var carte = new google.maps.Map(document.getElementById("carte"), options);
    var image = {
        url:('../images/marker.png'),
        size : new google.maps.Size(40, 60, "px", "px"),
    };
    var optionsMarker = {
        position: new google.maps.LatLng(48.854141, 2.604219),
        map : carte,
        icon:image
    }
   
    var marker1 = new google.maps.Marker(optionsMarker);

    /* var contenuBulle = 'Chateau de Champs-Sur-Marne'; */
    var uneBulle = new google.maps.InfoWindow({content : 'Chateau de Champs-Sur-Marne'});

    marker1.addListener ('click', function(){
        uneBulle.open(carte, marker1)
    });

    

    var optionsMarker = {
        position: new google.maps.LatLng(48.844330, 2.624482),
        map : carte,
        icon:image
    }

    var marker2 = new google.maps.Marker(optionsMarker);

    var optionsMarker = {
        position: new google.maps.LatLng(48.840096, 2.586034),
        map : carte,
        icon:image
    }

    var marker3 = new google.maps.Marker(optionsMarker);
}


function initialiserPhone() {
    var latlng = new google.maps.LatLng(48.853215, 2.604143);
    var options = {
        center: latlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable : false,
        minZoom : 11,
        maxZoom : 20,
    };
    var cartePhone = new google.maps.Map(document.getElementById("cartePhone"), options);
    var image = {
        url:('../images/marker.png'),
        size : new google.maps.Size(40, 60, "px", "px"),
    };
    var optionsMarker = {
        position: new google.maps.LatLng(48.854141, 2.604219),
        map : cartePhone,
        icon:image
    }
   
    var marker1 = new google.maps.Marker(optionsMarker);

    var optionsMarker = {
        position: new google.maps.LatLng(48.844330, 2.624482),
        map : cartePhone,
        icon:image
    }

    var marker2 = new google.maps.Marker(optionsMarker);

    var optionsMarker = {
        position: new google.maps.LatLng(48.840096, 2.586034),
        map : cartePhone,
        icon:image
    }

    var marker3 = new google.maps.Marker(optionsMarker);
}
