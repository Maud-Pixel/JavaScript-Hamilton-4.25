/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let target = document.getElementById("target");
   let new_span = document.createElement("span");
   let string = "Attention Mesdames et Messieurs !";
   target.insertAdjacentElement('beforeBegin', new_span);
   let i = 0;
   function my_interval()
    {
        let x = string.substring(i++,i);
        new_span.innerHTML += x;
        
       
    }
   let y = setInterval(my_interval, 300);
    
  
   

   
  
})();
