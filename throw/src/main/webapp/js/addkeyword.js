
let startPoint = 0;
let endPoint = 0;

//kno
let kno = 0;

// 터치
window.addEventListener("touchstart",(e)=>{
	console.log("touchstart", e.touches[0].pageY);
	startPoint = e.touches[0].pageY; // 터치가 시작되는 위치 저장
})

window.addEventListener("touchend",(e)=>{
	console.log("touchend",e.changedTouches[0].pageY);
	endPoint = e.changedTouches[0].pageY // 터치가 끝나는 위치 저장
	if(startPoint>endPoint){
		console.log("위로throw");
		let keyword = document.querySelector('.dname').value
		if( keyword == '' ){
			location.href="/throw/keywords.jsp"
		}else{
			addKeyword();
			location.href="/throw/keywords.jsp"
		}
	}else if(startPoint < endPoint){
		console.log("아래로swipe");
		
	}
})

// 엔터
document.addEventListener("keydown" , (e)=>{
	console.log(e.keyCode)
	if ( e.keyCode == 13 ){
		console.log('enter를 누름')
		//키워드추가
		addKeyword();
		// 디렉토리 파일선택
		console.log("파일추가후 이동전 kno : "+kno)
		console.log("http://localhost:8080/throw/updateKeywordToDir.jsp?kno="+kno)
		location.href="http://localhost:8080/throw/updateKeywordToDir.jsp?kno="+kno;
	}
})

// 키워드추가 
function addKeyword(){
	
	let keyword = document.querySelector('.dname').value
	
		$.ajax({
			url : "/throw/keyword" ,
			method : "post" ,
			data : { "keyword":keyword , "ktype":1  } ,
			async : false,
			success : (r)=>{
				console.log("kno : "+r)
				if (r != 0){
					console.log('등록성공')
					kno = r
					console.log('등록성공후 전역변수 kno:'+kno)
				}
			}
		})

}