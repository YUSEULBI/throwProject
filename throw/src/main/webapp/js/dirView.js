
// 키워드의 폴더 선택
//location.href="/throw/dirView.jsp?dno=0?kno="+kno;
//jsp에서 url dno , kno 가져오기
	let dno = document.querySelector('.dno').value;
	console.log("js실행시 dno : "+dno)
	let kno = document.querySelector('#kno').value;
	console.log("js실행시 kno : "+kno)


let selectdirno = 0; // 키워드 넣을 디렉토리 선택시 사용할 전역변수

let dnoinfo = {}
// dnoinfo.dno / dnoinfo.dname / dnoinfo.parent_dno / dnoinfo.ddate

if ( dno == 0 ){ //최상위 삭제버튼 감추기
	document.querySelector('.dirdelete').style.display = "none";
}

// 키워드의 디렉토리 선택 화면
selectbtnprint();
function selectbtnprint(){
	if ( kno > 0 ){
		document.querySelector('.selectdir').style.display = "block";
	}
}
// 디렉토리 선택 누르면 키워드 디렉토리 선택됨
function selectdir(){

	$.ajax({
		url : "/throw/keyword",
		method : "put",
		data : { "dno":selectdirno , "kno":kno , "puttype":1 } , //puttype 1번 키워드를디렉토리에 넣기 2번 키워드수정하기
		success : (r)=>{
			console.log(r)
			if( r =='true'){
				console.log('디렉토리에 키워드 추가 성공')
				location.href = "/throw/dirView.jsp?dno="+selectdirno+"&kno=0";
			}else{
				console.log('디렉토리에 키워드 추가 실패')
			}
		}
	})

}

// 디렉토리 제목 출력 // 하위폴더는 삭제버튼
dirNamePrint();
function dirNamePrint(){
			// 디렉토리 제목 -----------------------------------------------------			
		if ( dno == 0 ){ // 최상위폴더
			document.querySelector('.titleinput').value = '최상위디렉토리'
			document.querySelector('.titleinput').disabled="disabled"
		}else{ // 하위폴더
			// 폴더이름 구하기
			$.ajax({
				url: "/throw/directories",
				method : "get",
				data : {"dno":dno , "gettype":2},
				async : false ,
				success : (r)=>{
					console.log('통신')
					console.log(r)
					dnoinfo = r;
					// r.dno / r.dname / r.parent_dno / r.ddate
					document.querySelector('.titleinput').value = r.dname;
				}
			})
		}
}


// 디렉토리 출력
dirPrint();
function dirPrint(){
	console.log('subDirPrint 실행')
	console.log('subDirPrint함수내 dno : '+dno)

	$.ajax({
		url: "/throw/directories",
		method : "get",
		data : {"dno":dno , "gettype":1},
		async : false ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			

			// 하위디렉토리 출력 -----------------------------------------------------
			html = ''
			r.forEach((o,i)=>{
				//임시 디렉토리 색깔 -> DB처리해야함
				let dirimg = '';
				console.log("(i+1)%1 : "+(i+1)%1)
				if( (i+1)/1 == 1 ){ dirimg = '01'
				}else if( (i+1)/2 == 1 ){ dirimg = '02'
				}else if( (i+1)/3 == 1 ){ dirimg = '03'
				}else if( (i+1)/4 == 1 ){ dirimg = '04'
				}else if( (i+1)/5 == 1 ){ dirimg = '05'
				}else if( (i+1)/6 == 1 ){ dirimg = '06'
				}else if( (i+1)/7 == 1 ){ dirimg = '07' }
				console.log("dirimg : "+dirimg)
				
				html +=`
						<div class="onebox">
							<div class="onecontent" onclick="dirselect('${o.dno}','${o.dname}')">
								<img class="keyword%{o.kno}" src="/throw/img/directory/directory${dirimg}.png">
								<div class="dirnamediv">
									<div class="dirname , dir${o.dno}">${o.dname}</div>
								</div>
							</div>
						</div>
						`
			}) // forEach end
			
			// 하위디렉토리 추가버튼 -----------------------------------------------------
			html +=`
					<div class="onebox">
						<div class="onecontent">
							<div onclick="addSubDir()" class="addbuttonsort">
								<div class="addbutton">
									<div class="plustext">+</div>
								</div>
							</div>
						</div>
					</div>
					`
			document.querySelector('.boxarea').innerHTML = html
			if ( kno == 0 ){ // 키워드의 디렉토리 선택창이 아니면 키워드 출력
				getKeyword();
			}
		} // success end
	}) // ajax end
} // dirPrint 함수 end

