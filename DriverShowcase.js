// List of Showcased Drivers
window.onload = replaceSrc;

var Albon = {picture:"Media/Portraits/Albon_portrait.png", link:"https://www.formula1.com/en/drivers/alexander-albon.html"};
var Bottas = {picture:"Media/Portraits/Bottas_portrait.png", link:"https://www.formula1.com/en/drivers/valtteri-bottas.html"};		
var Gasly =	{picture:"Media/Portraits/Gasly_portrait.png", link:"https://www.formula1.com/en/drivers/pierre-gasly.html"};
var Giovinazzi = {picture:"Media/Portraits/Giovinazzi_portrait.png", link:"https://www.formula1.com/en/drivers/antonio-giovinazzi.html"};
var Grosjean = {picture:"Media/Portraits/Grojean_portrait.png", link:"https://www.formula1.com/en/drivers/romain-grosjean.html"};
var Hamilton = {picture:"Media/Portraits/Hamilton_portrait.png", link:"https://www.formula1.com/en/drivers/lewis-hamilton.html"};
var	Kvyat = {picture"Media/Portraits/Kvyat_portrait.png", link:"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Latifi = {picture:"Media/Portraits/Latifi_portrait.png", link:"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Leclerc = {picture:"Media/Portraits/Leclerc_portrait.png", link:"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var Magnussen = {picture:"Media/Portraits/Magnussen_portrait.png", link:"https://www.formula1.com/en/drivers/kevin-magnussen.html"};
var	Norris = {picture:"Media/Portraits/Norris_portrait.png", link:"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Ocon = {picture:"Media/Portraits/Ocon_portrait.png", link"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Perez = {picture:"Media/Portraits/Perez_portrait.png", link"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Raikkonen = {picture:"Media/Portraits/Raikkonen_portrait.png", link:"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Ricciardo = {picture:"Media/Portraits/Ricciardo_portrait.png", link"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Russell = {picture:"Media/Portraits/Russell_portrait.png", link:"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Sainz = {picture:"Media/Portraits/Sainz_portrait.png", link:"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Stroll = {picture:"Media/Portraits/Stroll_portrait.png", link:"https://www.formula1.com/en/drivers/lance-stroll.html"};
var	Verstappen = {picture:"Media/Portraits/Verstappen_portrait.png", link:"https://www.formula1.com/en/drivers/max-verstappen.html"};
var Vettel = {icture:"Media/Portraits/Vettel_portrait.png", link:"https://www.formula1.com/en/drivers/sebastian-vettel.html"};

//Picks a randomly selected stream from the above list
var driverPortraitList = [Albon, Bottas, Gasly, Giovinazzi, Grosjean, Hamilton, Kvyat, Latifi, Leclerc, Magnussen, Norris, Ocon, Perez, Raikkonen, Ricciardo, Russell, Sainz, Stroll, Verstappen, Vettel];
var randomPortrait = driverPortraitList[Math.floor(Math.random() * driverPortraitList.length)];
function replaceSrc() {
	document.getElementById("showcaseImage").src = randomPortrait;
}