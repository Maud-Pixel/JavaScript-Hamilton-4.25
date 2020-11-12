/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>
    {
        const promise = window.lib.getComments();
        promise.then(result=>
        {
            if(result)
            {
                result.forEach(item =>
                    {
                        console.log(item)
                    })
            }
            else
            {
                console.log("no result baby");
            }
        
        }, error => console.log("error")
        

        )
    })
})();
