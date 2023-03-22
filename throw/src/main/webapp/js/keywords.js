getTodayKeyword();
let knolist = []
// 오늘 생성한 키워드 출력
function getTodayKeyword(){
	$.ajax({
		url : "/throw/keyword",
		method : "get",
		data : { "gettype":1 } ,
		success:(r)=>{
			console.log(r)
			console.log(r[0].kdate)
			document.querySelector('.kdate').innerHTML = r[0].kdate
			let html = ''
			r.forEach((o,i)=>{
				knolist.push(o.kno);
				html += `<div onclick="keywordClick(${o.kno})" class="dir dir${o.kno}">${o.kcontent}</div>`
			})
			
			document.querySelector('.content').innerHTML = html
		}
	})
}

let savekno = 0 //키워드 삭제, 키워드수정페이지 이동용 전역변수
let deletebox = document.querySelector('.deletebox') //휴지통 전역변수

// 키워드를 선택했을 때
function keywordClick(kno){
	console.log('keywordClick 함수실행')
//	console.log('kno : '+kno)
	
	
	knolist.forEach((o,i)=>{
		// 이전에 다른 디렉토리 선택중이었으면 이전선택해제
		if (document.querySelector('.dir'+o).style.backgroundColor == 'white'){
			if ( o != kno ){
				deletebox.style.display = 'none'
				document.querySelector('.dir'+o).style.backgroundColor = 'black'
				document.querySelector('.dir'+o).style.color = 'white'
				savekno = 0;	
			}
		}
	})
	
	if ( savekno == 0 ){
		savekno = kno;	
	}else{
		savekno = 0;
	}
	console.log('savekno : '+savekno)
	
	//휴지통 표시중이면 숨기기 / 숨김중이면 표시하기
	if ( deletebox.style.display == 'block' ){
		deletebox.style.display = 'none'
	}else{
		deletebox.style.display = 'block'
	}
	
	//키워드 선택중이면 선택해제 css
	if (document.querySelector('.dir'+kno).style.backgroundColor == 'white'){
		document.querySelector('.dir'+kno).style.backgroundColor = 'black'
	}else{
		document.querySelector('.dir'+kno).style.backgroundColor = 'white'	
	}
	
	//키워드 선택중이면 선택해제 css
	if ( document.querySelector('.dir'+kno).style.color == 'black'){
		document.querySelector('.dir'+kno).style.color = 'white'
	}else{
		document.querySelector('.dir'+kno).style.color = 'black'
	}
	
	
}

// 휴지통박스 선택시 키워드 삭제
deletebox.addEventListener("click",(e)=>{
	console.log('deletebox 클릭')
	$.ajax({
		url : "/throw/keyword" ,
		method : "delete" ,
		data : {"kno":savekno},
		success:(r)=>{
			console.log('delete 통신')
			console.log(r)
			if ( r == 'true'){
				console.log('키워드 삭제성공')
				location.href="/throw/keywords.jsp";
			}else{
				console.log('키워드 삭제실패')
			}
		}
	})
})

// y좌표
let startPoint = 0;
let endPoint = 0;

//함수실행시간 체크용
let start = new Date();
let end = new Date();
console.log(end - start)
	

window.addEventListener("touchstart",(e)=>{
	console.log("touchstart", e.touches[0].pageY);
	startPoint = e.touches[0].pageY; // 터치가 시작되는 위치 저장
	start = new Date();
})

window.addEventListener("touchend",(e)=>{
	console.log("touchend",e.changedTouches[0].pageY);
	endPoint = e.changedTouches[0].pageY // 터치가 끝나는 위치 저장
	end = new Date();
	if((startPoint-endPoint)>200){
		console.log("위로throw");
		location.href = "/throw/dirView.jsp?dno=1&dname=superdir";
	}else if((startPoint - endPoint)<-200){
		console.log("아래로swipe");
		location.href="/throw/addkeyword.jsp"
	}
	if ( (end - start)>800 ){
		location.href="/throw/addkeyword.jsp?kno="+savekno
	}
	
})