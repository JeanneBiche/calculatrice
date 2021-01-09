'use strict'

    // calculs

    var premierChiffre = document.getElementById('premier-chiffre');
    var deuxiemeChiffre = document.getElementById('deuxieme-chiffre');
    var operateur = document.getElementById('operateur');
    var monSubmit = document.getElementById('monFormulaire');
        monSubmit.addEventListener("submit", calcul);

    var chiffre1 = parseFloat(document.getElementById('premier-chiffre').value);
    var chiffre2 = parseFloat(document.getElementById('deuxieme-chiffre').value);   
  
    var calculatrice = document.getElementById('calculatrice');
    

    // evenements 
    premierChiffre.addEventListener('mouseover', funcSurvol1);
    premierChiffre.addEventListener('mouseout', funcSurvol1B);

    deuxiemeChiffre.addEventListener('mouseover', funcSurvol1);
    deuxiemeChiffre.addEventListener('mouseout', funcSurvol1B);
    
    operateur.addEventListener('mouseover', funcSurvol2);
    operateur.addEventListener('mouseout', funcSurvol2B);


    var spanNombre= document.getElementById('spanNombre');
    var spanOpe = document.getElementById('spanOpe');


    // Les fonctions

        function calcul() {
        event.preventDefault();
        if (isNaN(chiffre1) || isNaN(chiffre2)){
                alert('Valeurs incorrectes');
            }      
        else {

        let resultat;

        if(operateur.value == '+' ) { 
        resultat = chiffre1 + chiffre2;
        }

        if(operateur.value == '-' ) {
        resultat = chiffre1 - chiffre2;  
        }
        if(operateur.value == '*' ) { 
        resultat = chiffre1 * chiffre2;  
        }
        if (operateur.value == '/' ) {
        resultat = chiffre1 / chiffre2;
        }
        var resultFinal = parseInt(resultat);
        alert(premierChiffre.value + operateur.value + deuxiemeChiffre.value + "=" + resultFinal);
    }
        }
    
    // evenements

    function funcApparaitre() {
        calculatrice.style.display='block';
    }

    function funcDisparaitre() {
        calculatrice.style.display='none';
    }

     function funcSurvol1() {
          spanNombre.style.display='inline-block';
    }

    function funcSurvol1B() {
          spanNombre.style.display='none';
    }
    
    function funcSurvol2() {
          spanOpe.style.display='inline-block';
    }

    function funcSurvol2B() {
          spanOpe.style.display='none';
    }