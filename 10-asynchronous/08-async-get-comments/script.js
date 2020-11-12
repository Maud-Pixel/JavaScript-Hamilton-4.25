/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   document.getElementById("run").addEventListener("click", async function exercise()
   {
       let promise1 = await window.lib.getPosts()
       
      promise1.forEach(item =>
       {
           
           async function test(){
           let promise2 = await window.lib.getComments(item.id);
           item["commentaire"] = promise2[item.id];
           };
           test();
           
       })
       console.log(promise1);
    });

  
})();
