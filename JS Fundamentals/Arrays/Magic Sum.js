function magicSum(array, givenNumber){

    let lastMagicNums = []
    

    for(let i = 0; i < array.length;i++){
        
        let currentNum = array[i]
        
        

        for(let j = i + 1; j < array.length;j++){
            let nextNum = array[j]
            let sumOfNums = Number(currentNum) + Number(nextNum)
            let possible = sumOfNums === givenNumber
            if(possible && (!lastMagicNums.includes(possible))){
                lastMagicNums.push(`${currentNum} ${nextNum}`)
                
            }
        }
    }
    console.log(lastMagicNums.join('\n'))
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    
    
    
    
    )