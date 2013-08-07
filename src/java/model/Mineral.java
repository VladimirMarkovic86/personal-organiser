package model;

import java.io.Serializable;
import java.util.List;

public class Mineral implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;

	private String naziv;

	private String opis;

	private List<Namirnica_has_Mineral> namirnicaHasMinerals;

	private List<Organizam_needs_Mineral> organizamNeedsMinerals;

	public Mineral() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNaziv() {
		return this.naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public List<Namirnica_has_Mineral> getNamirnicaHasMinerals() {
		return this.namirnicaHasMinerals;
	}

	public void setNamirnicaHasMinerals(List<Namirnica_has_Mineral> namirnicaHasMinerals) {
		this.namirnicaHasMinerals = namirnicaHasMinerals;
	}

	public Namirnica_has_Mineral addNamirnicaHasMineral(Namirnica_has_Mineral namirnicaHasMineral) {
		getNamirnicaHasMinerals().add(namirnicaHasMineral);
		namirnicaHasMineral.setMineral(this);

		return namirnicaHasMineral;
	}

	public Namirnica_has_Mineral removeNamirnicaHasMineral(Namirnica_has_Mineral namirnicaHasMineral) {
		getNamirnicaHasMinerals().remove(namirnicaHasMineral);
		namirnicaHasMineral.setMineral(null);

		return namirnicaHasMineral;
	}

	public List<Organizam_needs_Mineral> getOrganizamNeedsMinerals() {
		return this.organizamNeedsMinerals;
	}

	public void setOrganizamNeedsMinerals(List<Organizam_needs_Mineral> organizamNeedsMinerals) {
		this.organizamNeedsMinerals = organizamNeedsMinerals;
	}

	public Organizam_needs_Mineral addOrganizamNeedsMineral(Organizam_needs_Mineral organizamNeedsMineral) {
		getOrganizamNeedsMinerals().add(organizamNeedsMineral);
		organizamNeedsMineral.setMineral(this);

		return organizamNeedsMineral;
	}

	public Organizam_needs_Mineral removeOrganizamNeedsMineral(Organizam_needs_Mineral organizamNeedsMineral) {
		getOrganizamNeedsMinerals().remove(organizamNeedsMineral);
		organizamNeedsMineral.setMineral(null);

		return organizamNeedsMineral;
	}

}
