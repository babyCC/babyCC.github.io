$(function(){
	var ione = $(".one"),
		ithe = $(".the"),
		itwo = $(".two img"),
		tthe = $(".the img");
	
	var arr = ["imgs/userimg-big.jpg","imgs/userimg2-big.jpg","imgs/userimg3-big.jpg","imgs/userimg4-big.jpg"];
	var oarr = ["imgs/userimg.jpg","imgs/userimg2.jpg","imgs/userimg3.jpg","imgs/userimg4.jpg"];
	itwo.each(function(i){
		$(this).click(function(){
			$(".one img").attr("src",arr[i])
			tthe.attr("src",oarr[i])
			itwo.removeClass("active")
			$(this).addClass("active")
		})
        
	})	
	
})


var p_right_nav = $(".p_right_nav li");
	var p_nav_con = $(".p_nav_con li");
	$(".p_right_nav li").click(function(){
		var p_index = $(this).index();
        /*console.log(p_index);*/
        $(this).css('borderColor','#240303').siblings('li').css('borderColor','#eee');
        p_nav_con.eq(p_index).css('display','block').siblings('li').css('display','none');
		
	});




