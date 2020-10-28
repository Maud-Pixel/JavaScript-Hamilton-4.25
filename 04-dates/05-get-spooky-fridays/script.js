/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // http://cosmos2000.chez.com/Vendredi13/CalculDesVendredis13.html
    //http://cosmos2000.chez.com/Vendredi13/DistributionVendredis13.html

function disp(txt) {
    document.write(txt);
}
function don_date_format(d1) {
	var m=new Array(13);
	m[1]="Janvier"; m[2]="Février"; m[3]="Mars"; m[4]="Avril"; m[5]="Mai"; m[6]="Juin";
 	m[7]="Juillet";	m[8]="Août"; m[9]="Septembre"; m[10]="Octobre";	m[11]="Novembre"; m[12]="Décembre";
	var d=new Array(8);
	d[1]="Dimanche"; d[2]="Lundi"; d[3]="Mardi"; d[4]="Mercredi"; d[5]="Jeudi"; d[6]="Vendredi"; d[7]="Samedi";
	var mois=m[d1.getMonth()+1];
	var jour=d[d1.getDay()+1];
	var date=d1.getDate();
	var an=d1.getFullYear();
	if (an<200) an+=1900; 
	date=jour+" "+date+" "+mois+" "+an;
	return date;
	} // Il définit ce que représente une date. On entre une date d'un vendredi 13(format date, voir fonction "prochain") et il la stcoke dans ses tableaux
function prochain() {
	var dt_jour=new Date;
	var an=dt_jour.getYear();
	if (an<200) an+=1900; 
	var m=dt_jour.getMonth();
	var d=dt_jour.getDate(); 
	if (d>13) m++;
	var ven="";
	while (ven=="") {
		dt_jour.setDate(13);
		dt_jour.setMonth(m);
		dt_jour.setYear(an);
		if (dt_jour.getDay()==5) {
			ven=don_date_format(dt_jour);
		}
		m++; 
		if (m==12) {m=0; an++;}
	}
	return ven;
}
function vendredi() {	
	var an=document.forms[0].elements[0].value
	var dt_jour=new Date;
	document.forms[0].elements[2].value=unescape("Les vendredis 13 de l'année "+an+"%0D%0A");
	for(var i=0;i<12;i++) {
		dt_jour.setMonth(i);
		dt_jour.setDate(13);
		dt_jour.setYear(an);
		if (dt_jour.getDay()==5) {
			document.forms[0].elements[2].value+=unescape(don_date_format(dt_jour)+"%0D%0A");
		}
	}
}

})();
