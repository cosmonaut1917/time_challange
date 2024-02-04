var score = localStorage.getItem('score');
var initals = document.getElementById('initials');
var btn = document.querySelector('.btn')
var leaderboard = JSON.parse (localStorage.getItem('leaderboard')) || [];


btn.addEventListener('click',function () {
    

   var player = initals.value
   var obj = {player,score}
    console.log(obj)
    leaderboard.push(obj)
    localStorage.setItem('leaderboard',JSON.stringify(leaderboard));
})