console.log('js 실행')


document.addEventListener("keydown" , (e)=>{
	console.log(e.keyCode)
	if ( e.keyCode == 13 ){
		console.log('enter를 누름')
		document.querySelector('.fname').value;
		
	}
})