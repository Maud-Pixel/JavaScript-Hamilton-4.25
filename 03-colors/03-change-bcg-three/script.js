/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        let body = document.getElementsByTagName("body");
        let num_string = "#";
        let numArray = [];
        numArray.length = 6;
        max = 15; 
        min= 1
        for(let i=0 ; i < 6; i++)
        {
            numArray[i]= Math.floor(Math.random()* (max-min+1) + min)
            switch(numArray[i]){
                case 10 : numArray[i] = "A";
                case 11: numArray[i] = "B";
                case 12: numArray[i] = "C";
                case 13: numArray[i] = "D";
                case 14: numArray[i] = "E";
                case 15: numArray[i] = "F";
            }
           
        }
        numArray.forEach(item => num_string = num_string + item);
        alert(num_string);
        document.body.style.backgroundColor = num_string;
        
    
    
})();
