function factorial(n)
{
    let result = 1;
    for (let i = 1; i <= n; i++) 
    {
        result *= i;
    }
    return result;
}

function e(n) {
    let result = 0;
    for (let i = 0; i <= n; i++)
    {
        result += 1 / factorial(i); 
    }
    return result;
}


console.log(e(10)); 
