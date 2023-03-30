package dao;

import java.util.ArrayList;

import dto.DirDto;

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
	
	// 선택한 dno 정보 구하기
	public DirDto getDirdto ( int dno ) {
		String sql = "select * from directories where dno = "+dno;
		System.out.println("sql : "+sql);
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if ( rs.next() ) {
				DirDto dirDto = new DirDto(rs.getInt(1), rs.getString(2), rs.getInt(3), rs.getString(4));
				System.out.println("dirDto : "+dirDto);
				return dirDto;
			}
		} catch (Exception e) { System.out.println(e);	}
		return null;
	}
	
	// Directories 불러오기
	public ArrayList<DirDto> getDirList( int dno ){
		
		System.out.println(dno);
		ArrayList<DirDto> list = new ArrayList<>();
		String sql = null;
		if ( dno == 0 ) {
			sql = "select * from directories where parent_dno is null;";
		}else {
			sql = "select * from directories where parent_dno ="+dno;
		}
		System.out.println("sql : "+sql);
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while (rs.next()) {
				DirDto dirDto = new DirDto(rs.getInt(1), rs.getString(2), rs.getInt(3), rs.getString(4));
				System.out.println("dirDto : "+dirDto);
				list.add(dirDto);
			}
		} catch (Exception e) {System.out.println(e);	}
		System.out.println(list);
		return list;
	}
	
	// subDirectories 추가
	public boolean setSubDir( int dno , String dname) {
		String sql = "";
		if ( dno == 0 ) {
			sql = "insert into directories(dname ) "
					+ "values('"+dname+"' );";
		}else {
			sql = "insert into directories(dname , parent_dno ) "
				+ "values('"+dname+"' , "+dno+");";
		}
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
		String sql = "delete from directories where dno = "+dno+" or parent_dno = "+dno;
		System.out.println("sql : "+sql);
		try {
			ps = con.prepareStatement(sql);
			ps.executeUpdate();
			return true;
		} catch (Exception e) {System.out.println(e);	}
		return false;
	}
}
