/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
 
    document.getElementById("run").addEventListener("click", function()
    {
        let change = document.getElementById("target");
        let result =[];
        let new_adjective = [];
        let total = [];
        let i = 0;
        
        let new_adj = Array.from(adjectives);
           
            let key_surprise = getRandomInt(11);
            birds.forEach(item =>
                {
                    if (i == key_surprise)
                    {
                        if (item.fem == true && i < new_adj.length)
                        {
                            result = `${(item.name)} ${(new_adj[i])}e `;
                        }
                        else if (new_adj && i < new_adj.length)
                        {
                            result = `${(item.name)} ${(new_adj[i])} `
                        }
                        else
                        {
                            result = `${(item.name)} `
                        }
                    }
                    total = result;
                    i++
                })
            console.log(key_surprise);
            key_surprise = getRandomInt(11);
            
            change.innerHTML = total;
                
            
    })
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
})();
