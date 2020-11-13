/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
        fetch("http://localhost:3000/heroes")
        .then(response => response.json())
        .then(response => {
            response.forEach(item =>{
               
                if (item.id == hero_id)
                {
                    delete item.id;
                    delete item.name;
                    delete item.alterEgo;
                    delete item.abilities;
                }
            })
            response.forEach(item => console.log(item))
        })
    })
})();
