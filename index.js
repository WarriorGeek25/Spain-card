// Import stylesheets
import './style.css';

// Write Javascript code!

var canvas = document.getElementById('ProgrAmonios');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(55, 10, 650, 150);
ctx.font = "30px Times New Roman";
ctx.strokeText("Hola", 145, 70);
ctx.strokeText("Welcome to Spain", 70, 100);

ctx.beginPath();
ctx.arc(175, 150, 30, 0, 2* Math.PI);
ctx.stroke();
ctx.fillStyle = 'white';
ctx.fill();