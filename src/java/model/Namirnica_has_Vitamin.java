package model;

import java.io.Serializable;

public class Namirnica_has_Vitamin implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;

	private double kolicinaUMiligramima;

	private Namirnica namirnica;

	private Vitamin vitamin;

	public Namirnica_has_Vitamin() {
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

	public Namirnica getNamirnica() {
		return this.namirnica;
	}

	public void setNamirnica(Namirnica namirnica) {
		this.namirnica = namirnica;
	}

	public Vitamin getVitamin() {
		return this.vitamin;
	}

	public void setVitamin(Vitamin vitamin) {
		this.vitamin = vitamin;
	}

}
