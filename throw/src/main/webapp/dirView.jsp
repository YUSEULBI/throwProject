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
	%>
	<input type="hidden" class="dno" value="<%=dno%>">
	
	<div class="wrap">
		<!-- ------------------------------------------------ -->
		<div class="titlearea"> <!-- 제목들어가는 구역 -->
			<div class="titleinputdiv">
				<input class="titleinput" type="text" value="2023-03-05">
			</div>
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
	</div>
	
	
	
	<script src="/throw/js/dirView.js" type="text/javascript"></script>
	<script src="/throw/js/commonKeywordDir.js" type="text/javascript"></script>
</body>
</html>