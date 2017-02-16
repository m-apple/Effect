// JavaScript Document
function mlh(){
for(var i=0;i<aBox.length;i++){
		var aList=document.getElementById('list');
		var aBox=aList.children('div');
		var aSpan=aBox.children('div');
   	aBox.onmouseover=function(){
		aSpan[this.index].style.left=0+'px';
		aSpan[this.index].style.top=0;
	}
	aBox.onmouseout=function(){
		aSpan[this.index].style.left=100%+'px';
		aSpan[this.index].style.top=0;
	}
}
}


function come(){
	
	var timer=null;
	var btn=false;
		window.onscroll=function(){
			var oCome=document.getElementById('come');
			var oBack=document.getElementById('back');
			var c=10;
			if(btn){
				clearInterval(timer);
			}
			btn=true;
			var scH=document.body.scrollTop ||document.documentElement.scrollTop;
			if(scH>0){
				oBack.style.display='block';
			}else{
				oBack.style.display='none';
			};
		oCome.onclick=function(){
			var start=document.body.scrollTop ||document.documentElement.scrollTop;
			var dis=0-start;
			var time=1000;
			var count=Math.round(time/30);
			var n=0;
			
			clearInterval(timer);
			timer=setInterval(function(){
				btn=false;
				n++;
				var cur=start+dis*n/count
				document.body.scrollTop=document.documentElement.scrollTop=cur;
				if(cur==count){
					clearInterval(timer);
				}
			},30)
		};
	};
}


function xdt(){
	var oHeader=document.getElementById('header');
	var OH=oHeader.offsetTop;
	var oNext=oHeader.nextElementSibling || oHeader.nextSibling;
	addWheel(oHeader,function(){
		var sT=document.body.scrollTop || document.documentElement.scrollTop;
		if(sT>OH){
			oHeader.style.position='fixed';
			oHeader.style.zIndex=9999999999;
			oHeader.style.left=0;
			oHeader.style.top=0;
			oHeader.style.background='#324446';
			oHeader.style.opacity=0.7;
			oNext.style.display='block';
		}else{
			oHeader.style.position=' ';
			oHeader.style.background='';
			oNext.style.display='none';
		}
	})
}



function sMall(){
	var aBox=document.querySelectorAll('box');
	var aMask=document.querySelectorAll('Mask');
	aBox.onmouseover=function(){
		aMask.className='small';
	}
	aBox.onmouseout=function(){
		aMask.className='small';
	}
}