/*
 *   This file contains code specific to
 *   displaying questions on the quiz page
 *
 * * * */



/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}


const questionTemplates = [

 /*{ text: "Which of the following is <strong>called the Morning Star</strong>?",
   type: "specific", //question method type
   compare: "Venus", //value to match
   options: "astronomicalBody", //label for choice options
   score: 140 }, //difficulty score of question
*/
 { text: "Which of the following is <strong>the hottest</strong>?",
   type: "highestValue",
   comparisonProperty: "surfaceTempMax",
   optionType: "name",
   score: 140 },

 { text: "Which of the following is <strong>the coldest</strong>?",
   type: "lowestValue",
   comparisonProperty: "surfaceTempMin",
   optionType: "name",
   score: 140 },

 // { text: "Which of the following is <strong>closest to the Sun</strong>?",
 //   type: "lowestValue",
 //   compare: "sunDistance",
 //   options: "astronomicalBody",
 //   score: 80 },

]
console.log(questionTemplates)

const classification = ["Planet", "Gas giant", "Natural satellite", "Asteroid"]
console.log(classification)

const solarFacts = [

{
	name: "Mercury",
	classification: 0, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Sun", //what this object orbits around
	orbitProximityOrder: 1, //the order this appears among other objects orbiting the same object
	apoapsis: 123, //furhtest part of orbit
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
	apoapsis: 123, //furhtest part of orbit
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
	apoapsis: 123, //furhtest part of orbit
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
	apoapsis: 405400, //furhtest part of orbit
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
	apoapsis: 249261000, //furhtest part of orbit
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
	apoapsis: 9517.58, //furhtest part of orbit
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
	apoapsis: 23470.9, //furhtest part of orbit
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
console.log(solarFacts)

//shuffle the order of question templates
shuffleArray(questionTemplates)

const quizLimit = 10; //define how many questions to output
const optionMax = 4 //define the maximum number of options the user will have
let questionSets = [] //initialize variable for question output
let quizOptions = [] //initialize variable for answer choice options
let currentTemplate = -1 //initialize counter for which question template we shall use
let currentQuestion = {} //initialize temporary variable for creating objest during loop
let recordValue = null //initialize variable used for determining correct answer in a highestValue type question
let compareValue = "name" //initialize variable for determining which property to compare


for(let i = 0; i < quizLimit; i++) {
	console.log("loop iteration: " + i)

	//reset the object
	currentQuestion = {}

	//make sure we dont try to pick a question template which does not exist
	if(++currentTemplate === questionTemplates.length) {
		currentTemplate = 0
	}

	//define how many answer options we can create with the current template
//todo: fix bug causing this limit to be ignored
	optionLimit = solarFacts.filter(x => x[`${questionTemplates[currentTemplate].comparisonProperty}`] != null).length

	console.log("max options: " + optionMax)
	console.log("template: " + currentTemplate)

	//update output object with question text and score value
	currentQuestion.text = questionTemplates[currentTemplate].text
	currentQuestion.score = questionTemplates[currentTemplate].score + 50 * optionLimit
	
	//reset option array for this loop iteration
	quizOptions = []

	//set which label the options should have
	optionType = questionTemplates[currentTemplate].optionType

	//randomize the order items in the array we pull answer options from
	shuffleArray(solarFacts)

	//logic for handling different types of questions
	switch(questionTemplates[currentTemplate].type) {

		case "highestValue":

			recordValue = null

			//grab answer options from the solarFacts array until we have enough
			for(let currentChoiceOption = 0; quizOptions.length <= optionLimit && quizOptions.length <= optionMax; currentChoiceOption++) {

				//determine which property we will be comparing
				compareValue = solarFacts[currentChoiceOption][`${questionTemplates[currentTemplate].comparisonProperty}`]
				optionLabel = solarFacts[currentChoiceOption][optionType]

				//check if the option has a valid value
				if(compareValue != null) {

					//add the name of the current option to the answer choice output array
					quizOptions.push(optionLabel)

					//check which item had the highest value
					if(compareValue > recordValue) {

						//update highest value record
						recordValue = compareValue

						//set record holder as correct answer
						correctAnswer = optionLabel
					}
				}
			}

		break

		case "lowestValue":

			recordValue = null

			//grab answer options from the solarFacts array until we have enough
			for(let currentChoiceOption = 0; quizOptions.length <= optionLimit && quizOptions.length <= optionMax; currentChoiceOption++) {

				//determine which property we will be comparing
				compareValue = solarFacts[currentChoiceOption][`${questionTemplates[currentTemplate].comparisonProperty}`]
				optionLabel = solarFacts[currentChoiceOption][optionType]

				//check if the option has a valid value
				if(compareValue != null) {

					//add the name of the current option to the answer choice output array
					quizOptions.push(optionLabel)

					//check which item had the lowest value
					if(compareValue < recordValue) {

						//update lowest value record
						recordValue = compareValue

						//set record holder as correct answer
						correctAnswer = optionLabel
					}
				}
			}

		break

	}

	//update output object with the answer and option array
	currentQuestion.options = quizOptions
	currentQuestion.answer = correctAnswer

	console.log(currentQuestion)

	//add the question object to the output question set array
	questionSets.push(currentQuestion)
}

console.log("Loop has finished")

console.log(questionSets)
