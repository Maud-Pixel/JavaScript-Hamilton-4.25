/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let i = 0;
    let surprise = Math.floor(Math.random() * (101-1) + 1);
    let target = document.getElementById("target");
    

    console.log(surprise);
        do {
            
            let answer = prompt("Guess a number between 1 and 100");
                answer_number = parseInt(answer);
                console.log(answer_number);
            
            
            if( answer_number == surprise && i < 2)
            { alert("That it");
              break;}

            else if (answer_number < surprise && i < 2)
            {  console.log("lower");
                alert ("lower");
                }
            else if (answer_number > surprise && i < 2)
            {  console.log("higher")
               alert("higher");
                }
            else
            { alert("you needed 3 guesses");}
            
            i++;
        }  
         while ( i <=2 )

   
    

    
 
})();

