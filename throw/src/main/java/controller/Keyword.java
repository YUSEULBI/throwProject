package controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import dao.KeywordDao;
import dto.KeywordDto;

/**
 * Servlet implementation class Keyword
 */
@WebServlet("/keyword")
public class Keyword extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Keyword() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ArrayList<KeywordDto> list = KeywordDao.getInstance().getTodayKeyword();
		ObjectMapper mapper = new ObjectMapper();
		String jsonlist = mapper.writeValueAsString(list);
		response.setCharacterEncoding("UTF-8");
		response.setContentType("applicaion/json");
		response.getWriter().print(jsonlist);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int ktype = Integer.parseInt(request.getParameter("ktype")); System.out.println("ktype : "+ktype);
		String keyword = request.getParameter("keyword");	System.out.println("keyword : "+keyword);
		
		int result = KeywordDao.getInstance().setKeyword(keyword, ktype);
		response.getWriter().print(result);
	}

	// 소속 디렉토리가 없는 키워드를 디렉토리에 추가
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int dno = Integer.parseInt(request.getParameter("dno"));
		int kno = Integer.parseInt(request.getParameter("kno"));
		
		boolean result = KeywordDao.getInstance().updateKeywordtoDir(dno, kno);
		response.getWriter().print(result);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
