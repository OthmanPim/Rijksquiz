$('document').ready(function() {
	
	$("#searchbtn").click(function(e) {
		e.preventDefault();
		var searchstring = $('#search_field').val();
		var spinner = $('#spinner');
		//show spinner
		spinner.toggle();
		//encode the sreach value (replace spaces with + signs)
		searchstring = encodeURIComponent(searchstring);
		var url = "https://www.rijksmuseum.nl/api/nl/collection?key=Ur1jJGwY&ps=100&involvedMaker=" + searchstring;
		$.ajax(url, {
			success: function(response) {
			  // this variable will store the objects from response that will be shown on the html page inside the results_container ul
			  var htmlOutput = '';
			  //hide spinner
			  spinner.toggle();
			  if (response.hasOwnProperty('artObjects')) {
					var result_objects = response.artObjects;
					$.each(result_objects, function(key,value) {
						htmlOutput += [
						  '  <div class="card mb-3">',
						  '  <div class="row no-gutters">',
						  '  <div class="col-md-4">',
						  ' 	<img src="' + value.webImage.url + '" class="card-img" alt="...">',
						  '  </div>',
						  '  <div class="col-md-8">',
						  '  <div class="card-body">',
						  '  <h5 class="card-title">' + value.title + '</h5>',
						  '  <p class="card-text">' + value.longTitle + '.</p>',
						  '  </div>',
						  '  </div>',
						  '  </div>',
						  '  </div>'
						].join("");
					});
					$("#results_container").html('');
					$("#results_container").html(htmlOutput);
			  }
			},
			error: function() {
			  console.log("error occured");
			  //hide spinner
			  spinner.toggle();
			}
		});
	});
});