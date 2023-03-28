<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<link href="/throw/css/editKeyword.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	<%
		String kno = request.getParameter("kno");
	%>
	<input type="hidden" class="kno" value="<%=kno%>">
	<div class="wrap">
			<div class="titlearea"> <!-- 제목들어가는 구역 -->
				<div class="titleinputdiv">
					<input class="titleinput" type="text" value="키워드수정" disabled="disabled"">
				</div>
				<div onclick="editbtn()" class="editbtn">완료</div> 
			</div>
			
			
			<div class="boxarea"> <!-- 디렉토리 or 키워드 들어가는 구역 -->
				<textarea class="ktextarea" rows="" cols=""></textarea>
							
			</div>	<!-- boxarea -->
	</div>
	
	<script src="/throw/js/editKeyword.js" type="text/javascript"></script>
</body>
</html>