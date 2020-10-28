/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        
        let one = document.getElementById("op-one").value;
        let two = document.getElementById("op-two").value;

        switch (operation){
            

            case ("addition"): 
                let addition = parseInt(one) + parseInt(two);
                alert(addition);
                break;
            
            case("substraction"): 
                let substraction = parseInt(one) - parseInt(two);
                alert(substraction);
                break;
            case("multiplication"):
            {
                let multiplication = parseInt(one) * parseInt(two);
                alert(multiplication);
                break;
            }
            case("division"):
            {
                let division = parseInt(one) / parseInt(two);
                alert(division);
                break;
            }
            default:
                { alert("pouet pouet");}
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
