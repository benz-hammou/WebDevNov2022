// Exercise
// 1. Use querySelectorAll to select all the keys elements
// 2. Use querySelectorAll to select all the audio elements
// 3. Create keydown event listener on document to log the key value of the key that was pressed. (e.key) and add a class of playing to the key element that was pressed

// 4. Create a function that takes a key value as an argument (data-key="75")
// 5. Loop through the audio elements and play the audio element that has the same data-key as the key value passed to the function
// 6. Create switch statement that calls the function with the correct key value for each key
// 7. Test it out!

const keysEl = document.querySelectorAll('.key')
const audioEl = document.querySelectorAll('audio')

console.log(keysEl);


const playAudio = key => {
    
}

document.addEventListener('keydown', function (e) {
    console.log(e.key);
    playAudio(e.key)
})

/*
A - 65
S - 83
D - 68
F - 70
G - 71
H - 72
J - 73
K - 75
L - 76
*/

function GetRightCode(key){
    console.log(key)
    // console.log(document.querySelector(`audio[data-key="${key}"]`))
}

/* var input = 'S' // e.key with keydown or keyup or keypress

switch(input){
    case 'A':
        GetRightCode(65)
    break;
    case 'S':
        GetRightCode(83)
    break;
    case 'D':
        GetRightCode(68)
    break;
    case 'A':
        GetRightCode(65)
    break;
    case 'A':
        GetRightCode(65)
    break;
} */

