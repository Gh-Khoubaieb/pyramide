//récupérer le nombre des étages saisie par l'utilisateur 
var rows = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log(rows);
console.log("Voici la pyramide :");
if( (rows >= 1) && (rows <= 25) ) {
    for(var i = 1; i <= rows; i++){
      var output = '';
      //ajouter de l'espace à gauche pour chaque ligne
      for(var k = 1; k <= (rows - i); k++){
        output += ' ';
      }
      
      //Ajouter de '#' pour chaque ligne
      var j = 0 ;
      while( j != (2 * i - 1)){
        output += '#';
        j++;
      }
      
       //Affichage d'une pyramide à n étages
      console.log(output);
    }
}