// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementsByClassName("close")[0];
var pdfViewer = document.getElementById("pdfViewer");

// Abrir modal al hacer clic en el botón
openModalBtn.onclick = function() {
    modal.style.display = "block";
    pdfViewer.src = "fpdf/Perfil de egreso.pdf";  // Cambia la ruta al archivo PDF que desees mostrar
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



// Obtener elementos del DOM para el segundo modal
var modal2 = document.getElementById("myModal2");
var openModalBtn2 = document.getElementById("openModalBtn2");
var closeModalBtn2 = document.getElementById("closeModalBtn2");
var pdfViewer2 = document.getElementById("pdfViewer2");

// Abrir el segundo modal al hacer clic en el botón
openModalBtn2.onclick = function() {
    modal2.style.display = "flex";
    pdfViewer2.src = "fpdf/propuesta_plan_estudiso.pdf";  // Cambia la ruta al segundo archivo PDF
};

// Cerrar el segundo modal al hacer clic en el botón de cerrar
closeModalBtn2.onclick = function() {
    modal2.style.display = "none";
    pdfViewer2.src = "";  // Limpiar la ruta del PDF
};

// Cerrar modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        pdfViewer2.src = "";  // Limpiar la ruta del PDF
    }
};




// Obtener elementos del DOM para el segundo modal
var modal3 = document.getElementById("myModal3");
var openModalBtn3 = document.getElementById("openModalBtn3");
var closeModalBtn3 = document.getElementById("closeModalBtn3");
var pdfViewer3 = document.getElementById("pdfViewer3");

// Abrir el segundo modal al hacer clic en el botón
openModalBtn3.onclick = function() {
    modal3.style.display = "flex";
    pdfViewer3.src = "fpdf/perfil egreso.pdf";  // Cambia la ruta al segundo archivo PDF
};

// Cerrar el segundo modal al hacer clic en el botón de cerrar
closeModalBtn3.onclick = function() {
    modal3.style.display = "none";
    pdfViewer3.src = "";  // Limpiar la ruta del PDF
};

// Cerrar modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
        pdfViewer3.src = "";  // Limpiar la ruta del PDF
    }
};
