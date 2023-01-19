// Exercises combine string and array methods
// to solve puzzles.

// 1. write a function that changes letters to utf-16
// Atilla example

/* let letters = "abcdefghijklmnopqrstuvwxyz";
// .charCodeAt() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
function ConvertLettersToUtf16(str){ // 
    // convert str data to arraylist
    let arr = str.split("") // string method
    const encoded= []
    // loop the array forEach() // array method
    arr.forEach(function(letter){
        encoded.push(letter.charCodeAt())
    })
    return encoded
}
console.log(ConvertLettersToUtf16(letters)); */


// 2. write a function that converts utf-16 to letters
let msg = [
  70, 111, 108, 108, 111, 119, 32, 116, 104, 101, 32, 119, 104, 105, 116, 101,
  32, 114, 97, 98, 98, 105, 116, 46,
];

msg.forEach(function (value) {
  return console.log(String.fromCharCode(value));
});

// 3. write a function that adds a student to the students array and displays the students array
/* const newStudent = {
  full_name: "John Doe",
  age: 20,
  email: "johndoe@microsoft.com",
  phone: "123-456-7890",
  address: "123 Main St.",
};
let students = [];

function addStudent(arr) {
  students.push(arr);
  return students
}

let result = addStudent(newStudent)
console.log(result);
console.log(students);
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

/* function ClickHandler(){
  var arrayNames = names.replace(/,/g, "").split(' ')
  const output = document.getElementById('output')
    output.innerHTML=""
    alert("The list comming")
    arrayNames.forEach(function(name){
        output.innerHTML+=`<li>${name}</li>`
    })
} */