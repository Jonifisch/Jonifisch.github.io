$(document).ready(function () {
  // DataTable initialization without search bar
  var dataTable = $('#data-table').DataTable({
    "lengthChange": false,
    "paging": false,
    "info": false,
    "order": [[0, 'asc']]
     // Sort the first column in ascending order by default
  });

  $('.dataTables_filter').hide();

  // Custom filter function
  function filterTable() {
    var searchTerm = $('#search-input').val();
    dataTable.search(searchTerm).draw();
  }

  // Attach the filterTable function to the input's oninput event
  $('#search-input').on('input', function () {
    filterTable();
  });
});
