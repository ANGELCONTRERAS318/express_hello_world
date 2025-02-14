// public/script.js

window.onload = async () => {
    try {
        // Realizar solicitud a la API para obtener las tareas
        const response = await fetch('/api/tareas');
        const tareas = await response.json();

        // Obtener la tabla donde se mostrarán los datos
        const tableBody = document.getElementById('tareas-table').getElementsByTagName('tbody')[0];

        // Si no hay tareas, mostrar un mensaje
        if (tareas.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="3">No hay tareas disponibles.</td></tr>';
        } else {
            // Agregar las filas con las tareas obtenidas
            tareas.forEach(tarea => {
                const row = tableBody.insertRow();

                const cellId = row.insertCell(0);
                const cellTitulo = row.insertCell(1);
                const cellDescripcion = row.insertCell(2);

                cellId.textContent = tarea.id;
                cellTitulo.textContent = tarea.titulo;
                cellDescripcion.textContent = tarea.descripcion;
            });
        }
    } catch (error) {
        console.error('Error al cargar las tareas:', error);
    }
};
