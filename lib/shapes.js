class Shape {
    constructor(width, height, fill) {
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.drawSet = ``;
        this.text = ``;
        this.textFill = ``;
    }
    

    setColor(color) {
        this.fill = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(color) {
        this.textFill = color;
    }

    render() {
        return `<${this.drawSet} fill="${this.fill}"/>`;
    }

    fullRender() {
        return `<svg version="1.1" xmlns="https://www.w3.org/2000/svg" width="${this.width}" height="${this.height}"><${this.drawSet} fill="${this.fill}"/><text x="150" y="150" fill="${this.textFill}">${this.text}</text></svg>`;
    }
}

class Square extends Shape {
    constructor(width, height, fill) {
        super(width, height, fill);
        this.drawSet = `rect x="10" y="10" width="200" height="200"`;
    }
}

class Triangle extends Shape {
    constructor(width, height, fill) {
        super(width, height, fill);
        this.drawSet = `polygon points="150, 18 244, 182 56, 182"`;
    }
}

class Circle extends Shape {
    constructor(width, height, fill) {
        super(width, height, fill);
        this.drawSet = `circle cx="150" cy="150" r="100"`;
    }
}

module.exports = {Shape, Square, Triangle, Circle};