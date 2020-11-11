/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=> 
    {
          
           
        window.lib.getPosts((error, articles) => 
        {
            try{
                articles.forEach(article => 
                {
                    
                    article["commentaire"] = 
                     window.lib.getComments(article.id,(error, comments)=> {
                        try{return comments}
                        catch{ return error }
                        });
                    
                })
                console.log(articles)
            }
            catch {console.log("erreur")}
        })
        
    })
    
})();
