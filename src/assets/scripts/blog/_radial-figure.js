document.addEventListener("DOMContentLoaded", function() {
  //const img = document.getElementById("figure-img");
  const figcaption = document.getElementById("figcaption");
  
  //Datos mockeados como ejemplo (se crearía una lógica para obtener y mostrar los datos dinámicamente)
  //const imgSrc = "/src/assets/images/blog/concurso.jpg"; 
  const figcaptionText = "Equipo de chefs celebrando el concurso. Dibujado por el maestro 'Mangaka'.";
  
  //img.src = imgSrc;
  figcaption.textContent = figcaptionText;
});