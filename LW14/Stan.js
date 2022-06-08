window.onload = () => {
	const c = document.getElementById("myCanvas");
	const ctx = c.getContext("2d");

	DrawLegs(ctx);
	DrawBody(ctx);
	DrawFace(ctx);
	DrawHands(ctx);
	DrawHat(ctx);
}

function DrawLegs(ctx) {
	//pants
	ctx.beginPath();
	ctx.fillStyle = '#3975c6';
	ctx.fillRect(66, 315, 140, 25);
	//boots
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.fillStyle = 'black';
	ctx.moveTo(53, 341);
	ctx.bezierCurveTo(66, 329, 115, 328, 145, 341);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(132, 341);
	ctx.bezierCurveTo(155, 330, 200, 329, 221, 342);
	ctx.fill();
}

function DrawBody(ctx) {
	//jacket
	ctx.beginPath();
	ctx.fillStyle = '#d36e60';
	ctx.strokeStyle = '#666';
	ctx.fillRect(64, 220, 137, 96);
	ctx.moveTo(64, 220);
	ctx.quadraticCurveTo(17, 310, 64, 296);
	ctx.moveTo(198, 222);
	ctx.bezierCurveTo(215, 240, 250, 340, 200, 294);
	ctx.moveTo(59, 316);
	ctx.quadraticCurveTo(140, 328, 211, 316);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(59, 316);
	ctx.lineTo(211, 316);
	ctx.lineTo(84, 150);
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(73, 264);
	ctx.lineTo(67, 284);
	ctx.moveTo(198, 290);
	ctx.lineTo(194, 268);
	ctx.stroke();	
	ctx.beginPath();
	ctx.moveTo(134, 265);
	ctx.quadraticCurveTo(131, 256, 137, 250);
	ctx.moveTo(65, 227);
	ctx.bezierCurveTo(130, 309, 222, 230, 198, 222);
	ctx.fillStyle = '#ff2042';
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(136, 265);
	ctx.lineTo(133, 323);
	ctx.stroke();	
	ctx.beginPath();
	ctx.arc(127, 270, 2, 0, 2 * Math.PI);
	ctx.arc(125, 290, 2, 0, 2 * Math.PI);
	ctx.arc(123, 310, 2, 0, 2 * Math.PI);
	ctx.fillStyle = 'black';
	ctx.fill()
}

function DrawFace(ctx) {
	//head
	ctx.beginPath();
	ctx.arc(130, 150, 100, 0, 2 * Math.PI);
	ctx.fillStyle = '#ffebc6';
	ctx.fill();

	//eye1
	ctx.beginPath();
	ctx.ellipse(105, 160, 28, 25, 2*Math.PI / 3, 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.strokeStyle = 'white';
	ctx.fill();
	ctx.stroke();
	//eye2
	ctx.beginPath();
	ctx.ellipse(158, 160, 28, 25, Math.PI / 3 , 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.stroke();
 	//pupil
	ctx.beginPath();
	ctx.arc(113, 160, 4, 0, 2 * Math.PI);
	ctx.arc(148, 160, 4, 0, 2 * Math.PI);
	ctx.fillStyle = 'black';
	ctx.strokeStyle = 'black';
	ctx.fill();

	//mouth
	ctx.beginPath();
	ctx.moveTo(107, 213);
	ctx.lineTo(163, 213); 
	ctx.lineTo(136, 231);
	ctx.closePath();
	ctx.fill();

	//teeth
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.moveTo(113, 214)
	ctx.bezierCurveTo(119, 225, 148, 225, 160, 214)
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(125, 214);
	ctx.lineTo(124, 222);
	ctx.moveTo(137, 214);
	ctx.lineTo(138, 222);
	ctx.moveTo(150, 214);
	ctx.lineTo(147, 222)
	ctx.stroke();
}

function DrawHat(ctx) {
	//hat
	ctx.beginPath();
	ctx.arc(130, 150, 100, -0.388, 3.4, true);
	ctx.fillStyle = "#3c72c3";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(27, 143);
	ctx.lineTo(26, 123);
	ctx.lineTo(130, 116);
	ctx.moveTo(234, 137);
	ctx.lineTo(234, 113);
	ctx.lineTo(130, 116);
	ctx.fillStyle = '#ff2042';
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(27, 123);
	ctx.quadraticCurveTo(130, 84, 234, 113);
	ctx.moveTo(90, 125);
	ctx.quadraticCurveTo(125, 100, 180, 125);
	ctx.fill();

	ctx.beginPath();
	ctx.rect(108, 45, 40, 5);
	ctx.rotate(30 * Math.PI / 180);
	ctx.rect(115, -25, 40, 5);
	ctx.rotate(-30 * Math.PI / 180);
	ctx.rotate(60 * Math.PI / 180);
	ctx.rect(86, -89, 40, 5);
	ctx.rotate(-60 * Math.PI / 180);
	ctx.rotate(90 * Math.PI / 180);
	ctx.rect(29, -131, 40, 5);
	ctx.rotate(-90 * Math.PI / 180);
	ctx.rotate(-30 * Math.PI / 180);
	ctx.rect(67, 103, 40, 5);
	ctx.rotate(30 * Math.PI / 180);
	ctx.rotate(-60 * Math.PI / 180);
	ctx.rect(2, 133, 40, 5);
	ctx.rotate(60 * Math.PI / 180);
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 0.2;
	ctx.fillStyle = 'red';
	ctx.fill();
	ctx.stroke();

	//eyebrows
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 3;
	ctx.moveTo(65, 136);
	ctx.lineTo(85, 118);
	ctx.moveTo(168, 113);
	ctx.lineTo(192, 130);
	ctx.stroke();
}

function DrawHands(ctx) {
	//gloves
	ctx.beginPath();
	ctx.fillStyle = '#ff2042';
	ctx.arc(51, 294, 15, 0, 2 * Math.PI);
	ctx.arc(213, 299, 15, 0, 2 * Math.PI);
	ctx.fill();

	ctx.beginPath();
	ctx.strokeStyle = '#666';
	ctx.arc(64, 290, 6, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(200, 294, 6, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();

}	