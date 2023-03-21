<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@include file="/header.jsp" %>
	<%
		int kno = Integer.parseInt(request.getParameter("kno"));
	%>
	<input type="hidden" class="kno" value="<%=kno%>">
	<div class="wrap">
		
	</div>
	
	
	<script src="/throw/js/updateKeywordToDir.js" type="text/javascript"></script>
</body>
</html>