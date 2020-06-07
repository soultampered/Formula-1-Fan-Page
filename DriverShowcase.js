// List of Showcased Drivers

window.onload = replaceSrc;

var drivers = {
	0: {driver:"Albon",
		picture:"Media/Portraits/Albon_portrait.png",
		link:"https://www.formula1.com/en/drivers/alexander-albon.html"
		},

	1: {driver:"Bottas", 
		picture:"Media/Portraits/Bottas_portrait.png",
		link:"https://www.formula1.com/en/drivers/valtteri-bottas.html"
		},

	2: {driver:"Gasly",
		picture:"Media/Portraits/Gasly_portrait.png",
		link:"https://www.formula1.com/en/drivers/pierre-gasly.html"
		},

	3: {driver:"Giovinazzi",
		picture:"Media/Portraits/Giovinazzi_portrait.png",
		link:"https://www.formula1.com/en/drivers/antonio-giovinazzi.html"
		},

	4: {driver:"Grosjean",
		picture:"Media/Portraits/Grosjean_portrait.png",
		link:"https://www.formula1.com/en/drivers/romain-grosjean.html"
		},

	5: {driver:"Hamilton",
		picture:"Media/Portraits/Hamilton_portrait.png",
		link:"https://www.formula1.com/en/drivers/lewis-hamilton.html"
		},

	6: {driver:"Kvyat",
		picture:"Media/Portraits/Kvyat_portrait.png",
		link:"https://www.formula1.com/en/drivers/daniil-kvyat.html"
		},

	7: {driver:"Latifi",
		picture:"Media/Portraits/Latifi_portrait.png",
		link:"https://www.formula1.com/en/drivers/nicholas-latifi.html"
		},

	8: {driver:"Leclerc",
		picture:"Media/Portraits/Leclerc_portrait.png",
		link:"https://www.formula1.com/en/drivers/charles-leclerc.html"
		},

	9: {driver:"Magnussen",
		picture:"Media/Portraits/Magnussen_portrait.png",
		link:"https://www.formula1.com/en/drivers/kevin-magnussen.html"
		},

	10:	{driver:"Norris",
		 picture:"Media/Portraits/Norris_portrait.png", 
		 link:"https://www.formula1.com/en/drivers/lando-norris.html"
		},

	11:	{driver:"Ocon",
		 picture:"Media/Portraits/Ocon_portrait.png",
		 link:"https://www.formula1.com/en/drivers/esteban-ocon.html"
		},

	12:	{driver:"Perez",
		 picture:"Media/Portraits/Perez_portrait.png",
		 link:"https://www.formula1.com/en/drivers/sergio-perez.html"
		},
	
	13:	{driver:"Raikkonen",
		 picture:"Media/Portraits/Raikkonen_portrait.png",
		 link:"https://www.formula1.com/en/drivers/kimi-raikkonen.html"
		},
	
	14:	{driver:"Ricciardo",
		 picture:"Media/Portraits/Ricciardo_portrait.png",
		 link:"https://www.formula1.com/en/drivers/daniel-ricciardo.html"
		},
	
	15:	{driver:"Russell",
		 picture:"Media/Portraits/Russell_portrait.png",
		 link:"https://www.formula1.com/en/drivers/george-russell.html"
		},
	
	16:	{driver:"Sainz",
		 picture:"Media/Portraits/Sainz_portrait.png",
		 link:"https://www.formula1.com/en/drivers/carlos-sainz.html"
		},
	
	17:	{driver:"Stroll",
		 picture:"Media/Portraits/Stroll_portrait.png",
		 link:"https://www.formula1.com/en/drivers/lance-stroll.html"
		},
	
	18:	{driver:"Verstappen",
		 picture:"Media/Portraits/Verstappen_portrait.png",
		 link:"https://www.formula1.com/en/drivers/max-verstappen.html"
		},

	19: {driver:"Vettel",
		 picture:"Media/Portraits/Vettel_portrait.png",
		 link:"https://www.formula1.com/en/drivers/sebastian-vettel.html"
		}
};
//Picks a randomly selected stream from the above list
var randomPortrait = drivers[Math.floor(Math.random() * drivers.length)];

