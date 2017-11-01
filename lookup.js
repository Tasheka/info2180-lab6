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


		////	$.get("request.php", function (){
			//$(".dictionary").html();
			//alert("good");})
		//	window.location.assign(
		//	window.alert("Its ok");
		//	$("#search").on('click', function(){
      // var query = $("#query").dictionary();
       //var link = "https://info2180-lab6-jasonhinds13.c9users.io/request.php?q="+query;
       
       /* $.ajax(link, {
           method: 'GET',
       }).done(function(res){
           $("#result").html(res);
       }).fail(function(err){
           $("#result").html(err);
       });*/
      // "https://info2180-lab6-jasonhinds13.c9users.io/request.php?q="+query
       
 
		};
		}
