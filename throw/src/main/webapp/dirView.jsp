<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/throw/css/dirView.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	
	
	<%
		// 선택한 파일명 가져오기
		String dno = request.getParameter("dno");
		System.out.println("dirview.jsp dno : "+dno);
		// 키워드 디렉토리 선택시
		String kno = request.getParameter("kno");
		System.out.println("dirview.jsp kno : "+kno);
		
	%>
	<input type="hidden" class="dno" value="<%=dno%>">
	<input type="hidden" class="kno" value="<%=kno%>">
	
	<div class="wrap">
		<!-- ------------------------------------------------ -->
		<div class="titlearea"> <!-- 제목들어가는 구역 -->
			<div class="titleinputdiv">
				<input class="titleinput" type="text">
			</div>
			<div onclick="dirdelete()" class="dirdelete"> 디렉토리 삭제 </div>
		</div>
		<!-- ------------------------------------------------ -->
		<div class="boxarea">
		</div>
		<!-- ------------------------------------------------ -->
		<!-- 휴지통 menuarea display:none 상태임 -->
		<div class="menuarea">
			<div class="deletebtn"> 삭제	</div>
			<div class="editbtn"> 수정 </div>
		</div> <!-- menuarea end -->
		<!-- ------------------------------------------------ -->
		<div onclick="selectdir()" class="selectdir">
			디렉토리 선택
		</div>
	</div>
	
	
	
	<script src="/throw/js/dirView.js" type="text/javascript"></script>
	
</body>
</html>