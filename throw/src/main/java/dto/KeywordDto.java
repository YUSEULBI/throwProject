package dto;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;

public class KeywordDto {
	private int kno;
	private String kcontent;
	private String kdate;
	private int ktype;
	private int dno;
    
	public KeywordDto() { }

	public KeywordDto(int kno, String kcontent, String kdate, int ktype, int dno) {
		super();
		this.kno = kno;
		this.kcontent = kcontent;
		 
		this.kdate = kdate.split(" ")[0];
		this.ktype = ktype;
		this.dno = dno;
	}

	@Override
	public String toString() {
		return "KeywordDto [kno=" + kno + ", kcontent=" + kcontent + ", kdate=" + kdate + ", ktype=" + ktype + ", dno="
				+ dno + "]";
	}

	public int getKno() {
		return kno;
	}

	public void setKno(int kno) {
		this.kno = kno;
	}

	public String getKcontent() {
		return kcontent;
	}

	public void setKcontent(String kcontent) {
		this.kcontent = kcontent;
	}

	public String getKdate() {
		return kdate;
	}

	public void setKdate(String kdate) {
		this.kdate = kdate;
	}

	public int getKtype() {
		return ktype;
	}

	public void setKtype(int ktype) {
		this.ktype = ktype;
	}

	public int getDno() {
		return dno;
	}

	public void setDno(int dno) {
		this.dno = dno;
	}
	
	
    
}
