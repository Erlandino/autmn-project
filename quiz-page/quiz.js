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
   compare: "surfaceTempMax",
   options: "astronomicalBody",
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
    surfaceTempMin: 123,
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
    surfaceTempMin: 123,
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
    surfaceTempMin: 123,
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
    surfaceTempMin: 123,
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
    surfaceTempMin: 123,
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
    surfaceTempMin: 123,
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
    surfaceTempMin: 123,
    surfaceTempMax: 789
},

]
console.log(solarFacts)

//shuffle the order of question templates
shuffleArray(questionTemplates)

const quizLength = 10; //define how many questions to output
const quizOptionCount = 4 //define the maximum number of options the user will have
let questionSets = [] //initialize variable for question output
let choiceOptions = [] //initialize variable for answer choice options
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

    //add text description of current question to output array object
    currentQuestion.name = questionTemplates[currentTemplate].text

    //add score value of current question to output array object
    currentQuestion.score = questionTemplates[currentTemplate].score + 50 * quizOptionCount
    
    //reset the array of choice options
    choiceOptions = []

    //randomize the order items in the array we pull answer options from
    shuffleArray(solarFacts)

    //logic for handling different types of questions
    switch(questionTemplates[currentTemplate].type) {

        case "highestValue":

            comparisonProperty = questionTemplates[currentTemplate].compare
            highestValue = 0

            //grab answer options from the solarFacts array until we have enough
            for(let ii = 0; choiceOptions.length < quizOptionCount; ii++) {

                
// console.log("current max temp: " + solarFacts[ii][comparisonProperty])

                if (solarFacts[ii][comparisonProperty] > 0) {
                    choiceOptions.push(solarFacts[ii].name)

                    // console.log("pushed: " + solarFacts[ii].name)

                    //check which item had the highest value
                    if(solarFacts[ii][comparisonProperty] > highestValue) {

                        //update highest value record
                        highestValue = solarFacts[ii][comparisonProperty]

                        //set record holder as correct answer
                        correctAnswer = solarFacts[ii].name

                    }
                }
                // console.log("option count: " + choiceOptions.length)
            }

        break
    }

    //add the array of choice options to to output array object
    currentQuestion.options = choiceOptions

    currentQuestion.answer = correctAnswer

    console.log("current question:")
    console.log(currentQuestion)

    //add the question object to the question set output array
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