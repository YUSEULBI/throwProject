package Dao;

public class DirectoryDao extends Dao {
	
	public boolean setDirectory( String fname ) {
		String sql = "insert into directories(dname) values(?);";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, fname);
			ps.executeUpdate();
			return true;
		} catch (Exception e) {System.out.println(e);		}
		return false;
	}
}
