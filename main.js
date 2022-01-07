var cns = document.getElementById("myCanvas");
var ctx = cns.getContext("2d");
var incolor = "DarkBlue";
//circle 1
ctx.beginPath();
ctx.strokeStyle = incolor;
ctx.lineWidth = 4;
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

//circle 2
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(350, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

//circle 3
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(500, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

//circle 4
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(275, 235, 50, 0, 2 * Math.PI);
ctx.stroke();

//circle 5
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(425, 235, 50, 0, 2 * Math.PI);
ctx.stroke();