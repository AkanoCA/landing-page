'use strict';

document.write('<div style="font-size: 30px"> Hello world!</div>');

class Options {
	constructor(height, width, bg, fontSize, textAlign, text) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.text = text;
	}
	createDiv () {
		let newDiv = document.createElement('div');
		document.body.appendChild(newDiv);

		let param = `height:${this.height}px;
					 width:${this.width}px;
					 background:${this.bg};
					 font-size:${this.fontSize}px;
					 text-align:${this.textAlign}`;
		newDiv.style.cssText = param;
		newDiv.textContent = this.text;
	}
}


let block = new Options(120, 300, '#eaeafa', 36, 'center', 'I Like It');

block.createDiv();