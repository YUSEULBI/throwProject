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
		int kno = Integer.parseInt(request.getParameter("kno"));
	%>
	<input type="hidden" class="kno" value="<%=kno%>">
	<div class="wrap"> <!-- 모든jsp 공통 -->
			<div class="titlearea"> <!-- 제목들어가는 구역 -->
				<div class="titleinputdiv">
					<input class="titleinput" type="text" value="폴더선택" disabled="disabled">
				</div>
			</div> 
			
			<div class="boxarea"> <!-- 디렉토리 or 키워드 들어가는 구역 -->
							
			</div>	<!-- boxarea -->
			
			<div class="selectdirbtn"></div>
			
	</div> <!-- wrap end -->
	
	
	<script src="/throw/js/updateKeywordToDir.js" type="text/javascript"></script>
</body>
</html>