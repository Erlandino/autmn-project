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

const classification = ["Planet", "Gas giant", "Natural satellite", "Dwarf planet", "Ice giant"]
const region = ["Inner planets", "Outer planets", "Asteroid belt", "Kuiper belt", "Scattered disc", "Sednoid"]
const quizLimit = 10; //define how many questions to output
const optionMax = 4 //define the maximum number of options the user will have
let questionSets = [] //initialize variable for question output
let quizOptions = [] //initialize variable for answer choice options
let currentTemplate = -1 //initialize counter for which question template we shall use
let currentQuestion = {} //initialize temporary variable for creating objest during loop
let recordValue = null //initialize variable used for determining correct answer in a highestValue type question
let compareValue = "name" //initialize variable for determining which property to compare
let correctAnswer = ""

//shuffle the order of question templates
shuffleArray(questionTemplates)

for(let i = 0; i < quizLimit; i++) {

	//reset the object
	currentQuestion = {}

	//make sure we dont try to pick a question template which does not exist
	if(++currentTemplate === questionTemplates.length) {
		currentTemplate = 0
	}

	//define how many answer options we can create with the current template
	optionLimit = solarFacts.filter(x => x[`${questionTemplates[currentTemplate].comparisonProperty}`] != null).length

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

//todo: clean this up by making a reusable function
			recordValue = null

			//grab answer options from the solarFacts array until we have enough
			for(let currentChoiceOption = 0; quizOptions.length <= optionLimit && quizOptions.length < optionMax; currentChoiceOption++) {

				//determine which property we will be comparing
				compareValue = solarFacts[currentChoiceOption][`${questionTemplates[currentTemplate].comparisonProperty}`]
				optionLabel = solarFacts[currentChoiceOption][optionType]

				//check if the option has a valid value, and that the value is not the same as the current correct answer
				if(compareValue != null && compareValue != recordValue) {

					//add the name of the current option to the answer choice output array
					quizOptions.push(optionLabel)

					//check which item had the highest value
					if(compareValue > recordValue || recordValue === null) {

						//update highest value record
						recordValue = compareValue

						//set record holder as correct answer
						correctAnswer = quizOptions.length - 1
					}
				}
			}
		break

		case "lowestValue":

//todo: clean this up by making a reusable function
			recordValue = null

			//grab answer options from the solarFacts array until we have enough
			for(let currentChoiceOption = 0; quizOptions.length <= optionLimit && quizOptions.length < optionMax; currentChoiceOption++) {

				//determine which property we will be comparing
				compareValue = solarFacts[currentChoiceOption][`${questionTemplates[currentTemplate].comparisonProperty}`]
				optionLabel = solarFacts[currentChoiceOption][optionType]

				//check if the option has a valid value, and that the value is not the same as the current correct answer
				if(compareValue != null && compareValue != recordValue) {

					//add the name of the current option to the answer choice output array
					quizOptions.push(optionLabel)

					//check which item had the lowest value
					if(compareValue < recordValue || recordValue === null) {

						//update lowest value record
						recordValue = compareValue

						//set record holder as correct answer
						correctAnswer = quizOptions.length - 1
					}
				}
			}

		break
	}

	//update output object with the answer and option array
	currentQuestion.options = quizOptions
	currentQuestion.answer = correctAnswer

	//add the question object to the output question set array
	questionSets.push(currentQuestion)
}

console.log(questionSets)
