//funcion que se aplica el estilo ala opcion seleccionada en el menu y quita la previamente seleccionada
function seleccionar (link) {
    var opciones = document.queryselectorAll("#links a");
    opciones[a].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacer desaparecer el menu una vez una vez que se ha seleccionado una opcion en el modo responsive

    var x = document.getElementById("nav");
    x.className = "";

} 

//funcion que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById["nav"];
    if(x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function (){
    efectoHabilidades ()
}; 

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades (){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300 ){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("react").classList.add("barra-progreso3");
        document.getElementById("git").classList.add("barra-progreso4");
    }
}