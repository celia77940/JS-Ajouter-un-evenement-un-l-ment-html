const button = document.getElementById('btn');
console.log(button);

function displayHello(){
    console.log('coucou');
}

// Sert a infecter un ecouteur d'evenement 
button.addEventListener('click', function(){
    console.log('coucou');
});

button.addEventListener('dblclick', function(){
    console.log('coucou');
});

button.addEventListener('mouseover', function(){
    console.log('coucou');
});

// Pas une bonne pratique
button.addEventListener('mouseleave', displayHello);