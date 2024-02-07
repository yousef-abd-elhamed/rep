/*let arr[1,2,3,4,5]
function summtion(){
    
}


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}

let yousef=new Person("yousef",21);
console.log(yousef);

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    getfullyear(){
        console.log(this.age);
    }
}

let yousef=new Person("ali",21);
console.log(Person.age)
*/
class Foursideshape {
    constructor(side1,side2,side3,side4){
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
        this.side4=side4;
        
    }
    permiter(){return(this.side1+this.side2+this.side3+this.side4)};
}
// let x=new Foursideshape(1,2,3,4)
// console.log(x.permiter());

class Triange extends Foursideshape{
area(){
    return(.5*this.side2*this.side1);
}
}


let t = new Triange(2,3,4,0);
console.log(t.area());
























