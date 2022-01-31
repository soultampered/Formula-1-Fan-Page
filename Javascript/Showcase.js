var drivers = [//List of Showcased Drivers
	{
        name: 'Fernando Alonso',
        age: 39,
        team: 'Alpine',
        nationality: 'Spanish',
    	picture: 'Media/Portraits/Alonso_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/fernando-alonso.html'
	},

	{
        name: 'Valtteri Bottas',
        age: 31,
        team: 'Mercedes',
        nationality: 'Finnish',
    	picture: 'Media/Portraits/Bottas_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/valtteri-bottas.html'
	},

	{
        name: 'Pierre Gasly',
        age: 25,
        team: 'Alpha Tauri',
        nationality: 'French',
    	picture: 'Media/Portraits/Gasly_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/pierre-gasly.html'
	},

	{
        name: 'Antonino Giovinazzi',
        age: 27,
        team: 'Alfa Romeo',
        nationality: 'Italian',
    	picture: 'Media/Portraits/Giovinazzi_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/antonio-giovinazzi.html'
	},

	{
        name: 'Nikita Mazepin',
        age: 22,
        team: 'Haas',
        nationality: 'Russian',
    	picture: 'Media/Portraits/Mazepin_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/nikita-mazipan.html'
	},

	{
        name: 'Lewis Hamilton',
        age: 36,
        team: 'Mercedes',
        nationality: 'British',
    	picture: 'Media/Portraits/Hamilton_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/lewis-hamilton.html'
	},

	{
        name: 'Yuki Tsunoda',
        age: 20,
        team: 'Alpha Tauri',
        nationality: 'Japanese',
    	picture: 'Media/Portraits/Tsunoda_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/Yuki-Tsunoda.html'
	},

	{
        name: 'Nicholas Latifi',
        age: 25,
        team: 'Williams',
        nationality: 'Canadian',
    	picture: 'Media/Portraits/Latifi_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/nicholas-latifi.html'
	},

	{
        name: 'Charles Leclerc',
        age: 23,
        team: 'Ferrari',
        nationality: 'Monagasque',
    	picture: 'Media/Portraits/Leclerc_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/charles-leclerc.html'
	},

	{
        name: 'Mick Schumacher',
        age: 22,
        team: 'Haas',
        nationality: 'German',
    	picture: 'Media/Portraits/Schumacher_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/mick-schumacher.html'
	},

	{
        name: 'Lando Norris',
        age: 21,
        team: 'Mclaren',
        nationality: 'British',
    	picture: 'Media/Portraits/Norris_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/lando-norris.html'
	},

	{
        name: 'Esteban Ocon',
        age: 24,
        team: 'Alpine',
        nationality: 'French',
    	picture: 'Media/Portraits/Ocon_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/esteban-ocon.html'
	},

	{
        name: 'Sergio Perez',
        age: 31,
        team: 'Red Bull',
        nationality: 'Mexican',
    	picture: 'Media/Portraits/Perez_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/sergio-perez.html'
	},

	{
        name: 'Kimi Raikkonen',
        age: 41,
        team: 'Alfa Romeo',
        nationality: 'Finnish',
    	picture: 'Media/Portraits/Raikkonen_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/kimi-raikkonen.html'
	},

	{
        name: 'Daniel Ricciardo',
        age: 31,
        team: 'Mclaren',
        nationality: 'Australian',
    	picture: 'Media/Portraits/Ricciardo_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/daniel-ricciardo.html'
	},

	{
        name: 'George Russell',
        age: 23,
        team: 'Williams',
        nationality: 'British',
    	picture: 'Media/Portraits/Russell_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/george-russell.html'
	},

	{
        name: 'Carlos Sainz',
        age: 26,
        team: 'Ferrari',
        nationality: 'Spanish',
    	picture: 'Media/Portraits/Sainz_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/carlos-sainz.html'
	},

	{
        name: 'Lance Stroll',
        age: 22,
        team: 'Aston Martin',
        nationality: 'Canadian',
    	picture: 'Media/Portraits/Stroll_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/lance-stroll.html'
	},

	{
        name: 'Max Verstappen',
        age: 23,
        team: 'Red Bull',
        nationality: 'Dutch',
    	picture: 'Media/Portraits/Verstappen_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/max-verstappen.html'
	},

	{
        name: 'Sebastian Vettel',
        age: 33,
        team: 'Aston Martin',
        nationality: 'German',
    	picture: 'Media/Portraits/Vettel_portrait.png',
    	link: 'https://www.formula1.com/en/drivers/sebastian-vettel.html'
	}
];
var venues = [//List of Showcased Venues
    {
        raceTitle: "Bahrain",
        flag: "Media/worldFlags/flagBahrain.jpg",
        link: "https://www.formula1.com/en/racing/2022/Bahrain.html",
        raceDate: new Date("2022-03-20"),
        lapCount: 57,
        lapDistance: 5.412,
        cornerCount: 15
    },

    {
        raceTitle: "Saudi Arabia",
        flag: "Media/worldFlags/flagSaudiArabia.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Saudi_Arabia.html",
        raceDate: new Date("2022-03-27"),
        lapCount: 50,
        lapDistance: 6.175,
        cornerCount: 27
    },

    {
        raceTitle: "Australia",
        flag: "Media/worldFlags/flagAustralia.png",
        link: "https://www.formula1.com/en/racing/2022/Australia.html",
        raceDate: new Date("2022-04-10"),
        lapCount: 58,
        lapDistance: 5.303,
        cornerCount: 16
    },

    {
        raceTitle: "San_Marino",
        flag: "Media/worldFlags/flagItaly.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Imola.html",
        raceDate: new Date("2022-04-24"),
        lapCount: 63,
        lapDistance: 4.909, 
        cornerCount: 19
    },

    {    
        raceTitle: "United States",
        flag: "Media/worldFlags/flagUnitedStates.png",
        link: "https://www.formula1.com/en/racing/2022/Miami.html",
        raceDate: new Date("2022-05-08"),
        lapCount: 66,
        lapDistance: 4.653,
        cornerCount: 15
    },

    {
        raceTitle: "Spain",
        flag: "Media/worldFlags/flagSpain.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Spain.html",
        raceDate: new Date("2022-05-22"),
        lapCount: 66,
        lapDistance: 4.675,
        cornerCount: 16
    },

    {
        raceTitle: "Monaco",
        flag: "Media/worldFlags/flagMonaco.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Monaco.html",
        raceDate: new Date("2022-05-29"),
        lapCount: 78,
        lapDistance: 3.337,
        cornerCount: 19
    },

    {
        raceTitle: "Azerbaijan",
        flag: "Media/worldFlags/flagAzerbaijan.png",
        link: "https://www.formula1.com/en/racing/2022/Azerbaijan.html",
        raceDate: new Date("2022-06-12"),
        lapCount: 51,
        lapDistance: 6.003,
        cornerCount: 20
    },

    {
        raceTitle: "Canada",
        flag: "Media/worldFlags/flagCanada.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Canada.html",
        raceDate: new Date("2022-06-19"),
        lapCount: 70,
        lapDistance: 4.361,
        cornerCount: 14
    },

    {
        raceTitle: "Great Britain",
        flag: "Media/worldFlags/flagUnitedKingdom.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Great_Britain.html",
        raceDate: new Date("2022-07-03"),
        lapCount: 52,
        lapDistance: 5.891,
        cornerCount: 18
    },

    {
        raceTitle: "Austria",
        flag: "Media/worldFlags/flagAustria.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Austria.html",
        raceDate: new Date("2022-07-10"),
        lapCount: 71,
        lapDistance: 4.318,
        cornerCount: 10
    },

    {
        raceTitle: "France",
        flag: "Media/worldFlags/flagFrance.jpeg",
        link: "https://www.formula1.com/en/racing/2022/France.html",
        raceDate: new Date("2022-07-24"),
        lapCount: 53,
        lapDistance: 5.842,
        cornerCount: 15
    },

    {
        raceTitle: "Hungary",
        flag: "Media/worldFlags/flagHungary.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Hungary.html",
        raceDate: new Date("2022-07-31"),
        lapCount: 70,
        lapDistance: 4.381,
        cornerCount: 14
    },

    {
        raceTitle: "Belgium",
        flag: "Media/worldFlags/flagBelgium.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Belgium.html",
        raceDate: new Date("2022-08-28"),
        lapCount: 44,
        lapDistance: 7.004,
        cornerCount: 19
    },

    {
        raceTitle: "Netherlands",
        flag: "Media/worldFlags/flagNetherlands.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Netherlands.html",
        raceDate: new Date("2022-10-04"),
        lapCount: 72,
        lapDistance: 4.259,
        cornerCount: 14
    },

    {
        raceTitle: "Italy",
        flag: "Media/worldFlags/flagItaly.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Italy.html",
        raceDate: new Date("2022-09-11"),
        lapCount: 53,
        lapDistance: 5.793,
        cornerCount: 11
    },

    {
        raceTitle: "Russia",
        flag: "Media/worldFlags/flagRussia.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Russia.html",
        raceDate: new Date("2022-09-25"),
        lapCount: 53,
        lapDistance: 5.848,
        cornerCount: 18
    },

    {
        raceTitle: "Singapore",
        flag: "Media/worldFlags/flagSingapore.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Singapore.html",
        raceDate: new Date("2022-10-02"),
        lapCount: 61,
        lapDistance: 5.063,
        cornerCount: 23
    },

    {
        raceTitle: "Japan",
        flag: "Media/worldFlags/flagJapan.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Japan.html",
        raceDate: new Date("2022-10-09"),
        lapCount: 53,
        lapDistance: 5.807,
        cornerCount: 18
    },

    {
        raceTitle: "United States",
        flag: "Media/worldFlags/flagUnitedStates.jpeg",
        link: "https://www.formula1.com/en/racing/2022/United_States.html",
        raceDate: new Date("2022-10-23"),
        lapCount: 56,
        lapDistance: 5.513,
        cornerCount: 20
    },

    {
        raceTitle: "Mexico",
        flag: "Media/worldFlags/flagMexico.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Mexico.html",
        raceDate: new Date("2022-10-30"),
        lapCount: 71,
        lapDistance: 4.304,
        cornerCount: 17
    },

    {
        raceTitle: "Brazil",
        flag: "Media/worldFlags/flagBrazil.jpeg",
        link: "https://www.formula1.com/en/racing/2022/Brazil.html",
        raceDate: new Date("2022-11-13"),
        lapCount: 71,
        lapDistance: 4.309,
        cornerCount: 15
    },

    {
        raceTitle: "Abu Dhabi",
        flag: "Media/worldFlags/flagAbuDhabi.jpeg",
        link: "https://www.formula1.com/en/racing/2022/United_Arab_Emirates.html",
        raceDate: new Date("2021-11-20"),
        lapCount: 55,
        lapDistance: 5.554,
        cornerCount: 21
    }
];
var endOfSeason = { //Default Event Showcase display
        raceTitle: "The Season has finished",
        flag: "Media/f1_logo.png",
        link: "https://www.formula1.com",
        raceDate: "N/A"
};

