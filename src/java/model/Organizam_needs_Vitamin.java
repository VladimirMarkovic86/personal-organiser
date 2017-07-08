package model;

import java.io.Serializable;

public class Organizam_needs_Vitamin implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;

	private double kolicinaUMiligramima;

	private Organizam organizam;

	private Vitamin vitamin;

	public Organizam_needs_Vitamin() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getKolicinaUMiligramima() {
		return this.kolicinaUMiligramima;
	}

	public void setKolicinaUMiligramima(double kolicinaUMiligramima) {
		this.kolicinaUMiligramima = kolicinaUMiligramima;
	}

	public Organizam getOrganizam() {
		return this.organizam;
	}

	public void setOrganizam(Organizam organizam) {
		this.organizam = organizam;
	}

	public Vitamin getVitamin() {
		return this.vitamin;
	}

	public void setVitamin(Vitamin vitamin) {
		this.vitamin = vitamin;
	}

}
