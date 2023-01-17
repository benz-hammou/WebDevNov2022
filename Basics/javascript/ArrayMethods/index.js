var students = ["Ara", "Bilal", "Mohammed", "Ahmad", "Nina", "Prince", "Zana", "Serine", "Axel"]

var result

// toString()
result = students.toString() // string data type

// join() => return string 
result = students.join("-")

// push() => Add new value into array
students.push('John') // string data type
students.push(true) // boelean
students.push(20) // Number
students.push({
    id: 1,
    name:"jimmy"
})

// pop() => remove an item from array list 
students.pop()

// shift() => remove first  value/item from array list
students.shift()

// unshift() =>
students.unshift("Ara") // insert value at begining of array/// => first item

//update array list item
students[0] = 'Arhisa'

// length - size of arraylist
result = students.length
delete students[9]
result = students

// concat()
var n1=[1,2,3]
var n2=[4,5,6]
console.log(n1.concat(n2));

// splice()
// students.splice(8,4,"new student name")
students.push('John Doe')
// students.splice(6,students.length-6,"new student name")
// students.splice(6,students.length-6,"new student name")
result = students

// slice()
let newArrayList = students.slice(0,3)
result = newArrayList

// reverse()
result = newArrayList.reverse()

// sort()
result = students.sort()
var numbers = [4,450,0,36,6,7,98,563]
result = numbers.sort(function(x,y){
    return x-y
})

// forEach method
students.forEach(function(value, index){
    console.log(`ID: ${index}\nValue: ${value}`);
});


console.log(`Result is\n${result}\ntypeof data is ${typeof result}`);

