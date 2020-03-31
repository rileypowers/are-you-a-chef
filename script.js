const chefQuestions = [{
    question: 'What is mise-en-place?',
    answers: {
      1: 'A traditional French country dish',
      2: 'The technique of rendering animal fat using low, slow heat',
      3: 'A city in France',
      4: 'A phrase which means “to put everything in its place”',
    },
    correctAnswer: 4,
    CORRECT: 'Mise-en-place is a French term. Directly translated, it means “to put everything in its place”, and it is implemented by preparing all ingredients before one begins cooking: veg chopped, items that need to be brought to room temp done thusly, all ingredients measured and laid out.',
    INCORRECT: 'It is not *autopopulate with wrong answer that was clicked*. Keep going!'
  },

  {
    question: 'What is another term for a sourdough starter?',
    answers: {
      1: 'Bark',
      2: 'Sponge',
      3: 'Colony',
      4: 'Fougasse',
    },
    correctAnswer: 2,
    CORRECT: 'Back when we were still colonizing the US, settlers would carry around sourdough starter that could last their lifetime. The common term for this then was a “sponge.” Good job.',
    INCORRECT: 'It is not called *autopopulate with wrong answer that was clicked*. Better luck next time!',
  },

  {
    question: 'Which of these is not a pasta shape?',
    answers: {
      1: 'Bucatini',
      2: 'Culurgiones',
      3: 'Bisollini',
      4: 'Ditalini',
    },
    correctAnswer: 3,
    CORRECT: 'Bucatini is like thick spaghetti with a hole in the center to trap sauce. Culurgiones is a pleated dumpling-like pasta typically filled with potato and mint. Ditalini is tiny star-shaed pasta usually used for soup. Bisollini is a made up word.',
    INCORRECT: 'It is not *autopopulate with wrong answer that was clicked*. Keep going.',
  },

  {
    question: 'Which oil should not be used for deep frying?',
    answers: {
      1: 'Olive Oil',
      2: 'Canola Oil',
      3: 'Peanut Oil',
      4: 'Avocado Oil',
    },
    correctAnswer: 1,
    CORRECT: 'Olive oil has a much lower smoke point than the other oils listed. It has small organic material that lend taste, but will burn and turn bitter and the temps required for deep frying.',
    INCORRECT: '*autopopulate with wrong answer that was clicked* is fine for deep frying. Try the final question next.',
  },

  {
    question: 'What is Adobo?',
    answers: {
      1: 'A traditional Philippine dish',
      2: 'A Spanish sauce ',
      3: 'A Caribbean seasoning',
      4: 'All of the above',
    },
    correctAnswer: 4,
    CORRECT: 'Adobo is a term that transcends cultures. In Filipino culture, it is a cooking technique and therefor the name of a dish. It is also a Spanish sauce you may have seen at the grocery store, canned with chilis. In the Caribbean, adobo is a seasoning of mostly salt, garlic podwer, and MSG.',
    INCORRECT: 'You are not wrong, but the correct answer is all of the above. This term transcends cultures.',
  },
]

function numberQuestion() {
  console.log('`numberQuestion` ran');

}

function hideStartButton() {
  $('.startBtn').remove();
}

let questionNumber = 0;
let correctNumber =0;

function numberQuestion() {
  console.log('`numberQuestion` ran');
}

function generateAnswerChoices(answerArray) {
  let answerHtml = '';
  answerArray.forEach((answer, i) => {
    answerHtml += `
    <input id="${'answer-' + i}" name="selectedButton" onclick="termsChanged(this)" value="${i + 1}" type="radio" />
    <label for="example">${answer} </label> <br />
    `;
  })
  return answerHtml;
}

function generateShowQuestion(questionObject) {
  console.log('question', questionObject)
  const answersArr = Object.values(questionObject.answers);
  const answers = generateAnswerChoices(answersArr);
  return `
  <p>Score: ${correctNumber} / 5</p>
  <h1 id="question-box-work">${questionObject.question}</h1>
  <form id="myForm" onsubmit="handleQuestionSubmit()">
    <fieldset>
      ${answers}
     <input type="submit" disabled class="submitBtn" id="submitEnable"> 
    </fieldset>
  </form>
  `
}

function termsChanged(checkBox){
  if (checkBox.checked) { 
      document.getElementById("submitEnable").disabled = false;
  } else {
      document.getElementById("submitEnable").disabled = true;
  }
}


function handleQuestionSubmit() {
  console.log('handleQuestionSubmit ran')
    event.preventDefault();
    const answer = $('input[name=selectedButton]:checked', '#myForm').val()
    whatNumberQuestion();
    $('.question-box').toggle();
    $('.title').toggle();
    const result = rightOrWrongSubmit(answer);
    displayFeedback(result);
}

function displayFeedback(result) {
  $('.start-button-container').html(result);
}

function showQuestion() {
  console.log('`showQuestion` ran');
  const createQuestionInDom = generateShowQuestion(chefQuestions[questionNumber]);
  $('.question-box').html(createQuestionInDom);

}

function hideRightOrWrong() {
  $('.title2').remove;
}

