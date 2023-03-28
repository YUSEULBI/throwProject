package dto;

public class DirDto {
	
	private int dno;
	private String dname;
	private int parent_dno;
	private String ddate;
	
	public DirDto() {
		// TODO Auto-generated constructor stub
	}

	public DirDto(int dno, String dname, int parent_dno, String ddate) {
		super();
		this.dno = dno;
		this.dname = dname;
		this.parent_dno = parent_dno;
		this.ddate = ddate;
	}

	@Override
	public String toString() {
		return "DirDto [dno=" + dno + ", dname=" + dname + ", parent_dno=" + parent_dno + ", ddate=" + ddate + "]";
	}

	public int getDno() {
		return dno;
	}

	public void setDno(int dno) {
		this.dno = dno;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public int getParent_dno() {
		return parent_dno;
	}

	public void setParent_dno(int parent_dno) {
		this.parent_dno = parent_dno;
	}

	public String getDdate() {
		return ddate;
	}

	public void setDdate(String ddate) {
		this.ddate = ddate;
	}

	
	
	
}
