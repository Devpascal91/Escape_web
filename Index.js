//----------------------GPS--------------------//

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
h
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


//--------Taquin-------------------------------//

/*globals document, clearInterval, setInterval */
// DOM de la page HTML
var dom_jeu, dom_console, dom_aide, dom_controle, timer;
// Le jeu
var taquinPiece, taquinNumero, liVide, coVide, melangeEnCours, horsJeu, score;

//============= Console d'information =============
function Console(html, style) {
	if (style) {
		dom_console.className = style;
	} else {
		dom_console.className = null;
	}
	dom_console.innerHTML = html;
}

//================== actualiserPieces ==================
function actPieces() {
	var li, co;
	for (li = 0; li < 3; li += 1) {
		for (co = 0; co < 3; co += 1) {
			taquinPiece[li][co].innerHTML = String(taquinNumero[li][co]);
			taquinPiece[li][co].className = "piece" + (taquinNumero[li][co] === 0 ? " non" : " oui");
		}
	}
}

//============= ajouterTDcaseA =============
function caseA(noeud, li, co) {
	var element, bouton;
	element = document.createElement("td");
	bouton = document.createElement("button");
	bouton.setAttribute("onclick", 'clicPiece(' + li + ',' + co + ')');
	element.appendChild(bouton);
	noeud.appendChild(element);
	taquinPiece[li][co] = bouton;
}

//================== initJeu ==================
function initJeu() {
	var li, co, dom_table, dom_tody, dom_tr;
	dom_table = document.createElement("table");
	dom_table.setAttribute("align", "center");
	dom_table.setAttribute("cellspacing", "0");
	dom_table.setAttribute("border", "0");
	dom_table.setAttribute("cellpadding", "0");
	dom_jeu.appendChild(dom_table);
	dom_tody = document.createElement("tbody");
	dom_table.appendChild(dom_tody);
	taquinPiece = [[null, null, null], [null, null, null,], [null, null, null,]];
	taquinNumero = [[1, 2, 3, ], [4, 5, 6], [7 ,8 ,0]];
	liVide = 2;
	coVide = 2;
	melangeEnCours = false;
	horsJeu = true;
	for (li = 0; li < 3; li += 1) {
		dom_tr = document.createElement("tr");
		dom_tody.appendChild(dom_tr);
		for (co = 0; co < 3; co += 1) {
			caseA(dom_tr, li, co);
		}
	}
	actPieces();
}

//================== verifierSolution ==================
function Solution() {
	var li, co, n;
	n = 0;
	for (li = 0; li < 3; li += 1) {
		for (co = 0; co < 3; co += 1) {
			if (taquinNumero[li][co] === (3 * li + co + 1)) {
				n += 1;
			}
		}
	}
	if (n === 8) {
		Console("• &nbsp; • &nbsp; • &nbsp; Bravo ! &nbsp; Solution en " + score + " Clics  &nbsp; • &nbsp; • &nbsp; •", "fini");
		document.body.className = "vert";
	} else {
		Console("Clic n° " + score + " &nbsp; " + n + (n > 1 ? " pièces bien placés" : " pièce bien placée"));
		document.body.className = null;
	}
}

//================== bougerPiecesPour ==================
function bougerPieces(li, co) {
	var k, s, dk;
	if ((li === liVide) && (co === coVide)) {
		return;
	} else if (li === liVide) {
		dk = co - coVide;
		s = dk < 0 ? -1 : 1;
		for (k = 0; k < s * dk; k += 1) {
			taquinNumero[li][coVide + s * k] = taquinNumero[li][coVide + s * (k + 1)];
		}
		taquinNumero[li][coVide + dk] = 0;
		coVide = co;
	} else if (co === coVide) {
		dk = li - liVide;
		s = dk < 0 ? -1 : 1;
		for (k = 0; k < s * dk; k += 1) {
			taquinNumero[liVide + s * k][co] = taquinNumero[liVide + s * (k + 1)][co];
		}
		taquinNumero[liVide + dk][co] = 0;
		liVide = li;
	} else {
		return;
	}
}

//================== CONTROLES ==================
//================== clicPiece ==================
function clicPiece(li, co) {
	if (melangeEnCours || horsJeu) {
		return;
	}
	score += 1;
	bougerPieces(li, co);
	actPieces();
	Solution();
}

//================== clicOuvrirAide ==================
function clicOuvrirAide() {
	if (melangeEnCours) {
		return;
	}
	dom_aide.innerHTML = '<button type="button" onclick="clicFermerAide()">Fermer le mode d\'emploi</button> <fieldset id="cadre" onclick="clicFermerAide()"><legend><br /><br />Cliquez sur les pièces pour replacer les numéros dans le bon ordre...<br /></fieldset>';
}

//================== clicFermerAide ==================
function clicFermerAide() {
	if (melangeEnCours) {
		return;
	}
	dom_aide.innerHTML = '<button type="button" onclick="clicOuvrirAide()">Mode d\'emploi</button>';
}

//================== melanger ==================
function melanger() {
	bougerPieces(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
	actPieces();
}

//================== clicMelanger ==================
function clicMelanger() {
	horsJeu = false;
	melangeEnCours = true;
	document.body.className = null;
	dom_controle.innerHTML = '<button onclick="clicStopMelange()" class="melange">Arrêter de mélanger</button>';
	Console("Mélange en cours...");
	timer = setInterval(melanger, 5);
}

//================== clicStopMelange ==================
function clicStopMelange() {
	document.body.className = null;
	dom_controle.innerHTML = '<button onclick="clicMelanger()" class="melange">Mélanger</button>';
	clearInterval(timer);
	Console("À vous de jouer ...");
	melangeEnCours = false;
	score = 0;
}


//================== init ==================
function init() {
	// zone d'affichage de l'aide (bouton aide au départ)
	dom_aide = document.getElementById("aide");
	// zone d'affichage des informations (* au départ)
	dom_console = document.getElementById("console");
	// zone de contrôle du jeu (bouton de validation ou nouveau au départ)
	dom_controle = document.getElementById("controle");
	// zone de définition du jeu (vide au départ)
	dom_jeu = document.getElementById("jeu");
	initJeu();
}
