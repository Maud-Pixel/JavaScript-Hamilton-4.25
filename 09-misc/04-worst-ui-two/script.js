/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    let part_one = document.getElementById("part-one");
    let part_two = document.getElementById("part-two");
    let part_three = document.getElementById("part-three");
    let part_four = document.getElementById("part-four");
    
    let w = parseInt(part_one.innerHTML)-1;
    let x = parseInt(part_two.innerHTML)-1;
    let y = parseInt(part_three.innerHTML)-1;
    let z = parseInt(part_four.innerHTML)-1;
    let result = [];
    result.length = 4;
    target.innerHTML = result;

     part_one.addEventListener("click", function()
    {
        if(w < 499)
        {
            w +=1;       
        }
        else 
        {
            w = 460
            console.log("Stop clicking guy, your finger will wear out.");
        }
       result[0] = `0${w}`;
       target.innerHTML = result;

    });
    part_two.addEventListener("click", () => { 
        x = plus_much(x);
        if(x < 10)
        {
            result[1] = `0${x}`
        }
        else {result[1] = x;}
        
        target.innerHTML = result;
    });
    part_three.addEventListener("click", () => {
        y = plus_much(y)
        if(y < 10)
        {
            result[2] = `0${y}`
        }
        else {result[2] = y}
        target.innerHTML = result;
    });
    part_four.addEventListener("click", () => {
        z = plus_much(z)
        if(z < 10)
        {
            result[3] = `0${z}`
        }
        else {result[4] = z;}
        target.innerHTML = result;
    });
    
    function plus_much(b)
    {
        if(b < 99)
        {
            b +=1        
        }
        else
        {
            b = 00;
        } 
        return b;
    } 
   
})();
