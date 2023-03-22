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
		int gettype = Integer.parseInt(request.getParameter("gettype"));
		System.out.println("gettype : "+gettype);
		if ( gettype == 1 ) {
			ArrayList<KeywordDto> list = KeywordDao.getInstance().getTodayKeyword();
			ObjectMapper mapper = new ObjectMapper();
			String jsonlist = mapper.writeValueAsString(list);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("applicaion/json");
			response.getWriter().print(jsonlist);
		}else if( gettype == 2 ) {
			int kno = Integer.parseInt(request.getParameter("kno"));
			KeywordDto dto = KeywordDao.getInstance().getKeyword(kno);
			ObjectMapper mapper = new ObjectMapper();
			String jsondto = mapper.writeValueAsString(dto);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("applicaion/json");
			response.getWriter().print(jsondto);
		}
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

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int kno = Integer.parseInt(request.getParameter("kno"));
		System.out.println("kno : "+kno);
		boolean result = false;
		int puttype = Integer.parseInt(request.getParameter("puttype"));
		System.out.println("puttype : "+puttype);
		if (puttype == 1) { // 소속 디렉토리가 없는 키워드를 디렉토리에 추가
			int dno = Integer.parseInt(request.getParameter("dno"));
			System.out.println("dno : "+dno);
			result = KeywordDao.getInstance().updateKeywordtoDir(dno, kno);
		}else if ( puttype == 2  ) { // 키워드명 변경
			String keyword = request.getParameter("keyword");
			System.out.println("keyword : "+keyword);
			result = KeywordDao.getInstance().updateKeywordContent(keyword, kno);
			System.out.println("result : "+result);
		}
		response.getWriter().print(result);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int kno = Integer.parseInt( request.getParameter("kno") );
		boolean result = KeywordDao.getInstance().deleteKeyword(kno);
		response.getWriter().print(result);
	}

}
