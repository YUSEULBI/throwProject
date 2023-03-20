package dao;

import java.util.ArrayList;

import dto.KeywordDto;

public class KeywordDao extends Dao {
	
	private static KeywordDao dao = new KeywordDao();
	private KeywordDao() {}
	public static KeywordDao getInstance() { return dao;}
	
	// 키워드 저장
	public boolean setKeyword( String keyword , int ktype ) {
		String sql = "insert into keyword( kcontent , ktype ) values( ? , ? );";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, keyword);
			ps.setInt(2, ktype);
			int count = ps.executeUpdate();
			if ( count == 1 ) { return true;	}
		} catch (Exception e) { System.out.println(e);	}
		return false;
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
	
	
}
