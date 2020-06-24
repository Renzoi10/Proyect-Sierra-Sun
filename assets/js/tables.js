/*Tables scripts*/
$(document).ready(function() {
  $('#table1').DataTable({
    "language": {
      "lengthMenu": "Numero de datos para visualizar _MENU_ ",
      "zeroRecords": "No se encontro elemento",
      "info": "Pagina _PAGE_ de _PAGES_",
      "infoEmpty": "No hay datos disponibles",
      "infoFiltered": "(Se econtraron _TOTAL_ elementos de _MAX_ )",
      "sSearch": "Buscar",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Ultimo",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "sProcessing": "Procesando....",
    }
  });
});


$(document).ready(function() {
  $('#table2').DataTable({
    "language": {
      "lengthMenu": "Numero de datos para visualizar MENU ",
      "zeroRecords": "No se encontro elemento",
      "info": "Pagina PAGE de PAGES",
      "infoEmpty": "No hay datos disponibles",
      "infoFiltered": "(Se econtraron TOTAL elementos de MAX )",
      "sSearch": "Buscar",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Ultimo",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "sProcessing": "Procesando....",
    }
  });
});

/*Tables scripts end*/
