console.log('js연결')

superDirPrint();

function superDirPrint(){
	
	$.ajax({
			url : "/throw/directories",
			method : "get" ,
			success : (r)=>{
				console.log('통신')
				console.log(r)
				html ='';
				r.forEach((o,i)=>{
					console.log(o.dname)
					html += `
							<div onclick="dirselect('${o.dno}','${o.dname}')" class="dir , dir${o.dno}">${o.dname}</div>
							`
				})
				html += `<div class="dir">	
						<div onclick="addDir()" class="addDirBtn"></div>
					</div>`
				document.querySelector('.dirwrap').innerHTML = html;
				
			}
		})
}
let savedno = 0;
let savedname = null;
let click = 0;
console.log( "click : "+click)
// 디렉토리 선택시
function dirselect(dno , dname){
	console.log('dno : '+dno)
	// 이미 클릭된 경우 다시 클릭 하면 링크 이동
	console.log ('click : '+click)
	if(click == 0){
	
		//클릭시 색바뀌고 휴지통 나오기
		document.querySelector('.deletebox').style.display = 'block'
		document.querySelector('.dir'+dno).style.backgroundColor = 'white'
		document.querySelector('.dir'+dno).style.color = 'black'
		savedno = dno
		savedname = dname
		click = 1;
		return;
		//파일 이동
	}else if ( click == 1 ){
		console.log("/throw/dirView.jsp?dno="+dno+"&dname="+dname)
		location.href = "/throw/dirView.jsp?dno="+dno+"&dname="+dname;
		return;
	}
	return;
}

// 휴지통 클릭
let deletebox = document.querySelector('.deletebox')
deletebox.addEventListener('click' , (e)=>{
	console.log('휴지통클릭')
	$.ajax({
		url : "/throw/directories",
		method : "delete",
		data : {"dno":savedno },
		success : (r)=>{
			console.log('통신')
			console.log(r)
			if (r=='true'){
				console.log('디렉토리 삭제성공')
				location.href="/throw/dirList.jsp";
			}else{
				console.log('디렉토리 삭제실패')
			}
		}
	})
})



// 최상위 디렉토리추가
function addDir(){
	location.href = "/throw/directory.jsp";
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
		
	}else if(startPoint < endPoint){
		console.log("아래로swipe");
		location.href="/throw/keywords.jsp"
	}
})