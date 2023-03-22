
let startPoint = 0;
let endPoint = 0;

//kno
let kno = document.querySelector('.kno').value;


if ( kno > 0 ){ // 키워드 수정
	$.ajax({
		url : "/throw/keyword" ,
		method : "get" ,
		data : { "kno":kno , "gettype":2 } ,
		success : (r)=>{
			console.log(r)
			document.querySelector('.dname').value = r.kcontent
		} 
	})
}else{ // 키워드 생성
	kno = 0;
}
console.log("kno : "+kno)	

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
			if ( kno == 0 ){ // 키워드 생성
				addKeyword();
				location.href="/throw/keywords.jsp"
			}else{
				// 키워드수정
				console.log( "kno :"+ kno )
				if ( updateKeyword() ){
					location.href="/throw/keywords.jsp"
				}

			}
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
		
		if ( kno == 0 ){ // 키워드생성
			//키워드생성
			if ( addKeyword() ){
				// 디렉토리에 넣기 페이지로
				console.log("키워드 추가후 이동전 kno : "+kno)
				location.href="http://localhost:8080/throw/updateKeywordToDir.jsp?kno="+kno;
			}
		}else{
			//키워드수정
			console.log( '키워드수정성공했는지' )
			console.log( updateKeyword() )
			if ( updateKeyword() ){
					// 디렉토리에 넣기 페이지로
					console.log("키워드 수정후 이동전 kno : "+kno)
					location.href="http://localhost:8080/throw/updateKeywordToDir.jsp?kno="+kno;
			}
			
		}
	}
})



// 키워드추가 
function addKeyword(){
	
	let keyword = document.querySelector('.dname').value
	let result = ''
		$.ajax({
			url : "/throw/keyword" ,
			method : "post" ,
			data : { "keyword":keyword , "ktype":1  } , // 데이터타입 임시1 추후에 금액 날짜 별로 다르게
			async : false,
			success : (r)=>{
				console.log("kno : "+r)
				result = r
				if (r != 0){
					console.log('등록성공')
					kno = r
					console.log('등록성공후 전역변수 kno:'+kno)
				}
			}
		})
		return result;
}

// 키워드수정
function updateKeyword(){
	let keyword = document.querySelector('.dname').value
	let result = ''
	console.log('키워드수정 kno : '+kno)
	$.ajax({
		url : "/throw/keyword" ,
		method : "put" ,
		data : { "kno":kno , "keyword":keyword , "puttype":2  } , // puttype:1 디렉토리추가 // puttype:2 키워드내용 변경
		async : false,
		success : (r)=>{
			console.log(r)
			result = r
			if (r == 'true'){
				console.log('키워드 수정성공')
			}else{
				console.log('키워드 수정실패')
			}
		}
	})
	return result;
}