$.ajax({
    url:"js/provinceCityList.json",
    type:"GET",
    success:function(res){
     console.log(res);
     var list = res.ProvinceName;
     var cityDOM =[];
     for(var i =0;i<res.length;i++){
        var html = "<li>"+res[i].ProvinceName+"</li>";
         cityDOM.push(html);
         
     };
        $('.CityList').append(cityDOM);
    },
    error:function(res){
    console.log('请求失败')
    }
    
});