function isPrimeNumber(num) 
{
    if(!Number.isInteger(num)) 
    {
        return null;
    }
    if (num < 2) 
    {
        return false;
    }
    for (let i = 2; i < num; i++) 
    {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function checkPrimeNumber(num)
{
    if (Array.isArray(num)) 
    {
        for (let i = 0; i < num.length; i++)
        {
            checkPrimeNumber(num[i]);
        }
        return;
    }
    let isPrime = isPrimeNumber(num);
    if (isPrime === null)
    {
        console.log("Error: " + num + " is not number");
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