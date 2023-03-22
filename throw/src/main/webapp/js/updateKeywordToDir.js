
let kno = document.querySelector('.kno').value

// 최상위디렉토리 출력
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
							<div onclick="dirselect('${o.dno}','${o.dname}')" class="dir">${o.dname}</div>
							`
				})
				html += `<div class="dir">	
						<div onclick="addDir()" class="addDirBtn"></div>
					</div>`
				document.querySelector('.dirwrap').innerHTML = html;
				
			}
		})
}


// 소속디렉토리가 없는 키워드를 디렉토리에 넣기
function updateKeywordtoDir(){
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