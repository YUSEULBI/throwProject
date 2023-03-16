package dao;

import java.util.ArrayList;

import dto.dirDto;

public class DirectoryDao extends Dao {
	
	private static DirectoryDao dao = new DirectoryDao();
	private DirectoryDao() {	}
	public static DirectoryDao getInstance() {return dao;}
	
	public boolean setDirectory( String dname ) {
		String sql = "insert into directories(dname) values(?);";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dname);
			ps.executeUpdate();
			return true;
		} catch (Exception e) {System.out.println(e);		}
		return false;
	}
	
	public ArrayList<dirDto> getDirList(){
		ArrayList<dirDto> list = new ArrayList<>();
		String sql = "select * from directories;";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while (rs.next()) {
				dirDto dirDto = new dirDto(rs.getInt(1), rs.getString(2), rs.getInt(3));
				list.add(dirDto);
			}
		} catch (Exception e) {System.out.println(e);	}
		System.out.println(list);
		return list;
	}
}
