function checkPrimeNumber(num) 
{
    if(!Number.isInteger(num)) 
    {
        return undefined;
    }
    if (num < 2) 
    {
        return false;
    }
    for (let i=2; i < num; i++) 
    {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function isPrimeNumber(num)
{
    if (Array.isArray(num)) 
    {
        for (let i = 0; i < num.length; i++)
        {
            isPrimeNumber(num[i]);
        }
        return;
    }
    let isPrime = checkPrimeNumber(num);
    if (isPrime === undefined)
    {
        console.log("Error");
        return;
    }
    if (isPrime)
    {
        console.log(num + " is a prime number");
    }
    else
    {
        console.log(num + " is not a prime number")
    }
}