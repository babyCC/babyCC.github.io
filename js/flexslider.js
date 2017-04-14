$(function(){//这里是固定的$(function(){}
  $('body').on('click','a.ac_slider',function(){//绑定事件在a.ac_slider上，当点击发生执行方法
 var index = $(this).index();//这里可以得到a.ac_slider的下标 相当于遍历
      //alert(index);
      $('.slider li').eq(index).fadeIn()//点击哪个下标的时候 该元素淡入
      .siblings().hide();//其他兄弟元素隐藏
      $(this).addClass('current')// 此时的ac_slider增加current，圆点为蓝色
      .siblings().removeClass('current');//则其他兄弟圆点移除current   
  });
    var timer = null;//将timer变量设置为空null
    function loopli(){
        clearTimeout(timer);//清除时间设置
        timer = setTimeout(function(){//让timer赋值一个方法，如果选中的圆点下标+1是等于圆点的数字的长度，那么点击第一个圆点 否则就按原本设置的下一个执行
       if($('.ac_slider').index($('.ac_slider.current'))+1==$('.ac_slider').length){
         $('.ac_slider').eq(0).click();
        }else{
        $('.ac_slider.current').next().click();}
       loopli();
     },3000);
    }
    loopli();
    $('.slider').mouseover(function(){clearTimeout(timer)})//当鼠标悬停或者点击的时候触发clearTimeout；鼠标离开的时候触发loopli方法 
    .mouseout(function(){loopli()});
    
    $('body').on('click','.ac_prev',function(){
     if($('.ac_slider').index($('.ac_slider.current'))==0){
       $('.ac_slider').eq(2).click();
      }else{
      $('.ac_slider.current').prev().click();
      }
        
    });
    
    $('body').on('click','.ac_next',function(){
    if($('.ac_slider').index($('.ac_slider.current'))==2){
     $('.ac_slider').eq(0).click();
    }else{
     $('.ac_slider.current').next().click();
    }
    })
});

