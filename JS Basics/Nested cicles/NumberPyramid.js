function solve(input){

    let number = +input.shift();
    let current = 1;
    let isBigger = false;
    let printLine = ''
    

    for(let rows = 1;rows <= number;rows++){
        
        for(let cols = 1;cols <= rows;cols++){
            if(current > number){
                isBigger = true;
                break;
            }
            printLine += current + ' ';
            current++;
        }
        console.log(printLine);
        printLine = '';
        if(isBigger){
            break;
        }
    }

}
solve(['15'])