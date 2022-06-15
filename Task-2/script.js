

class Shape {
    constructor(width, height) {


            this.width = width;
            this.height = height;

    }

    print() {
        console.log(this.width, this.height);
    }
    calcArea(){
            return  this.width * this.height;
    }
    calcPerimeter(width,height){
        return  (this.width + this.height) * 2;

}
    toString(){
        return `the width of the created ${this.name} is ${this.width} , its height is ${this.height} , its perimeter is ${this.calcPerimeter()} and its area is ${this.calcArea()}`
}
}

class Rectangle extends Shape{
    constructor(w,h){
        super(w,h);
        this.name = "rectangle"
    }
    print(){
       // super.print = 5;
        console.log("Rectangle");
    }

}

class Square extends Shape{
    constructor(w){
        super(w,w);
        this.name = "square"

    }
}

class Circle extends Shape{
    constructor(r){
        super(r,r);
        this.name = "circle"
    }
    calcArea(){
        return  Math.PI * this.width * this.width;
}
calcPerimeter(){
    return  2*Math.PI*this.width;

}
toString(){
    return `the radius of the created ${this.name} is ${this.width} ,its perimeter is ${this.calcPerimeter()} and its area is ${this.calcArea()}`
}
}


export {Rectangle,Square,Circle};