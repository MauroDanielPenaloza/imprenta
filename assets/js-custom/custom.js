$(document).ready(function(){
	$("#mensaje").hide();
	$("#spinner").hide();
	$(window).scroll(function(){
		var hT=$('#div-proceso').offset().top;
		var hH=$('#div-proceso').outerHeight();
		var hW=$(window).outerHeight();
		var wS=$(this).scrollTop();
		if(wS>(hT+hH-hW)){
			
		}
	})
	var selectors=["input[name=name]",
		"input[name=email]",
		"input[name=phone]",
		"textarea[name=message]"];

	function success(response){
	  	$("#mensaje").show();
	  	$("#spinner").hide();
		for (var i = 0; i < selectors.length; i++) {
			$(selectors[i]).val("");
			$(selectors[i]).prop("disabled", false )
		}
		$("#enviar").prop("disabled", false )
	}

	$("#enviar").click(function(ev){
		$("#mensaje").hide();
		$("#spinner").show();
		var body={
			nombreCliente:$("input[name=name]").val(),
			mailCliente:$("input[name=email]").val(),
			telefonoCliente:$("input[name=phone]").val(),
			mensajeCliente:$("textarea[name=message]").val()
		}
	 	
		$("#enviar").prop("disabled", true )
		for (var i = 0; i < selectors.length; i++) {
			$(selectors[i]).prop("disabled", true )
		}


		$.ajax({
		  type: "POST",
		  contentType: "application/json; charset=utf-8",
		  url: "rest/mail/7625e7fd-4222-4b5d-9ff5-452e7fa28962",
		  data: JSON.stringify(body),
		  success: success,
		  error: success
		});
	})
});