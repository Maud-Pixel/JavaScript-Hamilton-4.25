/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");


    let new_table = document.createElement("table");
    let content_table = document.createTextNode("tableau 1");
    
    new_table.appendChild(content_table);
    target.appendChild(new_table);
    
    for (let i=0; i < 10; i++)
    {
        let new_row = document.createElement("tr");
        new_row.innerText = "row";
        new_table.appendChild(new_row);
    }
        
    

})();
