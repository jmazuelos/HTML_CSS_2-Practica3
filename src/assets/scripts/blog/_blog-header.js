document.addEventListener("DOMContentLoaded", function() {
  const blogTitle = document.getElementById("blog-title");
  const blogAuthor = document.getElementById("blog-author");
  
  //Datos mockeados como ejemplo (se crearía una lógica para obtener y mostrar los datos dinámicamente)
  const titleText = "I Edición del concurso de cocina japonesa"; 
  const authorText = "jmazuelos";
  
  blogTitle.textContent = titleText;
  blogAuthor.textContent = authorText;
});


