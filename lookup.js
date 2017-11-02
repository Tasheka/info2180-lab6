
window.onload = function () 
{
	  main();
};
	

	function main()	
	{
		var goSearch = document.getElementById("search");
		var goAll = document.getElementById("searchAll");
		
		goSearch.onclick = function()
		{
		
		var wordSearch = $("#searchWord").val()
		$.ajax(
			{
    	type: "GET",
    	url: 'request.php?q='+wordSearch,
    	success: function(result)
    	{
        $("#response").html(result);
        }
			});
		};
		
		goAll.onclick = function()
		{
			goAll.setAttribute("all", "true");
		$.ajax(
			{
    	type: "GET",
    	url: "request.php",
    	dataType: "xml",
    	data: {q: "&all=true"},
    	success: function(xml)
    	{
			var def_arr = $(xml).find("definition");
        		$("#response").html("");
        		$("#response").html('<ol></ol>');
        		$(def_arr).each(function(){
        		var li = '<h3>'+$(this).attr('name')+'</h3>';
        		li += '<p>'+$(this).text()+'</p>';
        		li += '<p>'+ '-'+ $(this).attr("author")+'</p>'
        		$("#response ol").append('<li>'+li+'</li>');
        		});
    	}
			});
		};
	}

	
