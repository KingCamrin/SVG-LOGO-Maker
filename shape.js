const { Circle, Square, Triangle } = require('./lib/shape');

describe('Circle', () => {
    test("circle should be a purple circle", () => {
        const testCirle = `<circle cx="150" cy="100" r="80" fill="green" />`;
        const circle = new Circle();
        circle.setColor('green');
        const actualCircle = circle.render();
        expect(actualCircle).toEqual(testCirle);
    })
    });

describe('Square', () => {
    test("square should be a red square", () => {
        const testSquare = `<rect x="90" y="40" width="130" height="110" fill="yellow" />`;
        const square = new Square();
        square.setColor('yellow');
        const actualSquare = square.render();
        expect(actualSquare).toEqual(testSquare);
    })
    });

describe('Triangle', () => {
    test("triangle should be a green triangle", () => {
        const testTriangle = `<polygon points="150,18 244,182 56,182" fill="purple" />`;
        const triangle = new Triangle();
        triangle.setColor('purple');
        const actualTriangle = triangle.render();
        expect(actualTriangle).toEqual(testTriangle);
    })
    });
