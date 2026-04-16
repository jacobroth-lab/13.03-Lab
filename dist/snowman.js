// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");

   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);
   drawSnowflakes(canvas);
});

function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // Background
   context.fillStyle = "#bbb";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

function drawSnowText(canvas) {
   const ctx = canvas.getContext("2d");

   ctx.font = "80px Verdana";
   ctx.textAlign = "center";
   ctx.textBaseline = "top";
   ctx.fillStyle = "blue";

   ctx.fillText("SNOW", canvas.width / 2, 10);

}

function drawSnowman(canvas) {
   const ctx = canvas.getContext("2d");

   ctx.fillStyle = "white"; 

   // bot
   ctx.beginPath();
   ctx.arc(150, 200, 50, 0, Math.PI * 2);
   ctx.fill();

   //Middle
   ctx.beginPath();
   ctx.arc(150, 120, 40, 0, Math.PI * 2);
   ctx.fill();

   // top
   ctx.beginPath();
   ctx.arc(150, 60, 25, 0, Math.PI * 2);
   ctx.fill();

}

function drawSingleFlake(canvas, x, y) {
   const ctx = canvas.getContext("2d");

   ctx.fillStyle = "#eee";
   ctx.beginPath();

   ctx.moveTo(x, y);
   ctx.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   ctx.lineTo(x, y + flakeSize);
   ctx.lineTo(x - flakeSize / 2, y + flakeSize / 2);
   ctx.fill();
}
