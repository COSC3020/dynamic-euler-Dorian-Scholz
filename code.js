function e(n) 
    
{
    let result = 0;       
    let factorial = 1;    
    for (let i = 0; i <= n; i++)
    {
        if (i > 0) 
        {
            factorial *= i;  
        }
        result += 1.0 / factorial; 
    }

    return result;
}


console.log(e(10)); 