function replaceSrc() {
	document.getElementById("showcaseImage").src = randomPortrait.picture;
	document.getElementById("showcaseLink").href = randomPortrait.link;
}





/*
var Albon = {picture:"Media/Portraits/Albon_portrait.png", link:"https://www.formula1.com/en/drivers/alexander-albon.html"};
var Bottas = {picture:"Media/Portraits/Bottas_portrait.png", link:"https://www.formula1.com/en/drivers/valtteri-bottas.html"};		
var Gasly =	{picture:"Media/Portraits/Gasly_portrait.png", link:"https://www.formula1.com/en/drivers/pierre-gasly.html"};
var Giovinazzi = {picture:"Media/Portraits/Giovinazzi_portrait.png", link:"https://www.formula1.com/en/drivers/antonio-giovinazzi.html"};
var Grosjean = {picture:"Media/Portraits/Grosjean_portrait.png", link:"https://www.formula1.com/en/drivers/romain-grosjean.html"};
var Hamilton = {picture:"Media/Portraits/Hamilton_portrait.png", link:"https://www.formula1.com/en/drivers/lewis-hamilton.html"};
var	Kvyat = {picture:"Media/Portraits/Kvyat_portrait.png", link:"https://www.formula1.com/en/drivers/daniil-kvyat.html"};
var	Latifi = {picture:"Media/Portraits/Latifi_portrait.png", link:"https://www.formula1.com/en/drivers/nicholas-latifi.html"};
var	Leclerc = {picture:"Media/Portraits/Leclerc_portrait.png", link:"https://www.formula1.com/en/drivers/charles-leclerc.html"};
var Magnussen = {picture:"Media/Portraits/Magnussen_portrait.png", link:"https://www.formula1.com/en/drivers/kevin-magnussen.html"};
var	Norris = {picture:"Media/Portraits/Norris_portrait.png", link:"https://www.formula1.com/en/drivers/lando-norris.html"};
var	Ocon = {picture:"Media/Portraits/Ocon_portrait.png", link:"https://www.formula1.com/en/drivers/esteban-ocon.html"};
var	Perez = {picture:"Media/Portraits/Perez_portrait.png", link:"https://www.formula1.com/en/drivers/sergio-perez.html"};
var	Raikkonen = {picture:"Media/Portraits/Raikkonen_portrait.png", link:"https://www.formula1.com/en/drivers/kimi-raikkonen.html"};
var	Ricciardo = {picture:"Media/Portraits/Ricciardo_portrait.png", link:"https://www.formula1.com/en/drivers/daniel-ricciardo.html"};
var	Russell = {picture:"Media/Portraits/Russell_portrait.png", link:"https://www.formula1.com/en/drivers/george-russell.html"};
var	Sainz = {picture:"Media/Portraits/Sainz_portrait.png", link:"https://www.formula1.com/en/drivers/carlos-sainz.html"};
var	Stroll = {picture:"Media/Portraits/Stroll_portrait.png", link:"https://www.formula1.com/en/drivers/lance-stroll.html"};
var	Verstappen = {picture:"Media/Portraits/Verstappen_portrait.png", link:"https://www.formula1.com/en/drivers/max-verstappen.html"};
var Vettel = {picture:"Media/Portraits/Vettel_portrait.png", link:"https://www.formula1.com/en/drivers/sebastian-vettel.html"};

//var driverPortraitList = [Albon, Bottas, Gasly, Giovinazzi, Grosjean, Hamilton, Kvyat, Latifi, Leclerc, Magnussen, Norris, Ocon, Perez, Raikkonen, Ricciardo, Russell, Sainz, Stroll, Verstappen, Vettel];
//var randomPortrait = driverPortraitList[Math.floor(Math.random() * driverPortraitList.length)];*/