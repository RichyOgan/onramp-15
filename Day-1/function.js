//You are asked to square every digit of a number and concacenate them
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1
//Note  the function accepts an interger and returns an integer

//convert to string
//look throught the converted string
//square every digit
//concatenate with my final vlue
//convert the string bback to number and return

function sqaureDigits(int){
    let num = int.toString()
    let res = ""
    for (let i = 0; 1 < num.lenght; 1++){
        res += num[i] **2
    }
    console.log(typrof(Number(res)));
    return Number(res)
    
}

console.log( sqaureDigits(9119));