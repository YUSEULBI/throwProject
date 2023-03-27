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
	<div class="wrap">
		<div class="titlearea"> <!-- 제목들어가는 구역 -->
				<div class="titleinputdiv">
					<input class="titleinput" type="text" value="2023" disabled="disabled">
				</div>
			</div> 
			
			<div class="boxarea"> <!-- 디렉토리 or 키워드 들어가는 구역 -->
						
			</div>	<!-- boxarea -->
		
		<div class="deletebox">
			삭제
		</div>
	</div>
	
	<script src="/throw/js/keywords.js" type="text/javascript"></script>
	
</body>
</html>