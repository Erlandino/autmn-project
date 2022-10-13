/*
 *   This file takes the object array generated by quiz.js and turns it into HTML
 *
 * * * */

let element = document.getElementById("questionsets")
let outputMarkup = ""

for(let outputIndex = 0; outputIndex < questionSets.length; outputIndex++) {

	outputMarkup += `<fieldset><h3>${questionSets[outputIndex].text}</h3><div class="options">`

	for(outputOptionLabel of questionSets[outputIndex].options) {

		outputMarkup += `<button>${outputOptionLabel}</button>`
	}

	outputMarkup += '</div></fieldset>'
}
console.log(outputMarkup)
element.innerHTML += outputMarkup