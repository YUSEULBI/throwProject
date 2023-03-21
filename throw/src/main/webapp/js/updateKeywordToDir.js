

// 소속디렉토리가 없는 키워드를 디렉토리에 넣기
function updateKeywordtoDir(){
	$.ajax({
		url : "/throw/keyword",
		method : "put",
		data : { "dno":dno , "kno":kno } ,
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