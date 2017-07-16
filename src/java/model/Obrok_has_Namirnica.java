package model;

import java.io.Serializable;

public class Obrok_has_Namirnica implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id;

    private double kolicinaUGramima;

    private int komad;

    private Namirnica namirnica;

    private Obrok obrok;

    public Obrok_has_Namirnica() {
    }

    public Obrok_has_Namirnica(double kolicinaUGramima, int komad, Namirnica namirnica, Obrok obrok) {
        this.kolicinaUGramima = kolicinaUGramima;
        this.komad = komad;
        this.namirnica = namirnica;
        this.obrok = obrok;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getKolicinaUGramima() {
        return Math.round(this.kolicinaUGramima);
    }

    public void setKolicinaUGramima(double kolicinaUGramima) {
        this.kolicinaUGramima = kolicinaUGramima;
    }

    public int getKomad() {
        return this.komad;
    }

    public void setKomad(int komad) {
        this.komad = komad;
    }

    public Namirnica getNamirnica() {
        return this.namirnica;
    }

    public void setNamirnica(Namirnica namirnica) {
        this.namirnica = namirnica;
    }

    public Obrok getObrok() {
        return this.obrok;
    }

    public void setObrok(Obrok obrok) {
        this.obrok = obrok;
    }

}
