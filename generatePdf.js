// generatePdf.js
document.getElementById('generatePdf').addEventListener('click', function () {
    // Obtener los datos de la tabla
    const table = document.getElementById('dataTable');
  
    // Crear un nuevo objeto jsPDF
    const pdf = new jsPDF();
  
    // Obtener el número de columnas y filas de la tabla
    const numColumns = table.rows[0].cells.length;
    const numRows = table.rows.length - 1; // Restamos 1 para excluir el encabezado de la tabla
  
    // Crear un array para almacenar los datos de la tabla
    const data = [];
  
    // Iterar a través de las filas y columnas para obtener los datos
    for (let i = 1; i <= numRows; i++) {
      const rowData = [];
      for (let j = 0; j < numColumns; j++) {
        rowData.push(table.rows[i].cells[j].innerText);
      }
      data.push(rowData);
    }
  
    // Definir el encabezado de la tabla
    const headers = [];
    for (let i = 0; i < numColumns; i++) {
      headers.push(table.rows[0].cells[i].innerText);
    }
  
    // Agregar el contenido de la tabla al PDF utilizando autoTable
    pdf.autoTable({
      head: [headers],
      body: data,
    });
  
    // Guardar el PDF como archivo
    pdf.save('tabla.pdf');
  });
  