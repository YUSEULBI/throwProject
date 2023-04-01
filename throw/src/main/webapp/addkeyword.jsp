<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="/throw/css/addkeyword.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	<%  
		String kno = request.getParameter("kno");
	%>
	<input type="hidden" class="kno" value="<%=kno%>">
	<div class="wrap">
		<div class="keryworddiv">
				<div class="inputdiv">
					<div class="mark">“</div>
					<input onkeyup="keywordwrite()" class="keyword movekeyword" type="text" placeholder="입력하세요">
<!-- 					<textarea onkeyup="keywordwrite()" class="keyword movekeyword" rows="1" placeholder="입력하세요"></textarea> -->
					<div class="mark">”</div>
				</div>

		</div>
	</div>
	
	<script src="/throw/js/addkeyword.js" type="text/javascript"></script>
</body>
</html>