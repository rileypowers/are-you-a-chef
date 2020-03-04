const chefQuestions = [{
    question: 'What is mise-en-place?',
    answers: {
      A: 'A traditional French country dish',
      B: 'The technique of rendering animal fat using low, slow heat',
      C: 'A city in France',
      D: 'A phrase which means “to put everything in its place”'
    },
    CORRECT: 'Mise-en-place is a French term. Directly translated, it means “to put everything in its place”, and it is implemented by preparing all ingredients before one begins cooking: veg chopped, items that need to be brought to room temp done thusly, all ingredients measured and laid out.',
    INCORRECT: 'It is not *autopopulate with wrong answer that was clicked*. Keep going!'
  },

  {
    question: 'What is another term for a sourdough starter?',
    answers: {
      A: 'Bark',
      B: 'Sponge',
      C: 'Colony',
      D: 'Fougasse',
    },
    CORRECT: 'Back when we were still colonizing the US, settlers would carry around sourdough starter that could last their lifetime. The common term for this then was a “sponge.” Good job.',
    INCORRECT: 'It is not called *autopopulate with wrong answer that was clicked*. Better luck next time!',
  },

  {
    question: 'Which of these is not a pasta shape?',
    answers: {
      A: 'Bucatini',
      B: 'Culurgiones',
      C: 'Bisollini',
      D: 'Ditalini',
    },
    CORRECT: 'Bucatini is like thick spaghetti with a hole in the center to trap sauce. Culurgiones is a pleated dumpling-like pasta typically filled with potato and mint. Ditalini is tiny star-shaed pasta usually used for soup. Bisollini is a made up word.',
    INCORRECT: 'It is not *autopopulate with wrong answer that was clicked*. Keep going.',
  },

  {
    question: 'Which oil should not be used for deep frying?',
    answers: {
      A: 'Olive Oil',
      B: 'Canola Oil',
      C: 'Peanut Oil',
      D: 'Avocado Oil',
    },
    CORRECT: 'Olive oil has a much lower smoke point than the other oils listed. It has small organic material that lend taste, but will burn and turn bitter and the temps required for deep frying.',
    INCORRECT: '*autopopulate with wrong answer that was clicked* is fine for deep frying. Try the final question next.',
  },

  {
    question: 'What is Adobo?',
    answers: {
      A: 'A traditional Philippine dish',
      B: 'A Spanish sauce ',
      C: 'A Caribbean seasoning',
      D: 'All of the above',
    },
    CORRECT: 'Adobo is a term that transcends cultures. In Filipino culture, it is a cooking technique and therefor the name of a dish. It is also a Spanish sauce you may have seen at the grocery store, canned with chilis. In the Caribbean, adobo is a seasoning of mostly salt, garlic podwer, and MSG.',
    INCORRECT: 'You are not wrong, but the correct answer is all of the above. This term transcends cultures.',
  },
]

// function cheffyQuestions() {
//   var copy = {};
//   for (if i=0; i <= 1; i++) {
//   //  if (obj.hasOwnProperty(attr)) {
//   //    copy[attr] = obj[attr];
//   //  }
//   }
//   return copy;
// }


//j-page2: In title, populate question # with whatever # question the user is on (out of 5)
function numberQuestion() {
  console.log('`numberQuestion` ran');

}

//in answers placeholder, populate with questions. 
//******ONE* */
// function showQuestion(){
//   console.log('`showQuestion` ran');
//     const createQuestionInDom = `<p>${chefQuestions[2]}</p>`;
//    // insert that HTML into the DOM
//    $('.js-answers').html(createQuestionInDom);
// }
//******ENDONE */

//----

//******TWO */
// function generateItemElement(item, itemIndex, template) {
// return `
// <li>${item.name}</li>`;
// }

// function generateShowQuestion(questionList) {
//   console.log("Generating shopping list element");
//   const items = questionList.map((item, index) => generateItemElement(item, index));

