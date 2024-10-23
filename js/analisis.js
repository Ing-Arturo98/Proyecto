// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementsByClassName("close")[0];
var pdfViewer = document.getElementById("pdfViewer");

// Abrir modal al hacer clic en el botón
openModalBtn.onclick = function() {
    modal.style.display = "block";
    pdfViewer.src = "fpdf/datos ITES.pdf";  // Cambia la ruta al archivo PDF que desees mostrar
};

// Cerrar modal al hacer clic en el botón de cerrar (X)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
    pdfViewer.src = "";  // Limpiar la ruta del PDF para que se recargue correctamente
};

// Cerrar modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        pdfViewer.src = "";  // Limpiar la ruta del PDF
    }
};

