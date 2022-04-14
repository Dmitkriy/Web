function isPrimeNumber(num)
{
    if (Array.isArray(num)) {
        for(let i = 0; i < num.length; i++) {
            if (Number.isInteger(num[i])) {
                if (num[i] > 3) { 
                    for(let k = 2; k < num[i]; k++) {
                        if(num[i] % k === 0) {
                            prime = false
                            break
                        } else {
                            prime = true
                        }
                    }                          
                    if (prime === false) {
                        console.log(num[i] + " is not prime number")
                    } else {
                        console.log(num[i] + " is prime number")
                    }
                }
                else
                {
                    console.log(num[i] + " is prime number")
                }
            }
            else
            {
                console.log("Error")  
            }
        }
    }
    else if (Number.isInteger(num))
    {
        for(let j = 2; j < num[i]; j++)
            if(num % j === 0)
                return console.log(num + " is not prime number")
        console.log(num + " is prime number")
    }
    else
    {
        console.log("Error")
    }
}