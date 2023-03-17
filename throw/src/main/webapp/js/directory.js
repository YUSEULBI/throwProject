console.log('js 실행')


document.addEventListener("keydown" , (e)=>{
	console.log(e.keyCode)
	if ( e.keyCode == 13 ){
		console.log('enter를 누름')
		let dname = document.querySelector('.dname').value;
		console.log('dname : ' + dname)
		
		$.ajax({
			url : "/throw/directories",
			method : "post" ,
			data : {"dname":dname},
			success : (r)=>{
				console.log('통신')
				console.log(r)
				if (r=='true'){
					console.log('디렉토리추가성공')
					document.querySelector('.dname').value = '';
					location.href="/throw/list.jsp";
				}else{
					console.log('디렉토리추가실패')
				}
			}
		})
	}
})