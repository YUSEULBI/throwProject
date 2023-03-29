console.log('keywords 실행')

let knolist = []
let savekno = 0 //키워드 삭제, 키워드수정페이지 이동용 전역변수
let deletebox = document.querySelector('.deletebox') //휴지통 전역변수
getToday();
getTodayKeyword();
// 오늘 날짜
function getToday(){
	console.log('getToday 실행')
	$.ajax({
		url : "/throw/keyword",
		method : "get",
		data : { "gettype":4 } ,
		async : false ,
		success:(r)=>{
			console.log(r)
			console.log('오늘날짜 : '+r)
			document.querySelector('.titleinput').value = r
		}
	})
}

// 오늘 생성한 키워드 출력
function getTodayKeyword(){
	$.ajax({
		url : "/throw/keyword",
		method : "get",
		async : false ,
		data : { "gettype":1 } ,
		success:(r)=>{
			console.log(r)
			let html = ''
			r.forEach((o,i)=>{
				knolist.push(o.kno);
				html += `
						<div class="onebox">
							<div class="onecontent">
								<div class="onekeywordsort" onclick="keywordClick(${o.kno})">
									<div class="keywordtextbox">
										<div class="textdeco textdeco${o.kno}">
											<div class="texttopdeco texttopdeco${o.kno}"></div>
											<div class="righttriangle righttriangle${o.kno}"></div>
										</div>
										<div class="textbox textbox${o.kno}">
											<div class="keywordtext" >
												${o.kcontent}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						`
			})
			
			document.querySelector('.boxarea').innerHTML = html
		}
	})
}





// 휴지통박스 선택시 키워드 삭제
deletebox.addEventListener("click",(e)=>{
	console.log('deletebox 클릭')
	$.ajax({
		url : "/throw/keyword" ,
		method : "delete" ,
		data : {"kno":savekno},
		success:(r)=>{
			console.log('delete 통신')
			console.log(r)
			if ( r == 'true'){
				console.log('키워드 삭제성공')
				location.href="/throw/keywords.jsp";
			}else{
				console.log('키워드 삭제실패')
			}
		}
	})
})



	
function swipeup(){
	console.log("위로throw");
	location.href = "/throw/dirView.jsp?dno=0&kno=0";
}

function swipedown(){
	console.log("아래로swipe");
	location.href="/throw/addkeyword.jsp"
}

function longdrag(){
	location.href="/throw/addkeyword.jsp?kno="+savekno
}

