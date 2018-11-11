new Vue({

	el:'#vue-app',
	data:{

		name:"fahim",
		x:0,
		y:0
	},
	methods:{
		updateXY:function(event) {
			// body...


			this.x = event.offsetX;
			this.y = event.offsetY;






		},
		enterName:function(){
			console.log("enter");
		}

	}



});