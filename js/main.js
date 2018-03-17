
 /*JavaScript Document*/
$(function(){
	/*飞机到优衣库*/
	setTimeout(function(){
	$(".into").hide();
	$(".page1").show();
	$(".page1 audio")[0].play();
	
},5000);
/*点击手机到弹出短信*/
	$("#iphone").click(function(){
		$(".page1").hide();
		$(".page1 audio")[0].pause();
		$(".page2").show();
		setTimeout(function(){
			$(".page2 audio")[0].play();
	},1000);
	});
/*女孩发短信*/
	$("#mess").click(function(){
		$(".page2").hide();
		$(".page3").show();
		setTimeout(function(){
			$(".message audio")[0].play();
		},2000);
		setTimeout(function(){
			$(".message audio")[0].pause();
			$("#fs").show();
		},4000);
	});
/*点击发送*/
	$("#fs").click(function(){
		$(".page3").hide();
		$(".page4").show();
		$(".page4 audio")[0].play();
		setTimeout(function(){
		$(".page4").hide();
		$(".page5").show();
	},2000);
	});
/*点击呼叫出租车*/
	$("#hujiao").click(function(){
		$(".page5").hide();
		$(".page6").show();
		setTimeout(function(){
			$(".page6 audio")[0].play();
		},1000);
		setTimeout(function(){
		$(".page6").hide();
		$(".page7").show();
		$(".page7 audio")[0].play();
	},5000);
	});	
/*	接听电话*/
	$("#jie").click(function(){
		$(".page7").hide();
		$(".page7 audio")[0].pause();
		$(".page8").show();
		$(".page8 audio")[0].play();
		time("#span2");
	});
	/*挂电话弹出卫士 */
	$("#gua").click(function(){
		$(".page8").hide();
		$(".page8 audio")[0].pause();
		$(".page9").show();
	});
	/*点击确定 出现你也喜欢我*/
	$("#weishi").click(function(){
		$(".page9").hide();
		$(".page10").show();
		$(".page10 audio")[0].play();
		setTimeout(function(){
			$(".page10 audio")[1].play();
		},1000);
	});
/*点击小圆点 跳到司机*/
	$("#cha").click(function(){
		$(".page10").hide();
		$(".page11").show();
		$(".page10 audio")[1].pause();
	    setTimeout(function(){
			$(".page11").hide();
			$(".page12").show();
			setTimeout(function(){
				$(".page12 audio")[0].play();
			},1000);
			setTimeout(function(){
				$(".page12 audio")[1].play();
			},2500);
			setTimeout(function(){
				$(".page12 audio")[1].pause();
				$("#fss").show();
			},4500);
		},4000);
	});
/*点击发送*/
	$("#fss").click(function(){
		$(".page12").hide();
		$(".page13").show();
		$(".page13 audio")[0].play();
		setTimeout(function(){
			$(".page13").hide();
			$(".page14").show();
			setTimeout(function(){
				$(".page14 audio")[0].play();   /*叮当响*/
			},7000);
		},1000);
	});
/*点击圆点*/
	$("#ca").click(function(){
		$(".page14").hide();
		$(".page17").show();
	});	
/*点击提交订单*/
	$("#tijiao").click(function(){
		$(".page17").hide();
		$(".page18").show();
	});
	$("#text1").focusout(function(){
		if($(this).val()){
				$("#jieshou").show();			
			}else{
				$("#jieshou").hide();
			}
	});	
/*点击语音接受*/
	$("#jieshou").click(function(){
		$(".page18").hide();
		$(".answer").show();
		$(".answer audio")[0].play();	
	});
/*点击接听电话*/
	$("#jiejie").click(function(){
		$(".answer").hide();
		$(".answer audio")[0].pause();
		$(".page20").show();
		$(".page20 audio")[0].play();
		time("#span3");	
	});
/*听完验证码挂机*/
	$("#guaduan").click(function(){
		$(".page20").hide();
		$(".page20 audio")[0].pause();
		$(".page18").show();
		$("#jieshou").hide();
		$("#text2").show();
	});
/*/////////////text2是input框，判断框里输入内容了，id为ok的图片在出现*/
	$("#text2").focusout(function(){
		if($(this).val()){
				$("#ok").show();			
			}else{
				$("#ok").hide();
			}
	});	
/*提交验证码*/
	$("#ok").click(function(){
		$(".page18").hide();
		$(".page22").show();
	});
/*点击返回*/
	$("#fanhui").click(function(){
		$(".page22").hide();
		$(".popup").show();
	});
/*点击确定*/
	$("#queding").click(function(){
		$(".popup").hide();
		$(".page24").show();
		$(".page24 audio")[0].play();
		
		setTimeout(function(){
			$(".page24 audio")[0].pause();
			$(".page24").hide();
			$(".page25").show();
			$(".answer audio")[0].play();
			
		},4000);
	});
/*接听电话*/
	$("#jt").click(function(){
		$(".page25").hide();
		$(".answer audio")[0].pause();
		$(".hangup").show();
		$(".hangup audio")[0].play();
		time("#span4");
	});
/*按下红键 结束*/
	$("#ko").click(function(){
		$(".hangup").hide();
		$(".hangup audio")[0].pause();
		$(".page27").show();
	});
	/*卫士弹出来点击*/
	$("#shen").click(function(){
		$(".page27").hide();
		$(".page28").show();
		setTimeout(function(){
			$(".page28 audio")[0].play();
		},1000);
	});
	 
	function time(id,count){
		var n = 0;
		count = setInterval(function(){
			n++;
			if(n<10){
				$(id).text("0"+n);
			}else{
				$(id).text(n);
			}
			if(n==30){
				clearInterval(count);
			}
		},1000);
	}
	
	function interval(id,tim) {
     var n=0;
     tim=setInterval(function () {
         n++;
       $(id).text(n+"%");
         if(n==100){
             clearInterval(tim);
         }
     },30);
 }
	interval("#p1");
	

});



