'use strict';

// document.write('<div style="font-size: 30px"> Hello world!</div>');

// class Options {
// 	constructor(height, width, bg, fontSize, textAlign, text) {
// 		this.height = height;
// 		this.width = width;
// 		this.bg = bg;
// 		this.fontSize = fontSize;
// 		this.textAlign = textAlign;
// 		this.text = text;
// 	}
// 	createDiv () {
// 		let newDiv = document.createElement('div');
// 		document.body.appendChild(newDiv);

// 		let param = `height:${this.height}px;
// 					 width:${this.width}px;
// 					 background:${this.bg};
// 					 font-size:${this.fontSize}px;
// 					 text-align:${this.textAlign}`;
// 		newDiv.style.cssText = param;
// 		newDiv.textContent = this.text;
// 	}
// }


// let block = new Options(120, 300, '#eaeafa', 36, 'center', 'I Like It');

// block.createDiv();


let inputRub = document.querySelector('.rub');
let inputUsd = document.querySelector('.usd');

inputRub.addEventListener('input', function() {
	let request = new XMLHttpRequest();

	// request.open(method, url, async, login, pass);
	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	request.addEventListener('readystatechange', function() {
		if (request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);

			inputUsd.value = (inputRub.value / data.usd).toFixed(2);
		} else {
			inputUsd.value = 'Что-то пошло не так...';
		}
	});

	
})