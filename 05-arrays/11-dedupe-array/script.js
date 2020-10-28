/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

   document.getElementById("run").addEventListener("click", function()
   {
       
       let new_fruits = [];
       let index = 0
       let result = [];
        
       for(let i=0; i<fruits.length; i++)
       {
            for(let j=1; j < fruits.length; j++)
            {
                if (fruits[i] == fruits[j])
                {
                    index == fruits.indexOf(fruits[j]);
                    result[i] = `${fruits.splice(index, 1)}`; 
                    
                }  
            }
       }
           
       console.log(result);
        
        


    })


})();
