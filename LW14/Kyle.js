window.onload = () => {
	const c = document.getElementById("myCanvas");
	const ctx = c.getContext("2d");

	//pants
	ctx.beginPath();
	ctx.fillStyle = '#21837e';
	ctx.fillRect(66, 315, 140, 25);

	//jacket
	ctx.beginPath();
	ctx.fillStyle = '#ff6518';
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

	ctx.moveTo(65, 227);
	ctx.bezierCurveTo(130, 296, 222, 226, 198, 222);
	ctx.fillStyle = '#52c63f';
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.moveTo(136, 257);
	ctx.lineTo(133, 323);
	ctx.stroke();	
	ctx.beginPath();
	ctx.moveTo(93, 267);
	ctx.lineTo(118, 266);
	ctx.lineTo(105, 280);
	ctx.lineTo(93, 267);
	ctx.moveTo(118, 266);
	ctx.lineTo(118, 296);
	ctx.moveTo(118, 296);
	ctx.lineTo(93, 296);
	ctx.moveTo(93, 296);
	ctx.lineTo(93,267);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(152, 267);
	ctx.lineTo(177, 266);
	ctx.lineTo(165, 280);
	ctx.lineTo(153, 267);
	ctx.moveTo(177, 265);
	ctx.lineTo(177, 296);
	ctx.moveTo(177, 296);
	ctx.lineTo(152, 296);
	ctx.moveTo(152, 296);
	ctx.lineTo(152, 267);
	ctx.stroke();


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
	ctx.fill();

	//mouth
	ctx.strokeStyle = 'black';
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

	//hat
	ctx.beginPath();
	ctx.fillStyle = "#4dc439";
	ctx.fillRect(40, 50, 182, 80);
	ctx.beginPath();
	ctx.strokeStyle ="#666"
	ctx.ellipse(30, 150, 45, 20, -Math.PI / 3, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.ellipse(230, 150, 45, 20, Math.PI / 3, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(40, 50);
	ctx.bezierCurveTo(40, 40, 60, 45, 70, 50);
	ctx.moveTo(222, 50);
	ctx.bezierCurveTo(222, 40, 202, 45, 192, 50);
	ctx.fillRect(44, 44, 170, 45);
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "#00ad52";
	ctx.fillRect(49, 87, 160, 43);


	//boots
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.fillStyle = 'black';
	ctx.moveTo(53, 341);
	ctx.bezierCurveTo(66, 333, 115, 332, 160, 341);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(110, 341);
	ctx.bezierCurveTo(155, 333, 186, 332, 221, 342);
	ctx.fill();

	//gloves
	ctx.beginPath();
	ctx.fillStyle = '#52c63f';
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

	//eyebrows
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 3;
	ctx.moveTo(70, 136);
	ctx.lineTo(90, 118);
	ctx.moveTo(163, 113);
	ctx.lineTo(187, 130);
	ctx.stroke();
}	