console.log('js연결')

dir_Print();

function dir_Print(){
	
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

// 디렉토리 선택시
function dirselect(dno , dname){
	console.log('dno : '+dno)
	console.log("/throw/dirView.jsp?dno="+dno+"&dname="+dname)
	location.href = "/throw/dirView.jsp?dno="+dno+"&dname="+dname;
	
}
// 최상위 디렉토리추가
function addDir(){
	location.href = "/throw/directory.jsp";
}