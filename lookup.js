window.onload = function () 
{
	  main();
};
	

	function main()	
	{
		var goSearch = document.getElementById("search");
		goSearch.onclick = function()
		{
		
		$.ajax({
    	type: "GET",
    	url: 'request.php?q=definition',
    	success: function(result){
        alert($(result).text());
    }
});
		};
		}
