const { Square, Triangle, Circle } = require('./shapes.js');

describe("Triangle", () => {
    it('should render the correct dimensions', () => {
        const triangle = new Triangle(100, 100, "white");
        triangle.setColor("blue");
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
    });
})

// describe("Triangle", () => {
//     it('should give the right fill context', () => {
//         const triangle = new Triangle(100, 100, "white");
//         expect(triangle.drawSet).toEqual('polygon points="150, 18 244, 182 56, 182"');
//     })
// })

describe("Square", () => {
    it("should render the correct dimensions", () => {
        const square = new Square();
        square.setColor("green");
        expect(square.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="green"/>`);
    });
})

describe("Circle", () => {
    it("should render the correct dimensions", () => {
        const circle = new Circle();
        circle.setColor("red");
        expect(circle.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="red"/>`);
    });
})

// const triangle = new Triangle();
// triangle.setColor("blue");
// expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);

