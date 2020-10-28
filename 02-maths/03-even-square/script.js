/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
       let sentence = "";
       let num = 0;
        for (let i = 0; i <= 21; i++)
        {
            result = Math.pow(num,2);
            sentence = sentence + String(result) + ", ";
            num++;
            
        }
        alert(sentence);
        
        
        
        

    });

})();
