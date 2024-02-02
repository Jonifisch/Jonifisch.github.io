function filterTable() {
  var input, filter, table, tr, td, i, j, txtValue;

  // Get the search input value and convert to uppercase for case-insensitive search
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();

  // Get the table and its clickable rows
  table = document.getElementById("data-table");
  tr = table.getElementsByClassName("clickable-row");

  // Loop through all clickable rows
  for (i = 0; i < tr.length; i++) {
    var match = false;
    var cells = tr[i].getElementsByTagName("td");

    // Check each cell in the row for a match
    for (j = 0; j < cells.length; j++) {
      txtValue = cells[j].textContent || cells[j].innerText;
      if (txtValue.toUpperCase().includes(filter)) {
        match = true;
        break; // Break the inner loop if a match is found in any cell
      }
    }

    // Show or hide the entire row based on the match
    tr[i].style.display = match ? "" : "none";
  }
}

  
$(document).ready(function () {
  // DataTable initialization with sorting options
  var dataTable = $('#data-table').DataTable({
    "lengthChange": false,
    "paging": false,
    "searching": false,
    "info": false
  });

  // Hide all details rows initially
  $(".details-row").hide();

  // Toggle details rows when a clickable row is clicked
  $(".clickable-row").click(function () {
    // Find the parent container
    var $parentContainer = $(this).parent();

    // Find all next details rows within the same parent container
    var $detailsRows = $parentContainer.find($(this).nextUntil(".clickable-row", ".details-row"));

    // Toggle the visibility of the selected details rows
    $detailsRows.slideToggle();
  });

  // Add event listener for search input
  $('#search-input').on('keyup', function () {
    filterTable();
  });

  // Add event listener for sorting change
  $('#data-table').on('click', 'th', function () {
    var columnIndex = dataTable.column(this).index();
    dataTable.order([columnIndex, 'asc']).draw();
  });
});




 $(document).ready(function() {
    // Hide all details rows initially
    $(".details-row").hide();

    // Toggle details rows when a clickable row is clicked
    $(".clickable-row").click(function() {
      // Find the parent container
      var $parentContainer = $(this).parent();

      // Find all next details rows within the same parent container
      var $detailsRows = $parentContainer.find($(this).nextUntil(".clickable-row", ".details-row"));
      
      // Toggle the visibility of the selected details rows
      $detailsRows.slideToggle();
    });
});

