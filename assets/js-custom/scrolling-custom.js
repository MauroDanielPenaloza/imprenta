$(document).ready(function(){

	$(window).scroll(function(){
		var hT=$('#div-proceso').offset().top;
		var hH=$('#div-proceso').outerHeight();
		var hW=$(window).outerHeight();
		var wS=$(this).scrollTop();
		if(wS>(hT+hH-hW)){
			
		}
	})
});