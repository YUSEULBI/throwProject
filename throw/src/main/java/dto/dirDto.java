package dto;

public class dirDto {
	
	private int dno;
	private String dname;
	private int parent_dno;
	
	public dirDto() {
		// TODO Auto-generated constructor stub
	}

	public dirDto(int dno, String dname, int parent_dno) {
		super();
		this.dno = dno;
		this.dname = dname;
		this.parent_dno = parent_dno;
	}

	@Override
	public String toString() {
		return "dirDto [dno=" + dno + ", dname=" + dname + ", parent_dno=" + parent_dno + "]";
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
	
	
	
}
