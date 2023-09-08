console.log("oops tasks");


console.log("1)class movie");

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    get Rating(){
        return this.rating;
    }
    set Rating(value){
        if(value==""){
            this.rating = "PG";
        }
        else{
            this.rating = value;
        }
    }
}
function getPG(arr){
    let newArray = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].rating=="PG"){
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}
let movie1 = new Movie("Casino Royale","Eon Productions","PG13");
let movie2 = new Movie("vadachennai","wunderbar fims","A");
let movie3 = new Movie("Good night","sakthi film factory","PG");
let movie4 = new Movie("super deluxe","good films prod","A");
console.log(movie1);//checking constructor object
console.log(movie1.Rating);//checking before setting new value
movie1.Rating = "";//set new value
console.log(movie1.Rating);//checking after new value
let arrayOfMovies = [movie1,movie2,movie3,movie4];
console.log(arrayOfMovies);
getPG(arrayOfMovies);
console.log("----------------------------------------------------------------------------------");

console.log("2)circle class");

class Circle{
    constructor(radius,colour){
        this.radius = radius;
        this.colour = colour;
    }
    get Radius(){
           return this.radius;
    }
    set Radius(value){
           this.radius = value;
    }
    get Colour(){
        return this.colour;
    }
    set Colour(name){
        this.colour = name;
    }
    toString(){
        console.log(`Circle[Radius=${this.radius},colour=${this.colour}]`);
    }
    getArea(){
        let area = Math.PI*this.radius*this.radius;
        console.log(area);
    }
    getCircumference(){
        let circumference = 2*Math.PI*this.radius;
        console.log(circumference);
    }
}
let circlePara = new Circle(1.0,"red");
console.log(circlePara);
console.log(circlePara.Radius);//argumented value
circlePara.Radius = 3;//set new value
console.log(circlePara.Radius);//changed value
console.log(circlePara.Colour);
circlePara.Colour = "yellow";
console.log(circlePara.Colour);
circlePara.toString();
circlePara.getArea();
circlePara.getCircumference();
console.log("----------------------------------------------------------------------------------");

console.log("3)person class");

class Person{
    constructor(name,age,profession,language,hobby){
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.language = language;
        this.hobby = hobby;
    }
}
let details = new Person("hari",21,"student","tamil","films");
console.log(details);
console.log("----------------------------------------------------------------------------------");

console.log("4)uber price");
class uberPrice{
      constructor(distanceInKM,mode){
        this.distance = distanceInKM;
        this.mode = mode;
      }    
      getPrice(){
        if(this.mode=="AC"){
            console.log(`price will be ${this.distance*15}`)
        }
        else if(this.mode=="NON AC"){
            console.log(`price will be ${this.distance*10}`)
        }
      }
}
let uber = new uberPrice(15,"NON AC");
console.log(uber);
uber.getPrice();
