/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value
    
    document.getElementById("run").addEventListener("click", function () { 

        let number_string = document.getElementById("number").value;
        let number = parseInt(number_string, 10);
        alert(factoriel(number));
    });

    
    function factoriel(number)
        {    if (number > 1)
            {
                return number * factoriel(number-1);
            }
            else
            {
                return 1 ;
            }
           
        }  
})();
