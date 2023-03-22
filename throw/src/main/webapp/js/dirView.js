
// 디렉토리 제목 출력
let dno = document.querySelector('.dno').value;
let dname = document.querySelector('.dnamevalue').value;
document.querySelector('.dname').value = dname;

console.log("js실행시 dno : "+dno)
if ( dno == 1 ){
	document.querySelector('.dname').value = '최상위디렉토리'
	document.querySelector('.dname').disabled="disabled"
	
}
console.log("dno : "+dno)

// 하위 디렉토리 출력
subDirPrint();
function subDirPrint(){
	console.log('subDirPrint 실행')
	console.log('subDirPrint함수내 dno : '+dno)
	console.log('subDirPrint함수내 dname : '+dname)
	$.ajax({
		url: "/throw/directories/sub",
		method : "get",
		data : {"dno":dno},
		success : (r)=>{
			console.log('통신')
			console.log(r)
			
			html = ''
			r.forEach((o,i)=>{
				html += `<div onclick="dirselect('${o.dno}','${o.dname}')" class="dir , dir${o.dno}">${o.dname}</div>`
			})
			html += `<div class="dir">	
						<div onclick="addSubDir('${dno}','${dname}')" class="addDirBtn"></div>
					</div>`
			document.querySelector('.content').innerHTML = html
			getTodayKeyword();
		}
	})
}
// 하위키워드 출력
function getTodayKeyword(){
	$.ajax({
		url : "/throw/keyword",
		method : "get",
		data : { "gettype":3 , "dno":dno } ,
		success:(r)=>{
			console.log(r)
			let html = ''
			r.forEach((o,i)=>{
				html += `<div onclick="keywordClick(${o.kno})" class="dir dir${o.kno}">${o.kcontent}</div>`
			})
			
			document.querySelector('.content').innerHTML += html
		}
	})
}

// 하위디렉토리 새로만들기 jsp로 이동
function addSubDir( dno , dname ){
	location.href="/throw/addSubDir.jsp?dno="+dno+"&dname="+dname;
}

let savedno = 0; // dno 전역변수 저장
let savedname = null; // dname 전역변수 저장
let click = 0;	// 클릭했는지 상태확인용 전역변수
console.log( "click : "+click)

// 디렉토리 선택시 이동
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
					location.href = "/throw/dirView.jsp?dno=1&dname=superdir";
				}else{
					console.log('디렉토리 삭제실패')
				}
			}
		})
	})
// 엔터 누르면 파일이름 바뀜
document.addEventListener("keydown" , (e)=>{
	console.log(e.keyCode)
	if ( e.keyCode == 13 ){
		console.log('enter를 누름')
		let dname = document.querySelector('.dname').value
		console.log('dname : ' + dname)
		
		$.ajax({
			url : "/throw/directories",
			method : "put" ,
			data : {"dname":dname , "dno":dno},
			success : (r)=>{
				console.log('통신')
				console.log(r)
				if (r=='true'){
					console.log('디렉토리 이름변경 성공')
					document.querySelector('.dname').value = '';
					location.href = "/throw/dirView.jsp?dno="+dno+"&dname="+dname;
				}else{
					console.log('디렉토리 이름변경 실패')
				}
			}
		})
	}
})



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