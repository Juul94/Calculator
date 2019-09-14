// JavaScript Document

// VARIABEL MED KNAPPENS ID
var btn_equal = document.querySelector('#btn_count');

// HER LAVER VI ET EVENT AT NÅR DER "KLIKKES" SKAL DER UDFØRES EN FUNCTION
btn_equal.addEventListener('click', countNum)

function countNum() {

	// HER GEMMER VI DEN VÆRDI SOM BRUGEREN SKRIVER I DET FØRSTE INPUT-FELT
	var value1 = document.querySelector('#value1').value;
	
	// HER GEMMER VI DEN OPERATOR SOM BRUGEREN VÆLGER (PLUS, MINUS, GANGE, DIVIDER)
	var operator = document.querySelector('#opr').value;
	
	// HER GEMMER VI DEN VÆRDI SOM BRUGEREN SKRIVER I DET ANDET INPUT-FELT
	var value2 = document.querySelector('#value2').value;

	// VI SÆTTER EN STANDARD-VÆRDI FOR VORES RESULTAT INDEN VI BENYTTER DEN (UNDGÅR FEJL I KODE)
	var result = 0;
	
	// EN SWITCH SOM GÅR IND OG KIGGER PÅ HVILKEN OPERATOR BRUGEREN HAR VALGT OG UD FRA DEN UDFØRES EN BESTEMT KODE OG GEMMER RESULTATET I "result"
	switch (operator) {
		case "+":
		result = +value1 + +value2;
		break;

		case "-":
		result = value1 - value2;
		break;

		case "*":
		result = value1 * value2;
		break;

		case "/":
		result = value1 / value2;
		break;

		default:
		result = 0;
	}

	// FORDI JEG BENYTTER BOOTSTRAP (ALERT: BORDER + BG COLOR) ER DEN ALTID SYNLIG SELVOM DEN IKKE HAR NOGET CONTENT
	// SÅ DEN ER ALTID SAT TIL DISPLAY NONE MED CSS OG NEDENFOR FINDER VI DEN DIV OG GEMMER DEN I EN VARIABEL
	var showResult = document.querySelector('#showResult'); 
	
	// HER STYLER VI PÅ VORES DIV OG SIGER DEN SKAL VISES VIA "display:block;" SÅ DATAEN KAN BLIVE VIST I DIV'EN
	showResult.style.display = "block";
	
	// HER UDSKRIVER VI VORES RESULTAT VIA "innerHTML" - DET GØRES I EN DIV SOM ER TOM INDTIL ET RESULTAT BLIVER FUNDET
	document.querySelector('#showResult').innerHTML = result;
	
	// HER NULSTILLER VI VORES INPUT-FELTER + SELECT (TIL STANDARDVÆRDI: +), SÅ ALT DATA FORSVINGER OG NYE KAN SKRIVES
    document.querySelector('#value1').value = "";
	document.querySelector('#opr').value = "+";
    document.querySelector('#value2').value = "";
	
}

