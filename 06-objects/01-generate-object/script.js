/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("run").addEventListener("click", function(){

        let Maud = 
        {
            lastname : "Leleux",
            firstname : "Maud",
            age : 35,
            city : "Marchin",
            country : "Belgium",
            identity : function(){
            console.log( 
                `
                My lastname is: ${this.lastname}
                My firstname is : ${this.firstname}.
                J'ai ${this.age} ans.
                J'habite à ${this.city}, en ${this.country}.`);  
            }
        };
    console.log(Maud.identity());
    })
    
})();
