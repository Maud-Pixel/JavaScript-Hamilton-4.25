/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
        console.log("green");
        pass1_box.style.borderColor = "green";
        pass2_box.style.borderColor = "green";
    }
    else
    {
        console.log("red");
        pass1_box.style.borderColor = "red";
        pass2_box.style.borderColor = "red";
    }
})


})();
