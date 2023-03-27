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
import dto.dirDto;

/**
 * Servlet implementation class SubDirectories
 */
@WebServlet("/directories/sub")
public class SubDirectories extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SubDirectories() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		int dno = Integer.parseInt(request.getParameter("dno")); 
		System.out.println("서블릿 dno : "+dno);
		
		ArrayList<dirDto> list = DirectoryDao.getInstance().getDirList(dno);
		System.out.println("서블릿 list : "+list);
		
		ObjectMapper mapper = new ObjectMapper();
		String jsonList = mapper.writeValueAsString(list);
		System.out.println("서블릿 jsonlist : "+jsonList);
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(jsonList);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int dno = Integer.parseInt(request.getParameter("dno")); System.out.println("dno : "+dno);
		String dname = request.getParameter("dname"); System.out.println("dname : "+dname);
		
		boolean result = DirectoryDao.getInstance().setSubDir(dno, dname);
		response.getWriter().print(result);
		
		
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
