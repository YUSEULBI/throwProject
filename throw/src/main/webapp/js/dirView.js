
// 디렉토리 제목 출력
	//jsp에서 url dno,dname 가져오기
let dno = document.querySelector('.dno').value;
let dname = document.querySelector('.dnamevalue').value;
document.querySelector('.titleinput').value = dname;

console.log("js실행시 dno : "+dno)
if ( dno == null ){
	document.querySelector('.titleinput').value = '최상위디렉토리'
	document.querySelector('.titleinput').disabled="disabled"
	
}
console.log("dno : "+dno)

// 하위 디렉토리 출력
subDirPrint();
function subDirPrint(){
	console.log('subDirPrint 실행')
	console.log('subDirPrint함수내 dno : '+dno)
	console.log('subDirPrint함수내 dname : '+dname)
	$.ajax({
		url: "/throw/directories/sub",
		method : "get",
		data : {"dno":dno},
		success : (r)=>{
			console.log('통신')
			console.log(r)
			
			html = ''
			r.forEach((o,i)=>{
				html +=`
						<div class="onebox">
							<div class="onecontent">
								<div class="onedirdeco"> <div class="dirdeco"></div>	</div>
								<div class="ondirbox">
									<div class="dirbox">
										<div onclick="dirselect('${o.dno}','${o.dname}')" class="dirname , dir${o.dno}">${o.dname}</div>
									</div>
								</div>
							</div>
						</div>
						`
			})
			html += `<div class="dir">	
						<div onclick="addSubDir('${dno}','${dname}')" class="addDirBtn"></div>
					</div>`
			
			html +=`
					<div class="onebox">
						<div class="onecontent">
							<div onclick="addSubDir('${dno}','${dname}')" class="addbuttonsort">
								<div class="addbutton">
									<div class="plustext">+</div>
								</div>
							</div>
						</div>
					</div>
					`
			document.querySelector('.boxarea').innerHTML = html
			getsubKeyword();
		}
	})
}
// 하위키워드 출력
function getsubKeyword(){
	$.ajax({
		url : "/throw/keyword",
		method : "get",
		data : { "gettype":3 , "dno":dno } , // gettype : 선택한 디렉토리 안의 키워드dto리스트 반환
		success:(r)=>{
			console.log(r)
			let html = ''
			r.forEach((o,i)=>{
				//html += `<div onclick="keywordClick(${o.kno})" class="dir dir${o.kno}">${o.kcontent}</div>`
				html += `
						<div class="onebox">
							<div class="onecontent">
								<div class="onekeywordsort"  onclick="keywordClick(${o.kno})">
									<div class="keywordtextbox">
										<div class="textdeco">
											<div class="texttopdeco , texttopdeco${o.kno}"></div>
											<div class="righttriangle , righttriangle${o.kno}"></div>
										</div>
										<div class="textbox , textbox${o.kno}">
											<div class="keywordtext" >${o.kcontent}	</div>
										</div>
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

// 하위디렉토리 새로만들기 jsp로 이동
function addSubDir( dno , dname ){
	location.href="/throw/addSubDir.jsp?dno="+dno+"&dname="+dname;
}

let savedno = 0; // dno 전역변수 저장
let savedname = null; // dname 전역변수 저장
let click = 0;	// 클릭했는지 상태확인용 전역변수
console.log( "click : "+click)
let deletebox = document.querySelector('.deletebox')

// 디렉토리 선택시 이동
function dirselect(dno , dname){
	
	
}

// 휴지통 클릭


deletebox.addEventListener('click' , (e)=>{
		console.log('휴지통클릭')
		$.ajax({
			url : "/throw/directories",
			method : "delete",
			data : {"dno":savedno },
			success : (r)=>{
				console.log('통신')
				console.log(r)
				if (r=='true'){
					console.log('디렉토리 삭제성공')
					location.href = "/throw/dirView.jsp?dno=1&dname=null";
				}else{
					console.log('디렉토리 삭제실패')
				}
			}
		})
	})
// 엔터 누르면 파일이름 바뀜
function keydownEnter(){
	let dname = document.querySelector('.titleinput').value
		console.log('dname : ' + dname)
		
		$.ajax({
			url : "/throw/directories",
			method : "put" ,
			data : {"dname":dname , "dno":dno},
			success : (r)=>{
				console.log('통신')
				console.log(r)
				if (r=='true'){
					console.log('디렉토리 이름변경 성공')
					document.querySelector('.dname').value = '';
					location.href = "/throw/dirView.jsp?dno="+dno+"&dname="+dname;
				}else{
					console.log('디렉토리 이름변경 실패')
				}
			}
		})
}	




function swipeup(){
	console.log("위로throw");
	location.href = "/throw/dirView.jsp?dno=1&dname=null";
}

function swipedown(){
	console.log("아래로swipe");
	location.href="/throw/keywords.jsp"
}

function longdrag(){
	
}