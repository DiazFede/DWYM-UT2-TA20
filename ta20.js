const imagen = document.getElementById('imagen');

imagen.addEventListener('mouseover', function() {
    imagen.src = 'ta20img.jpeg';
});

imagen.addEventListener('mouseout', function() {
    imagen.src = 'ta20imgCambiada.jpeg';
});
