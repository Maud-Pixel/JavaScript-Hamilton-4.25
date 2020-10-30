/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function Person( x, l)  
    {
        this.firstname = x,
        this.lastname = l,
        this.message = "Hello",

        this.sayHello = function()
        {
            console.log(this.message +" "+ x);
        }
    }
    let Pierre = new Person( "Pierrot", "Gourmand");
    Pierre.sayHello();
    let Ingrid = new Person( "Ingrid", "huile sur le feu");
    Ingrid.sayHello();
})();
