/*
 *   This file contains templates matching objects in solarfacts.js
 *   these are used in quiz.js to generate questions
 *
 * * * */

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