package controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import dao.DirectoryDao;
import dto.DirDto;

/**
 * Servlet implementation class Directories
 */
@WebServlet("/directories")
public class Directories extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public Directories() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		int dno = Integer.parseInt(request.getParameter("dno")); 
		System.out.println("서블릿 dno : "+dno);
		
		ArrayList<DirDto> list = DirectoryDao.getInstance().getDirList(dno);
		System.out.println("서블릿 list : "+list);
		
		System.out.println(list);
		String jsonlist = mapper.writeValueAsString(list);
		System.out.println("jsonlist : "+jsonlist);
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(jsonlist);
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String dname = request.getParameter("dname");
		System.out.println("dname : "+dname);
		boolean result = DirectoryDao.getInstance().setDirectory(dname);
		response.getWriter().print(result);
		
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int dno = Integer.parseInt(request.getParameter("dno"));
		String dname = request.getParameter("dname");
		
		boolean result = DirectoryDao.getInstance().updateDirName(dno, dname);
		response.getWriter().print(result);
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int dno = Integer.parseInt(request.getParameter("dno"));
		System.out.println("dno : "+dno);
		
		boolean result = DirectoryDao.getInstance().deleteDir(dno);
		System.out.println("result : "+result);
		response.getWriter().print(result);
		
	}

}
