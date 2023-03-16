console.log('js연결')

dir_Print();

function dir_Print(){
	
	$.ajax({
			url : "/throw/directories",
			method : "get" ,
			success : (r)=>{
				console.log('통신')
				console.log(r)
				
			}
		})
}