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

window.addEventListener("touchend",(e)=>{
	console.log("touchend",e.changedTouches[0].pageY);
	endPoint = e.changedTouches[0].pageY // 터치가 끝나는 위치 저장
	end = new Date();
})

window.addEventListener("touchend",(e)=>{

	if((startPoint-endPoint)>200){
		swipeup();
	}else if((startPoint - endPoint)<-200){
		swipedown();
	}
	if ( (end - start)>800 ){
		longdrag();
	}
	
})