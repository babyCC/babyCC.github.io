$(function(){

	$(window).scroll(function(){
		if($(window).scrollTop()>=160){
			$(".navbox").css({
				position:"fixed",
				
				top:0,
				zIndex:99,
				
			});
		}else{
			$(".navbox").css({
				position:"static"
			});
		}
	});
	/*$(".sidebar ul li").click(function(){
		var s_this = $(this);
		s = s_this;
		t_content(s);
	});
	function t_content(s){
		var s_li = $(".sidebar ul li");
		var c_li = $(".text_container .content_public");
		var s_index = s_li.index(s);
		c_li.eq(s_index-1).show().siblings().hide();
		if(s_index==0){
			c_li.show();
		}
	}*/
});

