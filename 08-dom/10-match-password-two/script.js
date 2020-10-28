/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function()
    {
        let pass1 = document.getElementById("pass-one").value;
        let pass1_box = document.getElementById("pass-one");
        let pass2 = document.getElementById("pass-two").value;
        let pass2_box = document.getElementById("pass-two");
        if (pass1 === pass2)
        {
            console.log("ok");
            pass1_box.setAttribute("class", "good");
            pass2_box.setAttribute("class", "good");
        }
        else
        {
            console.log("error");
            pass1_box.setAttribute("class", "error");
            pass2_box.setAttribute("class", "error");
        }
    })

})();
