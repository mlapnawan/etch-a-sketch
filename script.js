$(document).ready(function(){
	// get grid size
	do {
		var size = prompt("Grid Size (Integers Only)");
	} while (isNaN(size) || size%1!=0);
	var sizeInt = parseInt(size);

	// create grid
	for(var i=0; i<sizeInt; i++){		
		$('table').append('<tr></tr>');		
	}
	for(var i=0; i<sizeInt; i++){
		$('tr').append('<td></td>');
	}

	// highlight boxes
   $('td').hover(function(){
   		$(this).addClass('highlight');
   });

   // clear button
   $('#clear').on('click', function(){
   		$('td').removeClass('highlight');
   });

});