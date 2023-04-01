console.log('addSubDir js 실행')

let dno = document.querySelector('.dno').value
console.log('dno : '+dno)
//자동포커스
document.querySelector('.dname').focus();


function keydownEnter(){
	console.log('enter를 누름')
		let dname = document.querySelector('.dname').value;
		console.log('dname : ' + dname)
		
		$.ajax({
			url : "/throw//directories",
			method : "post" ,
			data : {"dno":dno ,"dname":dname},
			success : (r)=>{
				console.log('통신')
				console.log(r)
				if (r=='true'){
					console.log('디렉토리추가성공')
					document.querySelector('.dname').value = '';
					location.href = "/throw/dirView.jsp?dno="+dno+"&kno=0";
				}else{
					console.log('디렉토리추가실패')
				}
			}
		})
}
