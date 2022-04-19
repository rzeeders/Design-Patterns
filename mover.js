class Mover {
    constructor(x, y) {
        this.position = createVector(x, y);
    }

    update() {
        let x = this.position.x + 1;
        let y = this.position.y + random([-1, 0, 1]);
        this.position = createVector(x, y);
        this.edges();
    }

    edges() {
        if(this.position.x < 0) {
            this.position.x = width;
        } else if(this.position.x > width) {
            this.position.x = 0;
        }
        if(this.position.y < 0) {
            this.position.y = height;
        }
        if(this.position.y > height) {
            this.position.y = 0;
        }
    }

    draw() {
        noFill();
        stroke(0);
        line(this.position.x - 5, this.position.y - 5, this.position.x + 5, this.position.y + 5);
        line(this.position.x + 5, this.position.y - 5, this.position.x - 5, this.position.y + 5);
    }
}

class Circle extends Mover {

    constructor(x, y) {
        super(x, y);
    }

    draw() {
        fill(100, 255, 155);
        stroke(0);
        circle(this.position.x, this.position.y, 50);
    }
}

class Box extends Mover {

    constructor(x, y) {
        super(x, y);
    }
    
    draw() {
        fill(255, 100, 155);
        stroke(0);
        rectMode(CENTER);
        square(this.position.x, this.position.y, 50);
    }
}