/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  result = [];
  let new_x = 0;
  let target = document.getElementById("target");
  

  document.getElementById("increment").addEventListener("click", function()
  {
    new_x +=1;
    target.innerHTML = new_x;
    result.push(new_x);
    console.log(result);
    localStorage.setItem("incrementation", result);
  })

  window.addEventListener("load", function(){
    x = localStorage.getItem("incrementation");
    target.innerHTML= (x[x.length-1])
    
  })
})();
