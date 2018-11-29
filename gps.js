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
        url:('pictures/marker.png'),
        size : new google.maps.Size(40, 60, "px", "px"),
    };
    var optionsMarker = {
        position: new google.maps.LatLng(48.854141, 2.604219),
        map : carte,
        icon:image
    }
   
    var marker1 = new google.maps.Marker(optionsMarker);

    var uneBulle = new google.maps.InfoWindow({content : '<a href=#>Chateau de Champs-Sur-Marne</a>'});

    marker1.addListener ('click', function(){
        uneBulle.open(carte, marker1)
    });

    

    var optionsMarker = {
        position: new google.maps.LatLng(48.844330, 2.624482),
        map : carte,
        icon:image
    }

    var marker2 = new google.maps.Marker(optionsMarker);

    var uneBulle2 = new google.maps.InfoWindow({content : '<a href=#>La Ferme Du Buisson</a>'});

    marker2.addListener ('click', function(){
        uneBulle2.open(carte, marker2)
    });


    var optionsMarker = {
        position: new google.maps.LatLng(48.840096, 2.586034),
        map : carte,
        icon:image
    }

    var marker3 = new google.maps.Marker(optionsMarker);

    var uneBulle3 = new google.maps.InfoWindow({content : '<a href=#>Université Paris-Est Marne-La-Vallée</a>'});

    marker3.addListener ('click', function(){
        uneBulle3.open(carte, marker3)
    });
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
        url:('pictures/marker.png'),
        size : new google.maps.Size(40, 60, "px", "px"),
    };
    var optionsMarker = {
        position: new google.maps.LatLng(48.854141, 2.604219),
        map : cartePhone,
        icon:image
    }
   
    var marker1 = new google.maps.Marker(optionsMarker);

    var uneBulle = new google.maps.InfoWindow({content : '<a href=#>Chateau de Champs-Sur-Marne</a>'});

    marker1.addListener ('click', function(){
        uneBulle.open(cartePhone, marker1)
    });

    var optionsMarker = {
        position: new google.maps.LatLng(48.844330, 2.624482),
        map : cartePhone,
        icon:image
    }

    var marker2 = new google.maps.Marker(optionsMarker);

    var uneBulle2 = new google.maps.InfoWindow({content : '<a href=#>La Ferme Du Buisson</a>'});

    marker2.addListener ('click', function(){
        uneBulle2.open(cartePhone, marker2)
    });

    var optionsMarker = {
        position: new google.maps.LatLng(48.840096, 2.586034),
        map : cartePhone,
        icon:image
    }

    var marker3 = new google.maps.Marker(optionsMarker);

    var uneBulle3 = new google.maps.InfoWindow({content : '<a href=#>Université Paris-Est Marne-La-Vallée</a>'});

    marker3.addListener ('click', function(){
        uneBulle3.open(cartePhone, marker3)
    });

}
