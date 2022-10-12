/*
 *   This file contains data about astronomical bodies of the solar system
 *   these are used in quiz.js to generate questions based on various templates
 *
 * * * */

const solarFacts = [

{
	name: "Mercury",
	classification: 0, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Sun", //what this object orbits around
	orbitProximityOrder: 1, //the order this appears among other objects orbiting the same object
	apoapsis: 123, //furthest part of orbit
	periapsis: 234, //closest part of orbit
	yearLength: 123,
	diameter: 123,
	mass: 123,
	surfaceTempMin: null,
	surfaceTempMax: null
},
{
	name: "Venus",
	classification: 0, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Sun", //what this object orbits around
	orbitProximityOrder: 2, //the order this appears among other objects orbiting the same object
	apoapsis: 123, //furthest part of orbit
	periapsis: 234, //closest part of orbit
	yearLength: 123,
	diameter: 123,
	mass: 123,
	surfaceTempMin: -234,
	surfaceTempMax: 234
},
{
	name: "Earth",
	classification: 0, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Sun", //what this object orbits around
	orbitProximityOrder: 3, //the order this appears among other objects orbiting the same object
	apoapsis: 123, //furthest part of orbit
	periapsis: 234, //closest part of orbit
	yearLength: 123,
	diameter: 123,
	mass: 123,
	surfaceTempMin: -345,
	surfaceTempMax: 345
},
{
	name: "The Moon",
	classification: 2, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Earth", //what this object orbits around
	orbitProximityOrder: 1, //the order this appears among other objects orbiting the same object
	apoapsis: 405400, //furthest part of orbit
	periapsis: 362600, //closest part of orbit
	yearLength: "27:00:00:00",
	diameter: null,
	mass: null,
	surfaceTempMin: -247,
	surfaceTempMax: 120,
	magnitudeMin: -2.5,
	magnitudeMax: -12.9,
	satellites: 0,
	discovered: null
},

{
	name: "Mars",
	classification: 0, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Sun", //what this object orbits around
	apoapsis: 249261000, //furthest part of orbit
	periapsis: 206650000, //closest part of orbit
	yearLength: "687:00:00:00",
	diameter: null,
	mass: null,
	surfaceTempMin: -110,
	surfaceTempMax: 35,
	magnitudeMin: -2.94,
	magnitudeMax: 1.86,
	satellites: 2,
	discovered: null
},
{
	name: "Phobos",
	classification: 2, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Mars", //what this object orbits around
	apoapsis: 9517.58, //furthest part of orbit
	periapsis: 9234.42, //closest part of orbit
	yearLength: "00:07:39:00",
	diameter: null,
	mass: null,
	surfaceTempMin: -112,
	surfaceTempMax: -4,
	magnitude: 11.8,
	satellites: 0,
	discovered: "1877-08-18"
},
{
	name: "Deimos",
	classification: 2, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Mars", //what this object orbits around
	apoapsis: 23470.9, //furthest part of orbit
	periapsis: 23455.5, //closest part of orbit
	yearLength: "00:30:24:00",
	diameter: null,
	mass: null,
	surfaceTempMin: null,
	surfaceTempMax: null,
	magnitude: 12.89,
	satellites: 0,
	discovered: "1877-08-12"
},

]