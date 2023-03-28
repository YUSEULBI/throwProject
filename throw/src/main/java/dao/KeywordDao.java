package dao;

import java.sql.Statement;
import java.util.ArrayList;

import dto.KeywordDto;

public class KeywordDao extends Dao {
	
	private static KeywordDao dao = new KeywordDao();
	private KeywordDao() {}
	public static KeywordDao getInstance() { return dao;}
	
	// 키워드 저장
	public int setKeyword( String keyword , int ktype ) {
		String sql = "insert into keyword( kcontent , ktype ) values( ? , ? );";
		try {
			ps = con.prepareStatement(sql , Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, keyword);
			ps.setInt(2, ktype);
			int count = ps.executeUpdate();
			rs = ps.getGeneratedKeys();
			if ( count == 1 ) { 
				if (rs.next()) {return rs.getInt(1);}
			}
		} catch (Exception e) { System.out.println(e);	}
		return 0;
	}
	
	// 오늘날짜 키워드 출력
	public ArrayList<KeywordDto> getTodayKeyword(){
		ArrayList<KeywordDto> list = new ArrayList<>();
		String sql = "select * from keyword where date_format(kdate,'%Y-%m-%d') = curdate();";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while ( rs.next() ) {
				System.out.println("rs담기");
				 //String kdate = (String)rs.getObject(3);
				KeywordDto dto = new KeywordDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getInt(5));
				System.out.println(dto);
				list.add(dto);
			}
		} catch (Exception e) {System.out.println("오늘날짜키워드출력 예외 : "+e);		}
		return list;
	}
	
	// 오늘날짜 출력
	public Object getToday() {
		String sql = "select curdate()";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if ( rs.next() ) {
				return rs.getObject(1); }
		} catch (Exception e) {System.out.println("오늘날짜출력 예외 : "+e);		}
		return null;
	}
	
	// 선택한 디렉토리에 키워드 추가
	public boolean updateKeywordtoDir( int dno , int kno ) {
		String sql = "update keyword set dno = ? where kno = ?";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, dno);
			ps.setInt(2, kno);
			int count = ps.executeUpdate();
			if ( count == 1 ) { return true; }
		} catch (Exception e) { System.out.println(e);	}
		return false;
	}
	
	// 선택한 키워드 삭제
	public boolean deleteKeyword( int kno ) {
		String sql = "delete from keyword where kno = "+kno;
		try {
			ps = con.prepareStatement(sql);
			int count = ps.executeUpdate();
			if ( count == 1 ) {return true;}
		} catch (Exception e) { System.out.println(e);	}
		return false;
	}
	
	// 키워드명 변경
	public boolean updateKeywordContent( String keyword , int kno ) {
		String sql = "update keyword set kcontent = '"+keyword+"' where kno = "+kno+" ";
		System.out.println("sql : "+sql);
		try {
			ps = con.prepareStatement(sql);
			int count = ps.executeUpdate();
			if ( count == 1 ) {return true;}
		} catch (Exception e) { System.out.println(e);	}
		return false;
	}
	
	// 키워드번호로 키워드1개 dto 반환
	public KeywordDto getKeyword( int kno ) {
		KeywordDto dto = new KeywordDto();
		String sql = "select * from keyword where kno = "+kno;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if ( rs.next()) {
				dto = new KeywordDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getInt(5));
				System.out.println(dto);
			}
		} catch (Exception e) { System.out.println(e);	}
		return dto;
	}
	
	// 선택한 dir의 하위키워드 리스트 출력
	public ArrayList<KeywordDto> getSelectDirKeyword( int dno ){
		ArrayList<KeywordDto> list = new ArrayList<>();
		String sql = null;
		if ( dno == 0 ) {
			sql = "select * from keyword where dno IS null";
		}else {
			sql = "select * from keyword where dno = "+dno;
		}
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while ( rs.next() ) {
				System.out.println("rs담기");
				KeywordDto dto = new KeywordDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getInt(5));
				System.out.println(dto);
				list.add(dto);
			}
		} catch (Exception e) {System.out.println("선택디렉토리 키워드리스트출력 예외 : "+e);		}
		return list;
	}
}








