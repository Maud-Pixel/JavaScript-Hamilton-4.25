/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    document.getElementById("run").addEventListener("click", ()=>
    {
        let name = document.getElementById("hero-name").value;
        let alterEgo = document.getElementById("hero-alter-ego").value;
        let abilities = document.getElementById("hero-powers").value;
        let array_abilities = []
        array_abilities.push(abilities);
        let result = {name, alterEgo,array_abilities}
        let place = document.getElementById("target");
        fetch("http://localhost:3000/heroes")
        .then(response => response.json())
        .then(response => {
            response.push(result);
            response.forEach(item => console.log(`${item.name} ${item.alterEgo} ${item.array_abilities}`)); 
            })
            
    })
    
})();
