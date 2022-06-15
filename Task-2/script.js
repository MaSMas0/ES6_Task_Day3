

class Shape {
    constructor(l) {


            this.length = l;

    }

    print() {
        console.log(this.length);
    }
    calcArea(){
            return  this.length * this.length;
    }
    calcPerimeter(){
        return  (this.length + this.length) * 2;

}
    toString(){
        return `the width of the created ${this.name} is ${this.length} , its height is ${this.length} , its perimeter is ${this.calcPerimeter()} and its area is ${this.calcArea()}`
}
}

class Rectangle extends Shape{
    constructor(w,h){
        super(h);
        this.name = "rectangle"
        this.width = w  
    }
    print(){
       // super.print = 5;
        console.log("Rectangle");
    }
    calcArea(){
        return  this.length * this.width;
}
calcPerimeter(){
    return  (this.length + this.width) * 2;

}
toString(){
    return `the width of the created ${this.name} is ${this.length} , its height is ${this.width} , its perimeter is ${this.calcPerimeter()} and its area is ${this.calcArea()}`
}
}

class Square extends Shape{
    constructor(w){
        super(w);
        this.name = "square"

    }
}

class Circle extends Shape{
    constructor(r){
        super(r);
        this.name = "circle"
    }
    calcArea(){
        return  Math.PI * this.length * this.length;
}
calcPerimeter(){
    return  2*Math.PI*this.length;

}
toString(){
    return `the radius of the created ${this.name} is ${this.width} ,its perimeter is ${this.calcPerimeter()} and its area is ${this.calcArea()}`
}
}


export {Rectangle,Square,Circle};