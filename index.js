// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
    get countSides() {
      return this.sides.length;
    }
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      let validity = true;
      for (let i = 1; i < this.sides.length; i++) {
        if (this.sides[i - 1] == this.sides[i]) {
          validity = true;
        } else {
          validity = false;
        }
      }
      return validity;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      let validity = true;
      for (let i = 1; i < this.sides.length; i++) {
        if (this.sides[i - 1] == this.sides[i]) {
          validity = true;
        } else {
          validity = false;
        }
      }
      return validity;
    }
  
    get area() {
      return this.sides[0] ** 2;
    }
  }