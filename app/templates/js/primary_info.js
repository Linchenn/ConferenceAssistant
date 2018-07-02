function onload(){
	var id=20;
	$.ajax({
		type:"GET",
		url:"/returnUser/"+id,
		dataType:"json",
		success:function(data){
			$("#name").html(data[0].name);
			$("#organization").html(data[0].organization);
			if(data[0].email!='')
				$("#inputEmail3").val(data[0].email);
			else
				$("#inputEmail3").val("无");
			if(!data[0].TEL)
				$("#inputTEL").html(data[0].TEL);
			else
				$("#inputTEL").html("无");
		}
	})
}