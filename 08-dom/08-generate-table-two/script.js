/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target")
    let new_table = document.createElement("table");
    

    for(let i=0; i<10; i++)
    {
        let new_row = document.createElement("tr");
        new_row.innerHTML= `By ${i +1} | `;
        target.appendChild(new_row);
        
             for(let j=0; j<10; j++)
           {

                let new_target = document.querySelectorAll("tr");
                let new_column = document.createElement("td");
                new_column.innerHTML = (j+1)*(i+1);
                new_target.forEach(item =>
                    item.appendChild(new_column))   
           }
    }

})();
