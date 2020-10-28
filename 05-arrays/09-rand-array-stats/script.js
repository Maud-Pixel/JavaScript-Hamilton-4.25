/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let element = document.querySelectorAll("td");
    let min = document.getElementById("min");
    let max = document.getElementById("max");
    let sum = document.getElementById("sum");
    let average = document.getElementById("average");
    let addition = 0;
    let new_item = 100;
    let big_item = 0;
    let result = 0;
    
    document.getElementById("run").addEventListener("click", function()
    {
        
       
        element.forEach(item =>  
            {
               result = (item.innerHTML = getRandom(100));  
               addition += result;
               sum.innerHTML = addition;
                average.innerHTML = addition/ element.length;
               if (result <= new_item)
               {
                   new_item = result;
                   min.innerHTML = new_item;
                }
                else if (result >= big_item)
                {
                    big_item = result;
                    max.innerHTML = big_item;       
                }

            })
      
        
       
       
        
    })
    function getRandom(max)
    {
        result = Math.floor(Math.random() * Math.floor(max));
        return result
    }  
    
})();
