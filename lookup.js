window.onload = function () 
{
	  main();
};
	

	function main()	
	{
		var goSearch = document.getElementById("search");
		var lookupWord = document.getElementById("searchWord");
		
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
	}

	
	
