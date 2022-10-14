var fruit = [
    {name: "Strawberry", quantity: 15, color: "red"},
    {name: "Peach", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 25, color: "yellow"},
    {name: "Pear", quantity: 10, color: "green"},
    {name: "Grape", quantity: 20, color: "purple"}
]

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

function draw() {
    let barPosition = 0;  
    let labelPosition = 20;

    // this loop is used to draw out a bar chart showng the quantity in sales corresponding the fruit
    // each bar should to jointed together where the color matches the fruit 
    for (let obj of fruit) {
        drawBarSegement(ctx, obj.name, obj.quantity, obj.color, barPosition, labelPosition);
        barPosition += 75;
        labelPosition += 75;
    } 
}

// with the help of this function it would physically draw the graph (w. the info written as well)
function drawBarSegement(ctx, name, quantity, color, barPosition, labelPosition) {
    ctx.fillStyle = color;
    ctx.fillRect(barPosition, canvas.height - quantity * 15, 75, quantity * 15);

    ctx.font= "bold 11px Times New Roman";
    ctx.fillStyle = "black";
    var line = 7;
    var height = 38;
    ctx.fillText(quantity, labelPosition, height * line);
    line += 0.7;
    ctx.fillText(name, labelPosition - 5, height * line);
}