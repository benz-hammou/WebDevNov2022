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



function PrintName(name){
    let fullname = name
    console.log(fullname)
}

PrintName('Nina')


function GetSumOfNumbers(n1,n2){
    var result = n1+n2;
    console.log(`Sum of these 2 number is ${result}`)
}

GetSumOfNumbers(5)

// function ServeNumber1(){
//     return 1
// }

// function ServeNumber2(){
//     return 3
// }

// const result = ServeNumber1() + ServeNumber2()
// console.log(result)

// return

function NettoSalaryCalculator(bruto,tax){
    const taxAmount = (bruto/100)*tax;
    return bruto-taxAmount // netto amount
    console.log(bruto-taxAmount,"asdasdasdasd")
    console.log('hello world')
}

// const nettoResult = NettoSalaryCalculator(3000,40)
// console.log(nettoResult)

// function ThirdFunction(age){
//     return age
// }

// function SecondFunction(FunctionValue){
//     return `Age is ${FunctionValue} returned by SecondFunction`
// }

// function ParentFunction(age){
//     return SecondFunction(ThirdFunction(30))
// }

// console.log(ParentFunction(30))



function getSumOfNumbers(n1, n2) {
    var result = n1+n2
    console.log(`The result is ${result}`);
}
getSumOfNumbers(2,2)