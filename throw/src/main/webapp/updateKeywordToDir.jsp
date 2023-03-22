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
	<div class="wrap">
		<div class="dirwrap">
			<div class="content">
			</div>
		</div>
	</div>
	
	
	<script src="/throw/js/updateKeywordToDir.js" type="text/javascript"></script>
</body>
</html>