// 하위키워드 출력
function getKeyword(){
	console.log('getKeyword() 실행')
	$.ajax({
		url : "/throw/keyword",
		method : "get",
		data : { "gettype":3 , "dno":dno } , // gettype : 선택한 디렉토리 안의 키워드dto리스트 반환
		success:(r)=>{
			console.log('getKeyword()'+r)
			let html = ''
			r.forEach((o,i)=>{
				html += `
						<div class="onebox">
							<div class="onecontent">
								<div class="onekeywordsort"  onclick="keywordClick(${o.kno})">
									<img class="keyword${o.kno}" src="/throw/img/keyword.png">
									<div class="keywordtextdiv">
										<div class="keywordtext">${o.kcontent}</div>
									</div>
								</div>
							</div>
						</div>
						`
			})
			
			document.querySelector('.boxarea').innerHTML += html
		}
	})
}

// +버튼 클릭시 하위디렉토리 새로만들기 jsp로 이동
function addSubDir( ){
	location.href="/throw/addSubDir.jsp?dno="+dno;
}

let savedno = 0; // dno 전역변수 저장
let savedname = null; // dname 전역변수 저장
let click = 0;	// 클릭했는지 상태확인용 전역변수
console.log( "click : "+click)
let deletebox = document.querySelector('.deletebox')


// 디렉토리 선택시 이동 또는 키워드 저장할 디렉토리선택
function dirselect(dno,dname){
	if ( kno == 0 ){ // 키워드의 디렉토리 선택창이 아니면 디렉토리이동
		location.href = "/throw/dirView.jsp?dno="+dno+"&kno=0";
	}else{
		document.querySelector('.selectdir').innerHTML = dname + '디렉토리 선택'
		selectdirno = dno; 
	}
}

//디렉토리삭제 클릭
function dirdelete(){
	$.ajax({
		url: "/throw/directories",
		method : "delete" ,
		data : {"dno":dno} ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			if ( r == 'true'){ 
				// dnoinfo.dno / dnoinfo.dname / dnoinfo.parent_dno / dnoinfo.ddate
				alert( dnoinfo.dname+' 디렉토리 삭제 성공')
				location.href = "/throw/dirView.jsp?dno=0";	
			}
			
		}
	})
}


	
// 엔터 누르면 파일이름 바뀜
function keydownEnter(){
	let dname = document.querySelector('.titleinput').value
		console.log('dname : ' + dname)
		
		$.ajax({
			url : "/throw/directories",
			method : "put" ,
			data : {"dname":dname , "dno":dno},
			async : false ,
			success : (r)=>{
				console.log('통신')
				console.log(r)
				if (r=='true'){
					console.log('디렉토리 이름변경 성공')
					location.href = "/throw/dirView.jsp?dno="+dno;
				}else{
					console.log('디렉토리 이름변경 실패')
				}
			}
		})
}	




function swipeup(){
	console.log("위로throw");
	
}

function swipedown(){
	console.log("아래로swipe");
	location.href="/throw/keywords.jsp"
}

function longdrag(){
	
}


/* 보류 */

// 휴지통 클릭
//deletebox.addEventListener('click' , (e)=>{
//		console.log('휴지통클릭')
//		$.ajax({
//			url : "/throw/directories",
//			method : "delete",
//			data : {"dno":savedno },
//			success : (r)=>{
//				console.log('통신')
//				console.log(r)
//				if (r=='true'){
//					console.log('디렉토리 삭제성공')
//					location.href = "/throw/dirView.jsp?dno=1&dname=null";
//				}else{
//					console.log('디렉토리 삭제실패')
//				}
//			}
//		})
//	})