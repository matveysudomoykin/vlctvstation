$(document).ready(function(){
	$(document).on('click',".editjob,.addjob,.openmedia",function()
	{
		$.ajax({
			url: $(this).attr("href") + "1/",
			type: "GET",
			dataType: "text",
			data: {},
			timeout:30000, 
			async:false,
			cache: false,
			error: function(xhr)
			{
				console.log('Ошибка!'+xhr.status+' '+xhr.statusText);
			},
			success: function(text)
			{
				document.getElementById("myModal").innerHTML=text;
				$("#myModal").modal();
			}
		});
		return false;

	});
});
