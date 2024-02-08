var intro = document.getElementById('Intro')
var questions = document.getElementById('questions')
var endquiz = document.getElementById('quiz_end')
var startbtn = document.getElementById('start_btn')
var submitbtn = document.getElementById('submit_btn')
var position = 0
var question_2 = document.getElementById('question_2')
var choices = document.getElementById('choices')
var home_BTN = document.getElementById('home_BTN')
var time_limit = 120
var countdown;
var answers = [
    {
        question: 'how do you declare a variable in JS?',
        option: ['a: carible', 'b:var', 'c: car', 'd: you dont'],
        correct_option: 'b:var'
    },
    {
        question: 'Where do you link the JS file?',
        option: ['a:in the HTML file', 'b:in the CSS file', 'c: in the JS file', 'd: all of the above'],
        correct_option: 'a:in the HTML file'
    },
    {
        question: 'A Boolean is used to find a true or false in an expression',
        option: ['true', 'false'],
        correct_option: 'true'
    },
    {
        question: 'How would you make is easier to run the same code over and over?',
        option: ['a:write it out again', 'b: with a switch case', 'c: with a for loop', 'd: with a if else'],
        correct_option: 'c: with a for loop'
    },
    {
        question: 'What is the proper syntax to get an element by its id from HTML',
        option: ['a:all of the above', 'b:Element', 'c:grabElement', 'd:getElementbyId'],
        correct_option: 'd'
    },//used for questions and answers
]



//adds and removes the classlist for the questions
startbtn.addEventListener('click', function () {
    intro.classList.add('hide')
    questions.classList.remove('hide')
    display_quiz()
    timer()
})
//displays the quiz
function display_quiz() {
    question_2.textContent = answers[position].question
    choices.innerHTML = ''
    answers[position].option.forEach(element => {
        var BTN = document.createElement('button')
        BTN.textContent = element
        BTN.onclick = check_answer
        choices.append(BTN)
    });
}
//checks the answer if its correct or not
function check_answer() {
    console.log(this)
    if (this.textContent === answers[position].correct_option) {
        alert('correct!')
    } else {
        time_limit -= 10
        alert('incorrect!')
    }
    position++

    if (position >= answers.length) {
        clearInterval(countdown)
        localStorage.setItem('score',time_limit)
        window.location.href = 'highscore.html'
    }
    else {
        display_quiz()
    }
}
function timer() {
    countdown = setInterval(function () {
        time_limit-- 
        document.getElementById('time_limit').textContent = "Time remaining: " + time_limit
        if (time_limit <= 0) {
            clearInterval(countdown)
            localStorage.setItem('score',time_limit)
            window.location.href = 'highscore.html'
        }
    }, 1000)
}
// function redirectToHomePage() {
//     window.location.href ='highscore.html'
// }
// home_BTN.addEventListener('click', redirectToHomePage, function () {
//     home_BTN.classList.remove('hide')
// })


// todo: 
//
// 
//