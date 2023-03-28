console.log('공통키워드js 실행')

function keywordClick(kno){
	console.log('keywordClick 함수 실행')
	location.href = "http://localhost:8080/throw/editKeyword.jsp?kno="+kno;
}