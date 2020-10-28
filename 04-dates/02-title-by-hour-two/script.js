/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let changement = document.getElementsByTagName("p")[1];
    let now = new Date();
    let hour = now.getHours();
    let minut = now.getMinutes();
    
    if (hour == 17)
        {
            if (minut >= 30)
            {
                changement.innerHTML = "Good evening";
            }
            else
            {
                changement.innerHTML = "Hello";
            }
        }
    else if (hour > 17)
    {
        changement.innerHTML = "Good evening";
    }
    else
    {
        changement.innerHTML = "Hello";
    }
    alert(hour);

})();
