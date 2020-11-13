/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let template = document.querySelector("#tpl-hero");
    document.getElementById("run").addEventListener("click", ()=>
    {
        
        fetch( "http://localhost:3000/heroes")
        .then(response => response.json())
        .then(response => 
            { 
                response.forEach(item => {

                    let clone = document.importNode(template.content, true);
                    let name = clone.querySelector("strong");
                    let alter = clone.querySelector("em");
                    let abilities = clone.querySelector(".powers")
                    let place = document.getElementById("target");
                    name.textContent = JSON.stringify(item.name);
                    alter.textContent = JSON.stringify(item.alterEgo);
                    abilities.textContent = JSON.stringify(item.abilities);
                    place.appendChild(clone);
                })
               
            })
        .catch(error => console.log(error))
      
      
    })
})();
