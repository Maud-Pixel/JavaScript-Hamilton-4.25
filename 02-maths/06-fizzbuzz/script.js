/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    for(x = 100; x >0; x++)
    {
        if (x%3 === 0 && x%5===0)
        {
            console.log("fizzbuzz");
            
        }
        else if (x%3 === 0)
        {
            console.log("buzzzz");
            
        }
        else if (x%5 === 0)
        {
            console.log("fizzz");  
        }
        else
        {
            console.log("Isn't buzz, isnt' fizz, Isn't Fizzzbuuzz");
        }
    }
})();
