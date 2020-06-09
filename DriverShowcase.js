//List of Showcased Drivers

var drivers = [
		{driver:"Alexander Albon",
		picture:"Media/Portraits/Albon_portrait.png",
		link:"https://www.formula1.com/en/drivers/alexander-albon.html"
		},

		{driver:"Valtteri Bottas",
		picture:"Media/Portraits/Bottas_portrait.png",
		link:"https://www.formula1.com/en/drivers/valtteri-bottas.html"
		},

		{driver:"Pierre Gasly",
		picture:"Media/Portraits/Gasly_portrait.png",
		link:"https://www.formula1.com/en/drivers/pierre-gasly.html"
		},

		{driver:"Antonino Giovinazzi",
		picture:"Media/Portraits/Giovinazzi_portrait.png",
		link:"https://www.formula1.com/en/drivers/antonio-giovinazzi.html"
		},

		{driver:"Romain Grosjean",
		picture:"Media/Portraits/Grosjean_portrait.png",
		link:"https://www.formula1.com/en/drivers/romain-grosjean.html"
		},

		{driver:"Lewis Hamilton",
		picture:"Media/Portraits/Hamilton_portrait.png",
		link:"https://www.formula1.com/en/drivers/lewis-hamilton.html"
		},

		{driver:"Daniil Kvyat",
		picture:"Media/Portraits/Kvyat_portrait.png",
		link:"https://www.formula1.com/en/drivers/daniil-kvyat.html"
		},

		{driver:"Nicholas Latifi",
		picture:"Media/Portraits/Latifi_portrait.png",
		link:"https://www.formula1.com/en/drivers/nicholas-latifi.html"
		},

		{driver:"Charles Leclerc",
		picture:"Media/Portraits/Leclerc_portrait.png",
		link:"https://www.formula1.com/en/drivers/charles-leclerc.html"
		},

		{driver:"Kevin Magnussen",
		picture:"Media/Portraits/Magnussen_portrait.png",
		link:"https://www.formula1.com/en/drivers/kevin-magnussen.html"
		},

		{driver:"Lando Norris",
		 picture:"Media/Portraits/Norris_portrait.png",
		 link:"https://www.formula1.com/en/drivers/lando-norris.html"
		},

		{driver:"Esteban Ocon",
		 picture:"Media/Portraits/Ocon_portrait.png",
		 link:"https://www.formula1.com/en/drivers/esteban-ocon.html"
		},

		{driver:"Sergio Perez",
		 picture:"Media/Portraits/Perez_portrait.png",
		 link:"https://www.formula1.com/en/drivers/sergio-perez.html"
		},

		{driver:"Kimi Raikkonen",
		 picture:"Media/Portraits/Raikkonen_portrait.png",
		 link:"https://www.formula1.com/en/drivers/kimi-raikkonen.html"
		},

		{driver:"Daniel Ricciardo",
		 picture:"Media/Portraits/Ricciardo_portrait.png",
		 link:"https://www.formula1.com/en/drivers/daniel-ricciardo.html"
		},

		{driver:"George Russell",
		 picture:"Media/Portraits/Russell_portrait.png",
		 link:"https://www.formula1.com/en/drivers/george-russell.html"
		},

		{driver:"Carlos Sainz",
		 picture:"Media/Portraits/Sainz_portrait.png",
		 link:"https://www.formula1.com/en/drivers/carlos-sainz.html"
		},

		{driver:"Lance Stroll",
		 picture:"Media/Portraits/Stroll_portrait.png",
		 link:"https://www.formula1.com/en/drivers/lance-stroll.html"
		},

		{driver:"Max Verstappen",
		 picture:"Media/Portraits/Verstappen_portrait.png",
		 link:"https://www.formula1.com/en/drivers/max-verstappen.html"
		},

		{driver:"Sebastian Vettel",
		 picture:"Media/Portraits/Vettel_portrait.png",
		 link:"https://www.formula1.com/en/drivers/sebastian-vettel.html"
		}
];

//var drivers = require("./VariableList.js");

//Picks a randomly selected stream from the above list
var randomPick = Math.floor(Math.random() * Math.floor(drivers.length - 1));
var randomPortrait = drivers[randomPick];

function replaceSrc() {
	document.getElementById("showcaseImage").src = randomPortrait.picture;
	document.getElementById("showcaseLink").href = randomPortrait.link;
}

window.onload = replaceSrc();