const car = {
    color: "black",
    model: "bmw 2012",
    energy: "benzine",
}

car.smart=false
car.energy="diesel"
car.customer=['a','b','c','d']
car.customer[0]='f'

car.showInfo = function(){
    console.log('hello world', this.color="red");
}
car.showInfo()

console.table(car);
console.log(car);



const personalINFO = {
    gender: "x",
    millionaire: false,
    firsName: "Mother",
    lastName: "Fucker",
    email: "dudde@gmail.com",
    media: ["facebook", "tinder", "instagram", "twitter", "tiktok" ],
    school: "Harvard University",
    age: 99,
    show: function() {
        console.log(`gender: ${this.gender="male"} \nemail: ${this.email="moroud@live.ma"} \nage: ${this.age=28}`);
    }
}

console.table(personalINFO);
console.log(personalINFO);
personalINFO.show()
