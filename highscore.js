var score = localStorage.getItem('score')
var initals = document.getElementById('initials')
var submit = document.querySelector('.submit')
var leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []

submit.addEventListener('click', function () {
    var player = initals.value
    var obj = { player, score }
    leaderboard.push(obj)
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
    var score_display = document.getElementById('score_display');
    score_display.textContent = "Your score: " + obj.score;
    console.log('ping')
})