getTodayKeyword();
function getTodayKeyword(){
	$.ajax({
		url : "/throw/keyword",
		method : "get",
		success:(r)=>{
			console.log(r)
			console.log(r[0].kdate)
			document.querySelector('.kdate').innerHTML = r[0].kdate
			let html = ''
			r.forEach((o,i)=>{
				html += `<div class="dir">${o.kcontent}</div>`
			})
			
			document.querySelector('.content').innerHTML = html
		}
	})
}

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
		location.href="/throw/dirList.jsp";
	}else if(startPoint < endPoint){
		console.log("아래로swipe");
		location.href="/throw/addkeyword.jsp"
	}
})