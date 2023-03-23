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
		String dname = request.getParameter("dname");
	%>
	<input type="hidden" class="dno" value="<%=dno%>">
	<input type="hidden" class="dnamevalue" value="<%=dname%>">
	
	<div class="wrap">
		<div class="dirViewDiv">
			<div class="dnameDiv">
				<input class="dname" type="text">
			</div>
			<div class="content">
			
			
				
				
			</div>
		</div>
		
		<div class="deletebox">
			삭제
		</div>
	</div>
	
	
	
	<script src="/throw/js/dirView.js" type="text/javascript"></script>
	<script src="/throw/js/commonKeywordDir.js" type="text/javascript"></script>
</body>
</html>