console.log('addSubDir js 실행')

let dno = document.querySelector('.dno').value
console.log('dno : '+dno)
//자동포커스
document.querySelector('.dname').focus();

document.addEventListener("keydown" , (e)=>{
	console.log('이벤트리스너 함수내 dno :'+dno)
	console.log(e.keyCode)
	if ( e.keyCode == 13 ){
		console.log('enter를 누름')
		let dname = document.querySelector('.dname').value;
		console.log('dname : ' + dname)
		
		$.ajax({
			url : "/throw/directories/sub",
			method : "post" ,
			data : {"dno":dno ,"dname":dname},
			success : (r)=>{
				console.log('통신')
				console.log(r)
				if (r=='true'){
					console.log('서브디렉토리추가성공')
					document.querySelector('.dname').value = '';
					let parent_dno = document.querySelector('.parent_dno').value;
					location.href = "/throw/dirView.jsp?dno="+dno+"&dname="+parent_dno;
				}else{
					console.log('서브디렉토리추가실패')
				}
			}
		})
	}
})