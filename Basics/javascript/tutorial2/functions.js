/* function printMyName() {
    // code here
    console.log('hello function');
} */
function printMyName(name) {
    // function parameter
    console.log(name);
}


printMyName() // call back funtion
printMyName('michael') // call back funtion
printMyName('Ara') // call back funtion

function netoSalary(bruto, tax) {
    var calcul = bruto/100*tax
    var neto = bruto - calcul
    console.log(neto);
}
netoSalary(3000, 40)

function getSumOfNumbers(n1, n2) {
    var result = n1+n2
    console.log(`The result is ${result}`);
}
getSumOfNumbers(2,2)