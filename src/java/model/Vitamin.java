package model;

import java.io.Serializable;
import java.util.List;

public class Vitamin implements Serializable {
    private static final long serialVersionUID = 1L;

    private int id;

    private String naziv;

    private String opis;

    private List<Namirnica_has_Vitamin> namirnicaHasVitamins;

    private List<Organizam_needs_Vitamin> organizamNeedsVitamins;

    public Vitamin() {
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

    public List<Namirnica_has_Vitamin> getNamirnicaHasVitamins() {
        return this.namirnicaHasVitamins;
    }

    public void setNamirnicaHasVitamins(List<Namirnica_has_Vitamin> namirnicaHasVitamins) {
        this.namirnicaHasVitamins = namirnicaHasVitamins;
    }

    public Namirnica_has_Vitamin addNamirnicaHasVitamin(Namirnica_has_Vitamin namirnicaHasVitamin) {
        getNamirnicaHasVitamins().add(namirnicaHasVitamin);
        namirnicaHasVitamin.setVitamin(this);

        return namirnicaHasVitamin;
    }

    public Namirnica_has_Vitamin removeNamirnicaHasVitamin(Namirnica_has_Vitamin namirnicaHasVitamin) {
        getNamirnicaHasVitamins().remove(namirnicaHasVitamin);
        namirnicaHasVitamin.setVitamin(null);

        return namirnicaHasVitamin;
    }

    public List<Organizam_needs_Vitamin> getOrganizamNeedsVitamins() {
        return this.organizamNeedsVitamins;
    }

    public void setOrganizamNeedsVitamins(List<Organizam_needs_Vitamin> organizamNeedsVitamins) {
        this.organizamNeedsVitamins = organizamNeedsVitamins;
    }

    public Organizam_needs_Vitamin addOrganizamNeedsVitamin(Organizam_needs_Vitamin organizamNeedsVitamin) {
        getOrganizamNeedsVitamins().add(organizamNeedsVitamin);
        organizamNeedsVitamin.setVitamin(this);

        return organizamNeedsVitamin;
    }

    public Organizam_needs_Vitamin removeOrganizamNeedsVitamin(Organizam_needs_Vitamin organizamNeedsVitamin) {
        getOrganizamNeedsVitamins().remove(organizamNeedsVitamin);
        organizamNeedsVitamin.setVitamin(null);

        return organizamNeedsVitamin;
    }

}
