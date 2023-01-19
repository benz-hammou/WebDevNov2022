// 1. write a function that changes letters to utf-16
// 2. write a function that converts utf-16 to letters

let letters = "abcdefghijklmnopqrstuvwxyz";
let msg = [
  70, 111, 108, 108, 111, 119, 32, 116, 104, 101, 32, 119, 104, 105, 116, 101,
  32, 114, 97, 98, 98, 105, 116, 46,
];

msg.forEach(function (value) {
  return console.log(String.fromCharCode(value));
});

// 3. write a function that adds a student to the students array and displays the students array
const newStudent = {
  full_name: "John Doe",
  age: 20,
  email: "johndoe@microsoft.com",
  phone: "123-456-7890",
  address: "123 Main St.",
};
let students = [];

students.push(newStudent);
// Or
function addStudent() {
  return students.push(newStudent);
}
/* console.log(students);
console.log(addStudent());  */

// 4. write a function that encode a string to base64
// what is base64? and what method do you use to encode a string to base64 in javascript?
// https://developer.mozilla.org/en-US/docs/Web/API/atob => Read this
// https://www.base64encode.org/

/* function stringToBase64(){
    var str = "mohamed"
    return ubtoa(str);
}
console.log(stringToBase64()); */

//

// 5. 3 functions that convert a string to an array, sort the array and display the array in the <ul id="result"></ul> element when the button is clicked
//DisplayArray(SortArray(ConvertStringToArray(names)))

let names = "john, peter, mary, susan, john, mary";
var arrayNames = names.replace(/,/g, "").split(' ')

const btn = document.getElementById('btn')
const output = document.getElementById('output')

function ClickHandler(){
    output.innerHTML=""
    //alert(1)
    arrayNames.forEach(function(name){
        output.innerHTML+=`<li>${name}</li>`
    })
}