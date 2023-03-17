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
							<div onclick="dirselect(${o.dno})" class="dir">${o.dname}</div>
							`
				})
				document.querySelector('.dirwrap').innerHTML = html;
				
			}
		})
}

function dirselect(dno){
	console.log('dno : '+dno)
}