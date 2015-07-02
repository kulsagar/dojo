<%@page import="org.json.simple.JSONObject"%>
<%
	response.setHeader("Cache-Control","no-cache");
	response.setHeader("Pragma","no-cache");
	response.setContentType("text/xml");
	String user = request.getParameter("value");
	System.out.println("User :: "+user);
	JSONObject object = new JSONObject();
	if(user.equalsIgnoreCase("sagar")){
		object.put("result",false);
	}
	else{
		object.put("result",true);
	}
	
	out.print(object);
%>