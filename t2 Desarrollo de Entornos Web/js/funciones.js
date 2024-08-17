// Función para cambiar el color del título cada segundo
function colores() {
    const titulo = document.getElementById('titulo');
    setInterval(() => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        titulo.style.color = `rgb(${r}, ${g}, ${b})`;
    }, 1000);
}

// Función para cambiar la imagen del banner cada segundo
function banner() {
    const imagenes = [
        'assets/r1.jpg',
        'assets/r2.jpg',
        'assets/r3.jpg'
        
    ];
    const imgElement = document.getElementById('imagen-banner');
    let index = 0;
    setInterval(() => {
        imgElement.src = imagenes[index];
        index = (index + 1) % imagenes.length;
    }, 1000);
}

// Función para crear el calendario y sombrear la fecha actual
function crearCalendario() {
    const calendarioDiv = document.getElementById('calendario');
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const diasMes = new Date(fecha.getFullYear(), mes + 1, 0).getDate();

    // Crear tabla de calendario
    const tabla = document.createElement('table');
    const headerRow = document.createElement('tr');
    diasSemana.forEach(dia => {
        const th = document.createElement('th');
        th.innerText = dia;
        headerRow.appendChild(th);
    });
    tabla.appendChild(headerRow);

    // Añadir días del mes
    let row = document.createElement('tr');
    for (let i = 1; i <= diasMes; i++) {
        const cell = document.createElement('td');
        cell.innerText = i;
        if (i === dia) {
            cell.style.backgroundColor = 'red';
            cell.style.color = 'blue';
        }
        row.appendChild(cell);
        if (new Date(fecha.getFullYear(), mes, i).getDay() === 6) {
            tabla.appendChild(row);
            row = document.createElement('tr');
        }
    }
    tabla.appendChild(row);
    calendarioDiv.appendChild(tabla);
}

// Llamar a las funciones al cargar la página
window.onload = function() {
    colores();
    banner();
    crearCalendario();
}
