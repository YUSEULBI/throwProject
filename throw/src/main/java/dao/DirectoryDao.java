package dao;

import java.util.ArrayList;

import dto.dirDto;

public class DirectoryDao extends Dao {
	
	private static DirectoryDao dao = new DirectoryDao();
	private DirectoryDao() {	}
	public static DirectoryDao getInstance() {return dao;}
	
	//최상위폴더에 저장
	public boolean setDirectory( String dname ) {
		String sql = "insert into directories( dname ) values( ? );";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dname);
			ps.executeUpdate();
			return true;
		} catch (Exception e) {System.out.println(e);		}
		return false;
	}
	
	
	// Directories 불러오기
	public ArrayList<dirDto> getDirList( int dno ){
		System.out.println(dno);
		ArrayList<dirDto> list = new ArrayList<>();
		String sql = "select * from directories where parent_dno ="+dno;
		System.out.println("sql : "+sql);
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while (rs.next()) {
				dirDto dirDto = new dirDto(rs.getInt(1), rs.getString(2), rs.getInt(3));
				System.out.println("dirDto : "+dirDto);
				list.add(dirDto);
			}
		} catch (Exception e) {System.out.println(e);	}
		System.out.println(list);
		return list;
	}
	
	// subDirectories 추가
	public boolean setSubDir( int dno , String dname) {
		String sql = "insert into directories(dname , parent_dno ) "
				+ "values('"+dname+"' , "+dno+");";
		try {
			ps = con.prepareStatement(sql);
			int count = ps.executeUpdate();
			if ( count == 1 ) {	return true; }
		} catch (Exception e) {System.out.println(e);	}
		return false;
	}
	
	// 파일이름 변경
	public boolean updateDirName(  int dno , String dname ) {
		String sql = "update directories set dname = '"+dname+"' where dno = "+dno+";";
		try {
			ps = con.prepareStatement(sql);
			int count = ps.executeUpdate();
			if (count == 1 ) { return true; }
		} catch (Exception e) {System.out.println(e);	}
		return false;
	}
	
	//파일삭제
	public boolean deleteDir( int dno ) {
		String sql = "delete from directories where dno = "+dno;
		try {
			ps = con.prepareStatement(sql);
			int count = ps.executeUpdate();
			if ( count == 1 ) { return true;	}
		} catch (Exception e) {System.out.println(e);	}
		return false;
	}
}
