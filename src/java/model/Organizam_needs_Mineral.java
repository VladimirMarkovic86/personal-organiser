package model;

import java.io.Serializable;

public class Organizam_needs_Mineral implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;

	private String kolicinaUMiligramima;

	private Mineral mineral;

	private Organizam organizam;

	public Organizam_needs_Mineral() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getKolicinaUMiligramima() {
		return this.kolicinaUMiligramima;
	}

	public void setKolicinaUMiligramima(String kolicinaUMiligramima) {
		this.kolicinaUMiligramima = kolicinaUMiligramima;
	}

	public Mineral getMineral() {
		return this.mineral;
	}

	public void setMineral(Mineral mineral) {
		this.mineral = mineral;
	}

	public Organizam getOrganizam() {
		return this.organizam;
	}

	public void setOrganizam(Organizam organizam) {
		this.organizam = organizam;
	}

}