function replaceDriverSrc() { //Picks a randomly selected driver from the above list
    var randomPick = Math.floor(Math.random() * Math.floor(drivers.length));
    var randomPortrait = drivers[randomPick];
    
	document.getElementById("driverImage").src = randomPortrait.picture;
	document.getElementById("driverLink").href = randomPortrait.link;
	document.getElementById("driverName").innerHTML = 'Name: ' + randomPortrait.name;
    document.getElementById(id="driverAge").innerHTML = 'Age: ' + randomPortrait.age;
    document.getElementById(id="driverTeam").innerHTML = 'Team: ' + randomPortrait.team;
    document.getElementById(id="driverNation").innerHTML = 'Nationality: ' + randomPortrait.nationality;
    } replaceDriverSrc();

function nextRace() {
    var dateObj = new Date();
    var currentTime = dateObj.getTime();
        for (var i = 0; i <= (venues.length-1); i++) {
            var raceDate = venues[i].raceDate 
                if (currentTime <= raceDate.getTime()) {
                    document.getElementById('raceFlag').src = venues[i].flag;
                    document.getElementById('raceLink').href = venues[i].link;
                    document.getElementById('raceName').innerHTML = 'Country: ' + venues[i].raceTitle;
                    document.getElementById('lapCount').innerHTML = 'Total Laps: ' + venues[i].lapCount;
                    document.getElementById('lapDistance').innerHTML = 'Lap Distance: ' + venues[i].lapDistance + ' km';
                    document.getElementById('cornerCount').innerHTML = 'Total Corners: ' + venues[i].cornerCount;
                    break;
                } else {                                 
                    document.getElementById("raceFlag").src = endOfSeason.flag;
                    document.getElementById("raceLink").href = endOfSeason.link;
                    document.getElementById("raceName").innerHTML = endOfSeason.raceTitle;
            }
        }
    } nextRace();