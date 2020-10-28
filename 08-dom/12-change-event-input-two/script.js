/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const y = document.getElementById("validity");
    const x = document.getElementById("pass-one");
    

    document.getElementById("pass-one").addEventListener("keyup", function()
    {
        
        const reg = /[a-zA-Z]{8,}/;
        const reg2 = /[0-9]{2,}/;
        const reg3 = /[a-zA-Z]{8,}[0-9]{2,}/;

        if(x.value.match(reg2 && reg))
        {
            console.log("cool");
        }
        else
        {
            console.log("aïe");
        }

    })
    
    
})();
