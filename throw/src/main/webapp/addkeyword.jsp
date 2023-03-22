<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<link href="/throw/css/directory.css" rel="stylesheet">
	<link href="/throw/css/addkeyword.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	<%  
		String kno = request.getParameter("kno");
	%>
	<input type="hidden" class="kno" value="<%=kno%>">
	<div class="wrap">
		<div class="dnamediv">
<!-- 			<div class="movekeyword"> -->
				<input class="dname movekeyword" type="text" placeholder="입력하세요">
<!-- 			</div> -->
		</div>
	</div>
	
	<script src="/throw/js/addkeyword.js" type="text/javascript"></script>
</body>
</html>