document.getElementById('botonAnimar').addEventListener('click', function() {  
    const santa = document.getElementById('santa');  
    const estrella = document.getElementById('estrella');  
      
    // Animar a Santa Claus  
    santa.classList.add('animar');  
      
    // Mostrar la estrella después de un pequeño retraso  
    setTimeout(() => {  
        estrella.style.opacity = 1;  
    }, 1000);  
      
    // Restablecer la posición después de un tiempo  
    setTimeout(() => {  
        santa.classList.remove('animar');  
        estrella.style.opacity = 0;  
    }, 3000);  
});  