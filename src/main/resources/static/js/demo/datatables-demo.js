// Call the dataTables jQuery plugin
//$(document).ready(function() {
//  $('#datatable-buttons').DataTable();
//});

$(document).ready(function() {
    var table = $('#datatable-buttons').DataTable( {
        //lengthChange: false,
        "dom": 'Blfrtip',
        buttons: [ 'copy', 'csv', 'pdfHtml5', 'print' ]
    } );
 
    table.buttons().container()
        .appendTo( '#datatable-buttons_wrapper .col-sm-6:eq(0)' );
} );


//$(document).ready(function() {
//  var table = $('#datatable-buttons').DataTable({
//    //"dom": 'Blfrtip',
//    "lengthMenu": [
//      [50, 100, 1000, -1],
//      [50, 100, 1000, "All"]
//    ],
//    "initComplete": function() {
//      $("#datatable-buttons").show();
//    },
//    "buttons": ['copy', 'csv', 'excel', 'pdf', 'print', 'colvis']
//  });
//  table.buttons().container().appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
//});