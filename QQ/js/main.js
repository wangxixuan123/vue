var vue=new Vue({
		el:"#app",
		data:{datas:""},
		created:function(){
			var url="/some/path",
            	that=this;
            $.get(url,function(data){
            	
                // that.datas=JSON.parse(data);
                that.datas=data.custom;
                console.log(data.custom);               
            })
		}
	})