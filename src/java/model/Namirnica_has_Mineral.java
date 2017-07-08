package model;

import java.io.Serializable;

public class Namirnica_has_Mineral implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;

	private double kolicinaUMiligramima;

	private Mineral mineral;

	private Namirnica namirnica;

	public Namirnica_has_Mineral() {
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

	public Mineral getMineral() {
		return this.mineral;
	}

	public void setMineral(Mineral mineral) {
		this.mineral = mineral;
	}

	public Namirnica getNamirnica() {
		return this.namirnica;
	}

	public void setNamirnica(Namirnica namirnica) {
		this.namirnica = namirnica;
	}

}
