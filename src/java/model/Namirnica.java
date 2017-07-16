package model;

import java.io.Serializable;
import java.util.List;


public class Namirnica implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id;

    private double kalorija;

    private double masti;

    private String naziv;

    private double proteina;

    private double ugljenihhidrata;

    private double voda;

    private int poreklo;

    private String opis;

    private int opstipacija;

    private int dijareja;

    private int smanjenjeHolesterola;

    private int normalizovanjePritiska;

    private List<Namirnica_has_Mineral> namirnicaHasMinerals;

    private List<Namirnica_has_Vitamin> namirnicaHasVitamins;

    private List<Obrok_has_Namirnica> obrokHasNamirnicas;

    public Namirnica() {
    }

    public Namirnica(String id, String naziv, double kalorija, double proteina, double masti, double ugljenihhidrata, double voda, String opis, String poreklo) {
        this.id = id;
        this.naziv = naziv;
        this.kalorija = kalorija;
        this.proteina = proteina;
        this.masti = masti;
        this.ugljenihhidrata = ugljenihhidrata;
        this.voda = voda;
        this.opis = opis;
        if (poreklo.equals("All")) {
            this.poreklo = 1;
        } else {
            if (poreklo.equals("Vegetarian")) {
                this.poreklo = 0;
            } else {
                this.poreklo = 1;
            }
        }
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getKalorija() {
        return this.kalorija;
    }

    public void setKalorija(double kalorija) {
        this.kalorija = kalorija;
    }

    public double getMasti() {
        return this.masti;
    }

    public void setMasti(double masti) {
        this.masti = masti;
    }

    public String getNaziv() {
        return this.naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public double getProteina() {
        return this.proteina;
    }

    public void setProteina(double proteina) {
        this.proteina = proteina;
    }

    public double getUgljenihhidrata() {
        return this.ugljenihhidrata;
    }

    public void setUgljenihhidrata(double ugljenihhidrata) {
        this.ugljenihhidrata = ugljenihhidrata;
    }

    public double getVoda() {
        return voda;
    }

    public void setVoda(double voda) {
        this.voda = voda;
    }

    public int getPoreklo() {
        return poreklo;
    }

    public String getPorekloStr() {
        switch (poreklo) {
            case 0:
                return "Vegetarian";
            case 1:
                return "All";
            default:
                return "All";
        }
    }

    public void setPoreklo(int poreklo) {
        this.poreklo = poreklo;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public int getOpstipacija() {
        return opstipacija;
    }

    public void setOpstipacija(int opstipacija) {
        this.opstipacija = opstipacija;
    }

    public int getDijareja() {
        return dijareja;
    }

    public void setDijareja(int dijareja) {
        this.dijareja = dijareja;
    }

    public int getSmanjenjeHolesterola() {
        return smanjenjeHolesterola;
    }

    public void setSmanjenjeHolesterola(int smanjenjeHolesterola) {
        this.smanjenjeHolesterola = smanjenjeHolesterola;
    }

    public int getNormalizovanjePritiska() {
        return normalizovanjePritiska;
    }

    public void setNormalizovanjePritiska(int normalizovanjePritiska) {
        this.normalizovanjePritiska = normalizovanjePritiska;
    }

    public List<Namirnica_has_Mineral> getNamirnicaHasMinerals() {
        return this.namirnicaHasMinerals;
    }

    public void setNamirnicaHasMinerals(List<Namirnica_has_Mineral> namirnicaHasMinerals) {
        this.namirnicaHasMinerals = namirnicaHasMinerals;
    }

    public Namirnica_has_Mineral addNamirnicaHasMineral(Namirnica_has_Mineral namirnicaHasMineral) {
        getNamirnicaHasMinerals().add(namirnicaHasMineral);
        namirnicaHasMineral.setNamirnica(this);

        return namirnicaHasMineral;
    }

    public Namirnica_has_Mineral removeNamirnicaHasMineral(Namirnica_has_Mineral namirnicaHasMineral) {
        getNamirnicaHasMinerals().remove(namirnicaHasMineral);
        namirnicaHasMineral.setNamirnica(null);

        return namirnicaHasMineral;
    }

    public List<Namirnica_has_Vitamin> getNamirnicaHasVitamins() {
        return this.namirnicaHasVitamins;
    }

    public void setNamirnicaHasVitamins(List<Namirnica_has_Vitamin> namirnicaHasVitamins) {
        this.namirnicaHasVitamins = namirnicaHasVitamins;
    }

    public Namirnica_has_Vitamin addNamirnicaHasVitamin(Namirnica_has_Vitamin namirnicaHasVitamin) {
        getNamirnicaHasVitamins().add(namirnicaHasVitamin);
        namirnicaHasVitamin.setNamirnica(this);

        return namirnicaHasVitamin;
    }

    public Namirnica_has_Vitamin removeNamirnicaHasVitamin(Namirnica_has_Vitamin namirnicaHasVitamin) {
        getNamirnicaHasVitamins().remove(namirnicaHasVitamin);
        namirnicaHasVitamin.setNamirnica(null);

        return namirnicaHasVitamin;
    }

    public List<Obrok_has_Namirnica> getObrokHasNamirnicas() {
        return this.obrokHasNamirnicas;
    }

    public void setObrokHasNamirnicas(List<Obrok_has_Namirnica> obrokHasNamirnicas) {
        this.obrokHasNamirnicas = obrokHasNamirnicas;
    }

    public Obrok_has_Namirnica addObrokHasNamirnica(Obrok_has_Namirnica obrokHasNamirnica) {
        getObrokHasNamirnicas().add(obrokHasNamirnica);
        obrokHasNamirnica.setNamirnica(this);

        return obrokHasNamirnica;
    }

    public Obrok_has_Namirnica removeObrokHasNamirnica(Obrok_has_Namirnica obrokHasNamirnica) {
        getObrokHasNamirnicas().remove(obrokHasNamirnica);
        obrokHasNamirnica.setNamirnica(null);

        return obrokHasNamirnica;
    }

    public boolean isNamirnicaVegetarijanska() {
        if (poreklo == 0) {
            return true;
        }
        return false;
    }

}
