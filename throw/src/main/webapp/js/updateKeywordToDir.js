
let kno = document.querySelector('.kno').value

// 최상위디렉토리 출력
superDirPrint();
function superDirPrint(){
	$.ajax({
			url : "/throw/directories/sub",
			method : "get" ,
			data : {"dno":1} ,
			success : (r)=>{
				console.log('통신')
				console.log(r)
				html = ''
			r.forEach((o,i)=>{
				html += `<div onclick="dirselect('${o.dno}','${o.dname}')" class="dir , dir${o.dno}">${o.dname}</div>`
			})
			
			document.querySelector('.content').innerHTML = html
				
			}
		})
}

function dirselect(dno,dname){
	
	updateKeywordtoDir( dno , dname )
}

// 소속디렉토리가 없는 키워드를 디렉토리에 넣기
function updateKeywordtoDir( dno , dname ){
	$.ajax({
		url : "/throw/keyword",
		method : "put",
		data : { "dno":dno , "kno":kno , "puttype":1 } , //puttype 1번 키워드를디렉토리에 넣기 2번 키워드수정하기
		success : (r)=>{
			console.log(r)
			if( r =='true'){
				console.log('디렉토리에 키워드 추가 성공')
				location.href = "/throw/dirView.jsp?dno="+dno+"&dname="+dname;
			}else{
				console.log('디렉토리에 키워드 추가 실패')
			}
		}
	})
}