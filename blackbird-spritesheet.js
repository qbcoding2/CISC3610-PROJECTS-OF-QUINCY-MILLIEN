"use strict";

var Scene = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined,
};

var counterStart = 0;
var counterStop = 0;

Scene.start = function() {
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");

    Scene.sprite = blackbird;

    Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;

    Scene.sprite.img.onload = function() {
        Scene.sprite.offset = Scene.canvas.width;
        Scene.mainLoop();
    }
};

document.addEventListener('DOMContentLoaded', Scene.start);


Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();

    window.setTimeout(Scene.mainLoop, 1000 / 16);
};

Scene.update = function () {
  	Scene.canvas.width = window.innerWidth;

  	Scene.sprite.offset -= 24;
	if(Scene.sprite.offset < -Scene.sprite.frames[Scene.sprite.frame].frame.w)
 		Scene.sprite.offset=Scene.canvas.width;
};

Scene.draw = function () {    
	Scene.canvasContext.drawImage(
        Scene.sprite.img,
        Scene.sprite.frames[Scene.sprite.frame].frame.x, 
        Scene.sprite.frames[Scene.sprite.frame].frame.y, 
        Scene.sprite.frames[Scene.sprite.frame].frame.w, 
        Scene.sprite.frames[Scene.sprite.frame].frame.h, 
        Scene.sprite.offset,                            
        15,                                              
        Scene.sprite.frames[Scene.sprite.frame].frame.w - 70, 
        Scene.sprite.frames[Scene.sprite.frame].frame.h - 80 
    ); Scene.sprite.frame++;

	if(Scene.sprite.frame==Scene.sprite.frames.length)
		Scene.sprite.frame=0;

    counterStart++;

    while (counterStart > 300 || counterStop < 300) {
        counterStart = 0;
        Scene.canvasContext.clearRect(0, 200, Scene.canvas.width, Scene.canvas.height);
        Scene.canvasContext.font = "35px Arial";
        
        // edit this
        Scene.canvasContext.fillText("It's so hot!", 305, 240);    
        Scene.canvasContext.fillText("Hi Birdie!", 735, 245);

        counterStop++;
    }
    counterStop = 0;
    
};