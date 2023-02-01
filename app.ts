var num1Element = document.getElementById('num1') as HTMLInputElement;
var num2Element = document.getElementById('num2') as HTMLInputElement;
var buttonElement = document.querySelector('button')!;

type NumOrString = number | string;
type Result = {val: number; timestamp: Date}

interface ResultObj {

    val: number;
    timestamp: Date;

}

const numResults: number[] = [];
const textResults: string[] = [];

function add(num1: NumOrString , num2: NumOrString){

    if(typeof num1 === 'number' && typeof num2 ==='number') {
        return num1 + num2;
    }
    else if(typeof num1 ==='string' && typeof num2 ==='string'){
            return num1 + ' ' + num2;
        }
    return +num1 + +num2;

}

function printResults(resultObj: ResultObj){
    console.log(resultObj.val);
}



    buttonElement.addEventListener('click', function () {
        var num1 = num1Element.value;
        var num2 = num2Element.value;
        var result = add(+num1, +num2);
        numResults.push(result as number);
        var stringResult = add(num1, num2);
        textResults.push(stringResult as string);
        printResults({val: result as number, timestamp: new Date()});
        console.log(numResults, textResults);
    })



