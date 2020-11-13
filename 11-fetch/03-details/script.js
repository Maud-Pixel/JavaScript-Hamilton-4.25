/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>
    {
        let hero_id = document.getElementById("hero-id").value;
        let template = document.querySelector("#tpl-hero");
        let place = document.getElementById("target");
        fetch("http://localhost:3000/heroes")
        .then(response => response.json())
        .then(response => {
            response.forEach(item =>{
               
                if (item.id == hero_id)
                {
                    let clone = document.importNode(template.content, true);
                    let name = clone.querySelector("strong");
                    let alter = clone.querySelector("em");
                    let abilities = clone.querySelector(".powers");
                    name.textContent = JSON.stringify(item.name);
                    alter.textContent = JSON.stringify(item.alterEgo);
                    abilities.textContent = JSON.stringify(item.abilities);
                    place.appendChild(clone);
                }
            })

        })
    })
})();
