const chefQuestions = [{
    question: 'What is mise-en-place?',
    answers: {
      1: 'A traditional French country dish',
      2: 'The technique of rendering animal fat using low, slow heat',
      3: 'A city in France',
      4: 'A phrase which means “to put everything in its place”',
    },
    correctAnswer: 4,
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
  },
]

function hideStartButton() {
  $('.startBtn').remove();
}

let questionNumber = 0;
let correctNumber =0;

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
  const answersArr = Object.values(questionObject.answers);
  const answers = generateAnswerChoices(answersArr);
  return `
  <p id="score" ><b>Score: ${correctNumber} / 5</b></p>
  <h1 id="question-box-work">${questionObject.question}</h1>
  <form id="myForm" for="submitEnabled" onsubmit="handleQuestionSubmit()">
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
  const createQuestionInDom = generateShowQuestion(chefQuestions[questionNumber]);
  $('.question-box').html(createQuestionInDom);

}

function hideRightOrWrong() {
  $('.title2').remove;
}

function rightOrWrongSubmit(answer) {
  const selectedAns = answer;
  const correctAns = chefQuestions[questionNumber].correctAnswer;
  const correctAnsString = chefQuestions[questionNumber].answers[chefQuestions[questionNumber].correctAnswer];
  if (questionNumber < 4) {
    if (correctAns.toString() === selectedAns) {
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
            <button type="submit" name="Go back" class="submitBtnTwo">Continue</button>
          </form>
        </section>
        `;
    } else {
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
            <button type="submit" name="Go back" class="submitBtnTwo">Continue</button>
          </form>
        </section>
        `;
    } 
  } else { 
    return finalPageResults(selectedAns);
  }

}

function finalPageResults(selectedAns) {
  const correctAns = chefQuestions[questionNumber].correctAnswer;
  const correctAnsString = chefQuestions[questionNumber].answers[chefQuestions[questionNumber].correctAnswer];
    if (correctAns.toString() === selectedAns) {
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

function finalPage() {
  $(document).on('submit', '#myForm3', function(event) {
    event.preventDefault();
    finishQuiz();
  })
}

function finishQuiz() {
  $('.question-box').remove();
  $('.resultTitle').remove();
  $('.resultAns').remove();
  $('#myForm3').hide();
  $('.start-button-container').html(`
      <section>
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
    showQuestion();
    hideStartButton();
    whatNumberQuestion();
  })
}

function runPage() {
  startQuiz();
  finalPage();
}

$(runPage);