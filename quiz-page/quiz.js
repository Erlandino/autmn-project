/*
 *   This file contains code specific to
 *   displaying questions on the quiz page
 *
 * * * */

console.log("Welcome to the quiz part")

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
	surfaceTempMin: -123,
	surfaceTempMax: 123
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
	apoapsis: 123, //furhtest part of orbit
	periapsis: 234, //closest part of orbit
	yearLength: 123,
	diameter: 123,
	mass: 123,
	surfaceTempMin: -456,
	surfaceTempMax: 456
},

{
	name: "Mars",
	classification: 0, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Sun", //what this object orbits around
	orbitProximityOrder: 4, //the order this appears among other objects orbiting the same object
	apoapsis: 123, //furhtest part of orbit
	periapsis: 234, //closest part of orbit
	yearLength: 123,
	diameter: 123,
	mass: 123,
	surfaceTempMin: -567,
	surfaceTempMax: 567
},
{
	name: "Phobos",
	classification: 2, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Mars", //what this object orbits around
	orbitProximityOrder: 1, //the order this appears among other objects orbiting the same object
	apoapsis: 123, //furhtest part of orbit
	periapsis: 234, //closest part of orbit
	yearLength: 123,
	diameter: 123,
	mass: 123,
	surfaceTempMin: -678,
	surfaceTempMax: 678
},
{
	name: "Deimos",
	classification: 2, //0=planet, 1=gas giant, 2=natural satellite, 3=asteroid
	orbitBody: "Mars", //what this object orbits around
	orbitProximityOrder: 2, //the order this appears among other objects orbiting the same object
	apoapsis: 123, //furhtest part of orbit
	periapsis: 234, //closest part of orbit
	yearLength: 123,
	diameter: 123,
	mass: 123,
	surfaceTempMin: -789,
	surfaceTempMax: 789
},

]
console.log(solarFacts)

//shuffle the order of question templates
shuffleArray(questionTemplates)

const quizLength = 10; //define how many questions to output
const quizOptionCount = 4 //define the maximum number of options the user will have
let questionSets = [] //initialize variable for question output
let quizOptions = [] //initialize variable for answer choice options
let choiceoptionType = "name" //initialize variable for what the answer choice options should be labelled
let currentTemplate = -1 //initialize counter for which question template we shall use
let currentQuestion = {} //initialize temporary variable for creating objest during loop
let highestValue = 0 //initialize variable used for determining correct answer in a highestValue type question
let comparisonProperty = "name" //initialize variable for determining which property to compare


for(let i = 0; i < quizLength; i++) {
	console.log("loop iteration: " + i)

	//reset the object
	currentQuestion = {}

	//make sure we dont try to pick a question template which does not exist
	if(++currentTemplate === questionTemplates.length) {
		currentTemplate = 0
	}

	console.log("template: " + currentTemplate)

	//update output object with question text and score value
	currentQuestion.text = questionTemplates[currentTemplate].text
	currentQuestion.score = questionTemplates[currentTemplate].score + 50 * quizOptionCount
	
	//reset option array for this loop iteration
	quizOptions = []

	//set which label the options should have
	optionType = questionTemplates[currentTemplate].optionType

	//randomize the order items in the array we pull answer options from
	shuffleArray(solarFacts)

	//logic for handling different types of questions
	switch(questionTemplates[currentTemplate].type) {

		case "highestValue":

			recordValue = 0

			//grab answer options from the solarFacts array until we have enough
			for(let currentChoiceOption = 0; quizOptions.length < quizOptionCount; currentChoiceOption++) {

				comparisonProperty = solarFacts[currentChoiceOption][`${questionTemplates[currentTemplate].comparisonProperty}`]

				//add the name of the current option to the answer choice output array
				quizOptions.push(solarFacts[currentChoiceOption][optionType])

				//check which item had the highest value
				if(comparisonProperty > recordValue) {

					//update highest value record
					recordValue = comparisonProperty


					//set record holder as correct answer
					correctAnswer = solarFacts[currentChoiceOption][optionType]

				}

			}

		break

		case "lowestValue":

			recordValue = 0

			//grab answer options from the solarFacts array until we have enough
			for(let currentChoiceOption = 0; quizOptions.length < quizOptionCount; currentChoiceOption++) {

				comparisonProperty = solarFacts[currentChoiceOption][`${questionTemplates[currentTemplate].comparisonProperty}`]

				//add the name of the current option to the answer choice output array
				quizOptions.push(solarFacts[currentChoiceOption][optionType])

				//check which item had the lowest value
				if(comparisonProperty < recordValue) {

					//update lowest value record
					recordValue = comparisonProperty

					//set record holder as correct answer
					correctAnswer = solarFacts[currentChoiceOption][optionType]

				}

			}

		break

	}

	//update output object with the answer and option array
	currentQuestion.options = quizOptions
	currentQuestion.answer = correctAnswer

	console.log("current question:")
	console.log(currentQuestion)

	//add the question object to the output question set array
	questionSets.push(currentQuestion)
}
console.log("final set of questions")
console.log(questionSets)

//psuedo code:

// let i = 1
// let quizLength = 10
// let questionId = 0
// let questionText = "Which planet is called the 'Morning Star'?"
// let optionId = 0
// let optionText = "Mercury"



//shuffle the order of the question array

//make a new array from the first {quiz.length} elements of the question array,
//while inserting answer options from solarfacts.json and
//formatting the output to match the markup:


// let optionloop = `<input id="question${question}option${optionId}" name="question${questionId}" type="radio" value="${optionId}" autocomplete="off" required><label for="question${questionId}option${optionId}">${optionText}</label>`
// let sampleoutput = `<fieldset><h3>Question ${i} of ${quizLength}:</h3><p>${questionText}</p>` + optionloop + `<div class="options"></div></fieldset>`