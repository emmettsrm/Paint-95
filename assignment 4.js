let myCanvas = {};
myCanvas.colors = ["darkred", "firebrick", "tomato", "orangered", "gold", "goldenrod", "orange", "darkorange", "yellowgreen", "olivedrab", "seagreen", "teal", "indigo", "rebeccapurple", "cornflowerblue",  "lightblue", "black", "white"];
myCanvas.selectedColor = "black";
var mousedown = false;

myCanvas.start = function () {
    myCanvas.generateDynamicColors();
    myCanvas.bindColorClick();
};

myCanvas.generateDynamicColors = function(){
    var palette = document.getElementById("palette");
    for (var i = 0; i < myCanvas.colors.length; i++){
        var buttonItem = document.createElement("li");
        var newButton = document.createElement("button");
        newButton.className = "round-button color-button";
        newButton.id = myCanvas.colors[i];
        buttonItem.appendChild(newButton);
        palette.appendChild(buttonItem);
        newButton.addEventListener("click", function(e){
            if (myCanvas.selectedColor !== undefined){
                document.getElementById(myCanvas.selectedColor).classList.remove("selected");
                var clickedColor = e.target;
                myCanvas.selectedColor = clickedColor.id;
                clickedColor.classList.add("selected");
            }    
        });

    }
};

myCanvas.bindColorClick = function(){
    var canvasArea = document.getElementById("canvas");
    canvasArea.addEventListener("mousedown", myCanvas.mouseDown);
    canvasArea.addEventListener("mouseup", myCanvas.mouseUp);
    canvasArea.addEventListener("mouseleave", myCanvas.mouseUp);
    
};

myCanvas.mouseDown = function(){
    var canvas = document.getElementById("canvas");
    mousedown = true;
    canvas.addEventListener("mousemove", myCanvas.drawSomething);
    
};
myCanvas.mouseUp = function(){
    var canvas = document.getElementById("canvas");
    mousedown = false;
};

myCanvas.drawSomething = function(e) {
    var canvas = document.getElementById("canvas");
    canvas.onmousedown
    if (myCanvas.selectedColor != "" && mousedown == true && (document.getElementById('smallbrush').checked === true)){
        var paintbrush = document.createElement("div");
        paintbrush.className = "paintbrush";
        currentColor = myCanvas.selectedColor;
        paintbrush.style.backgroundColor = currentColor;
        canvas.appendChild(paintbrush);
        paintbrush.style.top = e.pageY - this.offsetTop + "px";
        paintbrush.style.left = e.pageX - this.offsetLeft + "px";
        
    }
    if (myCanvas.selectedColor != "" && mousedown == true && (document.getElementById('largebrush').checked === true)){
        var paintbrush = document.createElement("div");
        paintbrush.className = "paintbrush-lg";
        currentColor = myCanvas.selectedColor;
        paintbrush.style.backgroundColor = currentColor;
        canvas.appendChild(paintbrush);
        paintbrush.style.top = e.pageY - this.offsetTop + "px";
        paintbrush.style.left = e.pageX - this.offsetLeft + "px";
    }
};



clearCanvas = function(){
    var canvas = document.getElementById("canvas");
    var masterpiece = canvas.getElementsByClassName('paintbrush');
    while (i = masterpiece.length, i >= 0, i--) {
        canvas.removeChild(masterpiece[i]);
    }
    var widebrush = canvas.getElementsByClassName('paintbrush-lg');
    while (i = widebrush.length, i >= 0, i--) {
        canvas.removeChild(widebrush[i]);
    }
};
var clear = document.getElementById("clear");
clear.addEventListener("click", clearCanvas);

myCanvas.start();