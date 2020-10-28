/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function question() {

    let age = prompt("What's your age ?");
    let gender = prompt("What's your gender ?");
    let town = prompt("What's your town ?");
    let confirm= prompt("Enter 'confirm' to confirm your answer");

    if (confirm=="confirm")
    {
        alert("Thank you very much !");
    }
    else
    {
        question();

    }
    // your code here

})();
