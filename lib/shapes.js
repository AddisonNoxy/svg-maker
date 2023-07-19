function Shape() {
    this.width = 200;
    this.height = 250;
    this.stroke = "";
    this.fill = "";
    this.strokeWidth = 5;

    this.setColor = function(color) {
        this.stroke = color;
        this.fill = color;
    }
}

class Triangle extends Shape {
    
}

class Square extends Shape {

}

class Circle extends Shape {

}

var square = new Square();

square.setColor("blue");

console.log(square)

module.exports = Shape;