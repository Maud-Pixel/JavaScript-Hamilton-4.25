/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let today = new Date();
    let today_year = today.getFullYear();
    let today_month = today.getMonth()+1;
    let today_date = today.getDate();
    let today_day = today.getDay();
    let today_hour= today.getHours();
    let today_minute = today.getMinutes();
   
    switch(today_month)
    {
        case 10 : today_month="October";
                    break;
        case 11: today_month="November";
    }
    let message = `Wake-up ! It's ${today_minute} past ${today_hour}.
    We are the wonderfull ${today_date} ${today_month} ${today_year}` ;
    

    document.getElementById("target").innerHTML = message;
    


})();
