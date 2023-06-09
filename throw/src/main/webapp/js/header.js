/**
 * 
 */
console.log('js연결')

// 터치시작과 터치끝 y좌표
let startPoint = 0;
let endPoint = 0;

//함수실행시간 체크용 -- 몇초 터치중이었는지
let start = new Date();
let end = new Date();
console.log(end - start)


// 터치
window.addEventListener("touchstart",(e)=>{
	console.log("touchstart", e.touches[0].pageY);
	startPoint = e.touches[0].pageY; // 터치가 시작되는 위치 저장
	start = new Date();
})

// 터치가 끝나면
window.addEventListener("touchend",(e)=>{
	console.log("touchend",e.changedTouches[0].pageY);
	endPoint = e.changedTouches[0].pageY // 터치가 끝나는 위치 저장
	end = new Date();
	
	// 위로 스와이프(간격 200)
	if((startPoint-endPoint)>200){	swipeup();	}
	// 아래로 스와이프(간격 200)
	else if((startPoint - endPoint)<-200){ 	swipedown(); }
	// 터치홀드 0.8초
	if ( (end - start)>800 ){ longdrag(); }
})



// 엔터
document.addEventListener("keydown" , (e)=>{
	console.log(e.keyCode)
	if ( e.keyCode == 13 ){ 
		console.log('enter를 누름')
		keydownEnter()		
	}
})


// 휴지통 클릭시
//document.querySelector('.deletebtn').addEventListener("click" , (e)=>{
//	console.log('삭제 클릭')
//})

//document.querySelector('.editbtn').addEventListener("click" , (e)=>{
//	console.log('수정 클릭')
//})