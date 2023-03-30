console.log('editKeyword js 실행')

// 필요한 경로 : http://localhost:8080/throw/editKeyword.jsp?kno=1
// 키워드 수정완료시 이동경로 
// [상위폴더 없으면] location.href = "/throw/dirView.jsp?dno=0&kno=0";
// [상위폴더 있으면] location.href = "/throw/dirView.jsp?dno="+r.dno+"&kno=0";
// 선택한 키워드불러오기 위해 kno가 필요
let kno = document.querySelector('.kno').value;

getKeyword();
function getKeyword(){
	console.log("kno : "+kno)
	$.ajax({
		url : "/throw/keyword",
		method : "get" ,
		data : {"kno":kno , "gettype":2} ,
		success:(r)=>{
			console.log('통신')
			console.log(r)
			document.querySelector('.ktextarea').value = r.kcontent
		}
	})
}

// 완료버튼을 누르면 키워드수정
function keywordeditbtn(){
	let keyword = document.querySelector('.ktextarea').value
	console.log("keyword : "+keyword)
	
	$.ajax({
		url : "/throw/keyword",
		method : "put" ,
		data : {"kno":kno , "keyword":keyword ,"puttype":2} ,
		async : false ,
		success:(r)=>{
			console.log('통신')
			console.log(r)
			if ( r=='true'){
				alert('키워드 변경성공')
				// 키워드 수정 성공 후 키워드 소속 폴더내 dirview로 이동
				console.log('r.dno : '+r.dno)
				console.log(r.dno == undefined)
				if ( r.dno == undefined ){ // 부모 폴더 없으면
					location.href = "/throw/dirView.jsp?dno=0&kno=0";
				}else{ // 부모 폴더 없으면
					location.href = "/throw/dirView.jsp?dno="+r.dno+"&kno=0";
				}
			}else{
				alert('키워드 변경실패')
			}
		}
	})
}


function keyworddeletebtn(){
	$.ajax({
		url : "/throw/keyword",
		method : "delete" ,
		data : {"kno":kno } ,
		async : false ,
		success:(r)=>{
			console.log('통신')
			console.log(r)
			if ( r=='true'){
				alert('키워드 삭제성공')
				location.href = "/throw/dirView.jsp?dno=0&kno=0";
			}else{
				alert('키워드 삭제실패')
			}
		}
	})
	
}	