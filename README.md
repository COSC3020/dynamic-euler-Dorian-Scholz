# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

Answer: The worst case Θ time complexity of the updated algorithm is Θ(n^2). This arises from the nested nature of the operations in the e function, which calls the factorial function during each iteration. The factorial function calculates the factorial of i by performing O(i) operations for the ith term. Since the e function iterates from 0 to n the total work involves summing O(1)+O(2)+O(3)+...+O(n), which equals O(n^2). 
