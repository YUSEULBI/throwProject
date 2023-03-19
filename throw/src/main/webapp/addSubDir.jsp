<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/throw/css/directory.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	<% 
		String dno = request.getParameter("dno");
		String parent_dno = request.getParameter("dname");
	%>
	<input type="hidden" class="dno" value="<%=dno%>">
	<input type="hidden" class="parent_dno" value="<%=parent_dno%>">
	<div class="wrap">
		<div class="dnamediv">
			<input class="dname" type="text" placeholder="파일명">
		</div>
	</div>
	
	<script src="/throw/js/addSubDir.js" type="text/javascript"></script>
</body>
</html>