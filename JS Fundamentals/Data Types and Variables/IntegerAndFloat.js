function numbersInteger(number1, number2, number3){

    let sum = number1 + number2 + number3;
    if(sum % 1 === 0){
        console.log(`${sum} - Integer`)
    }else{
        console.log(`${sum} - Float`)
    }
}
numbersInteger(100, 200, 303)