// on récupère les petites images dans la barre latérale afin de leur mettre un evenement click
var listeImages = document.querySelectorAll('#barre-laterale img');
// querySelectorAll va cibler un chemin css
// on vérifie dans la console
console.log(listeImages);

// une boucle pour appliquer un evenement click sur toutes les images récupérées :

for(var img of listeImages) {
    img.addEventListener('click', function() {
        // dans un evenement : le mot clé this représente l'élément HTML qui a reçu l'évènement
        // Dans notre cas, this représente l'image qu vient d'être cliquée
        console.log(this.id);

        var nouveauSrc = 'img/' + this.id + '.jpg';

        document.getElementById('imagePrincipale').src = nouveauSrc;

        
    });
}


// sans les commentaire et console mon code c'est ça !
// meme code qu'au dessus sans tout ça

var listeImages = document.querySelectorAll('#barre-laterale img');
for(var img of listeImages) {
    img.addEventListener('click', function() {
        var nouveauSrc = 'img/' + this.id + '.jpg';
        document.getElementById('imagePrincipale').src = nouveauSrc;  
    });
}