//   return items.join("");
// }

// function showQuestion() {
//   // render one question to the dom
//   console.log('`showQuestion` ran');
//   const createQuestionInDom = generateShowQuestion(chefQuestions);

//   // insert that HTML into the DOM
//   $('.js-answers').html(createQuestionInDom);
// }


// //put a function on submit button, where if correct answer is selected before submit, which takes user to k-rightanswer.html.
// //if incorrect answer is submitted, submit will take user to l-wronganswer.html.
// function rightOrWrongSubmit() {
//   console.log('`rightOrWrongSubmit` ran');
// }
//******ENDTWO */

function justShowQuestion() {
console.log(chefQuestions[questionNumber])
}

function hideStartButton() {
  $('.startBtn').replaceWith(
    `<label for="submit-answer"></label>
    <input class="submitBtn" type="submit">   
    `);
}

let questionNumber = 0;
//j-page2: In title, populate question # with whatever # question the user is on (out of 5)
function numberQuestion() {
  console.log('`numberQuestion` ran');
}


function generateAnswerChoices(answerArray) {
  let answerHtml = '';
  answerArray.forEach((answer, i) => {
    answerHtml += `
    <label for="example">${answer}</label>
    <input id="${'answer-' + i}" type="radio" />
    `;
  })
  return answerHtml;
  $(``)
}

function generateShowQuestion(question) {
  console.log('question', question)
  const answersArr = Object.values(question.answers);
  const answers = generateAnswerChoices(answersArr);
  const godQuestions = justShowQuestion();
  // console.log(answersArr)
  // return answers.join("");
  return `
  ${godQuestions}
  <form>
  <fieldset>
  ${answers}
    <input type="submit" value="Submit Answer"/>
  </fieldset>
</form>
  `
}

function showQuestion() {
  // render one question to the dom
  console.log('`showQuestion` ran');
  const createQuestionInDom = generateShowQuestion(chefQuestions[questionNumber]);
  // insert that HTML into the DOM
  $('.question-box').html(createQuestionInDom);
}

//hide "finish quiz" option until user is on question 5.
function rightOrWrongSubmit() {
  console.log('`rightOrWrongSubmit` ran')
}

function deletus() {
  console.log('`deletus` ran')
  if (questionNumber <= 4) {
    // $('.next-question-container').removeClass('.btn4');
    $('.next-question-container').html(`
    <a id="newBtn4" href="m-finalpage.html">Finish quiz</a>`);
  }
}
//     if (questionNumber <= 4) {
//       $('.next-question-container').removeClass('btn4');
//     }

//create a function that shows questions in the dom when .startBtn is clicked, hides the button pushed, and puts a new button in its place.
function startQuiz() {
  $('.startBtn').click(function () {
    console.log('hi')

    showQuestion();
    hideStartButton()

  })
}

//k-rightanswer: on back button, make function that takes user back to the j-page2.html, but populates the answers placeholder with 
//the next question, not the one they were on previously.
function backToNextQuestion() {
  console.log('`backToNextQuestion` ran');
}

//l-wronganswer: on back button, make function that takes user back to the j-page2.html, but populates the answers placeholder with 
//the next question, not the one they were on previously.
// function showRightOrWrong() {
//   $('.submitBtn').click(function() {
//     if 
//     //correct answer is selected, insert html (.html maybe?) that shows right answer splash
//     else
//     //insert html for wrong answer splash
//   })
//   questionNumber++;
// }

//m-finalpage: In title, populate a number between "scored" and "out" with the number of correct clicks the user had. 
//in blurb, populate a different result based on the number of correct answers. There are 5 different outcomes, and should be tied to 
//the # value in this page.



function runPage() {
  numberQuestion();
  // showQuestion();
  startQuiz();
  deletus();
  rightOrWrongSubmit();
  backToNextQuestion();
}

$(runPage);

// $(showQuestion);