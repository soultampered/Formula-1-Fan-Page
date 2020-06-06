// List of Showcased Drivers
window.onload = replaceSrc;

//Picks a randomly selected stream from the above list
var driverPortraitList = [
	"Media/Portraits/Albon_portrait.png",
	"Media/Portraits/Bottas_portrait.png",	
	"Media/Portraits/Gasly_portrait.png",
	"Media/Portraits/Giovinazzi_portrait.png",
	"Media/Portraits/Grojean_portrait.png",
	"Media/Portraits/Hamilton_portrait.png",
	"Media/Portraits/Kvyat_portrait.png",
	"Media/Portraits/Latifi_portrait.png",
	"Media/Portraits/Leclerc_portrait.png",
	"Media/Portraits/Magnussen_portrait.png",
	"Media/Portraits/Norris_portrait.png",
	"Media/Portraits/Ocon_portrait.png",
	"Media/Portraits/Perez_portrait.png",
	"Media/Portraits/Raikkonen_portrait.png",
	"Media/Portraits/Ricciardo_portrait.png",
	"Media/Portraits/Russell_portrait.png",
	"Media/Portraits/Sainz_portrait.png",
	"Media/Portraits/Stroll_portrait.png",
	"Media/Portraits/Verstappen_portrait.png",
	"Media/Portraits/Leclerc_portrait.png",
	];

var randomPortrait = driverPortraitList[Math.floor(Math.random() * driverPortraitList.length)];
function replaceSrc() {
	document.getElementById("showcaseImage").src = randomPortrait;
}
/*
switch(){
	case 0:

		break;
	case 1:

		break;
	case 2:

		break;
	case 3:

		break;
	case 4:

		break;
	case 5:

		break;
	case 6:

		break;
	case 7:

		break;
	case 8:

		break;
	case 9:

		break;
	case 10:

		break;
	case 11:

		break;
	case 12:

		break;
	case 13:

		break;
	case 14:

		break;
	case 15:

		break;
	case 16:

		break;
	case 17:

		break;
	case 18:

		break;
	case 19:	
}*/
