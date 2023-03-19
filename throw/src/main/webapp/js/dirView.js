
// 디렉토리 제목 출력
let dno = document.querySelector('.dno').value;
let dname = document.querySelector('.dnamevalue').value;
document.querySelector('.dname').value = dname;
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
				html += `<div onclick="dirselect('${o.dno}','${o.dname}')" class="dir">${o.dname}</div>`
			})
			html += `<div class="dir">	
						<div onclick="addSubDir('${dno}','${dname}')" class="addDirBtn"></div>
					</div>`
			document.querySelector('.content').innerHTML = html
		}
	})
}

// 하위디렉토리 추가하는 jsp로 이동
function addSubDir( dno , dname ){
	location.href="/throw/addSubDir.jsp?dno="+dno+"&dname="+dname;
}

// 디렉토리 선택시
function dirselect(dno , dname){
	console.log('dno : '+dno)
	console.log("/throw/dirView.jsp?dno="+dno+"&dname="+dname)
	location.href = "/throw/dirView.jsp?dno="+dno+"&dname="+dname;
	
}

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