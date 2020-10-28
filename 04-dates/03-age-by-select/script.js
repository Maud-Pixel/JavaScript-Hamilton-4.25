/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("run").addEventListener("click" ,function()
    {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year =  document.getElementById("dob-year").value;
        let birthday = new Date()
  
        let today_year= birthday.getFullYear();
        let age = today_year - year;

        alert(`Your birthday is the : ${day} / ${month} / ${year} 
                Vous avez ${age} ans.`);
    }
    
    )
   
   
  
    
    
   

})();
