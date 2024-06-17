let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible =false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible =true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList ="";
    menuVisible =false;
}

function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");

        
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("HTMLCSS");
        habilidades[2].classList.add("React");
        habilidades[3].classList.add("Python");
        habilidades[4].classList.add("Git-hub");
        habilidades[5].classList.add("Wordpress");
        habilidades[6].classList.add("Php-symfony");
        habilidades[7].classList.add("Comunicación");
        habilidades[8].classList.add("Trabajo en Equipo");
        habilidades[9].classList.add("Creatividad");
        habilidades[10].classList.add("Dedicación");
        habilidades[11].classList.add("Proyect Management");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}