function rightOrWrongSubmit(answer) {
  console.log('`rightOrWrongSubmit` ran')
  let selectedAns = answer;
  console.log('selected answer: ', selectedAns)
  let correctAns = chefQuestions[questionNumber].correctAnswer;
  let correctAnsString = chefQuestions[questionNumber].answers[chefQuestions[questionNumber].correctAnswer];
  console.log('correct answer: ',correctAns)
  if (questionNumber < 4) {
    if (correctAns.toString() === selectedAns) {
      console.log('correct!')
      correctNumber++;
      return `
        <section class="resultTitle">
          <div>
            <header>
              <h1 class="title2">Correct!</h1>
            </header>
          </div>
        </section> 
        <section class="resultAns">
          <div class="correct-img">
            <img src="https://townsquare.media/site/490/files/2014/01/Guy.jpg?w=980&q=75" alt="Guy Fieri">
            <p class="praise">Good Job!</p>
          </div>
        </section>
        <section>
          <form id="myForm2" onsubmit="backToQuestions()">
            <button type="submit" name="Go back" class="submitBtnTwo">Go back</button>
          </form>
        </section>
        `;
    } else {
      console.log('wrong!')
      return `
        <section class="resultTitle">
          <div>
            <header>
              <h1 class="title2">Incorrect...</h1>
            </header>
          </div>
        </section> 
        <section class="resultAns">
          <div class="correct-img">
            <img src='https://robbreportedit.files.wordpress.com/2018/04/gordon-ramsay-1-e1523056498302.jpg?w=1000&h=563' alt="Gordon Ramsey">
            <p class="disgust">Wrong! The correct answer was: ${correctAnsString} </p>
          </div>
        </section>
        <section>
          <form id="myForm2" onsubmit="backToQuestions()">
            <button type="submit" name="Go back" class="submitBtnTwo">Go back</button>
          </form>
        </section>
        `;
    } 
  } else { 
    console.log('We are on question 5');
    return finalPageResults(selectedAns);
  }

}

function finalPageResults(selectedAns) {
  let correctAns = chefQuestions[questionNumber].correctAnswer;
  let correctAnsString = chefQuestions[questionNumber].answers[chefQuestions[questionNumber].correctAnswer];
    if (correctAns.toString() === selectedAns) {
      console.log('correct!')
      correctNumber++;
      return `
        <section class="resultTitle">
          <div>
            <header>
              <h1 class="title2">Correct!</h1>
            </header>
          </div>
        </section> 
        <section class="resultAns">
          <div class="correct-img">
            <img src="https://townsquare.media/site/490/files/2014/01/Guy.jpg?w=980&q=75" alt="Guy Fieri">
            <p class="praise">Good Job!</p>
          </div>
        </section>
        <section>
          <form id="myForm3">
            <button type="submit" name="Finish quiz" class="submitBtnTwo">Finish quiz</button>
          </form>
        </section>
        `;
    } else {
      console.log('wrong!')
      return `
        <section class="resultTitle">
          <div>
            <header>
              <h1 class="title2">Incorrect...</h1>
            </header>
          </div>
        </section> 
        <section class="resultAns">
          <div class="correct-img">
            <img src='https://robbreportedit.files.wordpress.com/2018/04/gordon-ramsay-1-e1523056498302.jpg?w=1000&h=563' alt="Gordon Ramsey">
            <p class="disgust">Wrong! The correct answer was: ${correctAnsString} </p>
          </div>
        </section>
        <section id="finalForm">
          <form id="myForm3">
            <button type="submit" name="Finish quiz" class="submitBtnTwo">Finish quiz</button>
          </form>
        </section>
        `;
    } 
}

function pleaseWork() {
  $(document).on('submit', '#myForm3', function(event) {
    event.preventDefault();
    finishQuiz();
  })
}

function finishQuiz() {
  console.log('we are almost done');
  $('.question-box').remove();
  $('.resultTitle').remove();
  $('.resultAns').remove();
  $('#myForm3').hide();
  $('.start-button-container').html(`
      <section class="TEST">
        <div class="title3">
          <h1>You scored ${correctNumber} out of 5 correct</h2>
        </div>
      </section>
      <section class="question-box">
        <div class="blurb">
          <h2>Congratulations! You've proven your abilities. Go out and cook or try again below.</p>
        </div>
      </section>
      <section>
        <div class ="last-button-container">
          <a class="btn5" href="index.html">Retake</a>
        </div>
      </section>
    `)
}

function backToQuestions() {
  console.log('handleQuestionSubmit ran')
  event.preventDefault();
  questionNumber++;
  $('.resultTitle').remove();
  $('.resultAns').remove();
  $('#myForm2').remove();
  $('.title').toggle();
  $('.question-box').toggle();
  whatNumberQuestion();
  showQuestion();
}

function whatNumberQuestion() {
  $('.my-header.title').remove();
  $('.title').html(`
    <h2 id="questions2">Question ${questionNumber +1} of 5</h2>
  `)
}

function startQuiz() {
  $('.startBtn').click(function () {
    console.log('hi')

    showQuestion();
    hideStartButton();
    whatNumberQuestion();

  })
}

function backToNextQuestion() {
  console.log('`backToNextQuestion` ran');
}

function runPage() {
  numberQuestion();
  startQuiz();
  backToNextQuestion();
  pleaseWork();
}

$(runPage);