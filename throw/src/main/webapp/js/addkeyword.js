
let startPoint = 0;
let endPoint = 0;

window.addEventListener("touchstart",(e)=>{
	console.log("touchstart", e.touches[0].pageY);
	startPoint = e.touches[0].pageY; // 터치가 시작되는 위치 저장
})

window.addEventListener("touchend",(e)=>{
	console.log("touchend",e.changedTouches[0].pageY);
	endPoint = e.changedTouches[0].pageY // 터치가 끝나는 위치 저장
	if(startPoint>endPoint){
		console.log("위로throw");
		addKeyword();
	}else if(startPoint < endPoint){
		console.log("아래로swipe");
		
	}
})

// 키워드추가 
function addKeyword(){
	
	let keyword = document.querySelector('.dname').value
	if( keyword == '' ){
		location.href="/throw/keywords.jsp"
	}else{
		
		$.ajax({
			url : "/throw/keyword" ,
			method : "post" ,
			data : { "keyword":keyword , "ktype":1  } ,
			success : (r)=>{
				console.log(r)
				if (r == 'true'){
					console.log('등록성공')
					location.href="/throw/keywords.jsp"
				}
			}
		})
	}	
}