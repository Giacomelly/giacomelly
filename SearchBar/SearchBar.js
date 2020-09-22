

$(document).ready(function(){

$("#searchDropdownBox").change(function(){
  var Search_Str = $(this).val();
	  $("#shopnavsearchcontent").text(Search_Str);

	});

});