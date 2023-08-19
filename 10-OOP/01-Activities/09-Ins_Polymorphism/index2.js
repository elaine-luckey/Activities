

// Polymorphism

//parent class / contructor function
function Shape (area) {
    this.area = area,
    this.draw = function () {
        console.log(`I take up ${this.area} space`);
    }
}


function Circle (radius, area) {
    Shape.call(this, area);
    this.radius = radius;

    this.draw = function () {
        console.log(`My kind is Circle and I take up ${this.area}`)
    }
}


function Square (length, area) {
    Shape.call(this, area);
    this.length = length;
}

const sq1 = new Square(3, 10);

sq1.draw();