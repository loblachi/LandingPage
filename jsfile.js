$(document).ready(function(){
	AOS.init();
		$(".ham").on("click", function(){
			console.log("open mf"); 
			$(".close").css({
				'display':'inline-block'
			})
			$(".ham").css({
				'display':'none'
			})
			$(".navUL").addClass("navDropDown"); 

			 $(".div-ham-close").attr("aria-expanded" , "true") 
	    })

	    $(".close").on("click", function(){   
			console.log("time to close"); 
			$(".ham").css({
				'display':'inline-block'
			})
			$(".close").css({
				'display':'none'
			})
			$(".navUL").removeClass("navDropDown");

			$(".div-ham-close").attr("aria-expanded" , "false")
	    })

})

/*  */