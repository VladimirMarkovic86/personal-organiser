package model;

import enums.NacinIshrane;
import enums.Pol;
import enums.VrstaObroka;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class Organizam implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id;

    private Date datumRodjenja;

    private int fizickaAktivnost;

    private int nacinIshrane;

    private int pol;

    private double tezina;

    private double visina;

    private int korisnikid;

    private List<Organizam_needs_Mineral> organizamNeedsMinerals;

    private List<Organizam_needs_Vitamin> organizamNeedsVitamins;

    public Organizam() {
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getDatumRodjenja() {
        return this.datumRodjenja;
    }

    public void setDatumRodjenja(Date datumRodjenja) {
        this.datumRodjenja = datumRodjenja;
    }

    public int getFizickaAktivnost() {
        return this.fizickaAktivnost;
    }

    public void setFizickaAktivnost(int fizickaAktivnost) {
        this.fizickaAktivnost = fizickaAktivnost;
    }

    public void setFizickaAktivnost(String fizickaAktivnost) {
        if (fizickaAktivnost.equals("Easy")) {
            this.fizickaAktivnost = 0;
        } else {
            if (fizickaAktivnost.equals("Medium")) {
                this.fizickaAktivnost = 1;
            } else {
                if (fizickaAktivnost.equals("Hard")) {
                    this.fizickaAktivnost = 2;
                } else {
                    this.fizickaAktivnost = 0;
                }
            }
        }
    }

    public int getNacinIshrane() {
        return this.nacinIshrane;
    }

    public void setNacinIshrane(int nacinIshrane) {
        this.nacinIshrane = nacinIshrane;
    }

    public void setNacinIshrane(String nacinIshrane) {
        if (nacinIshrane.equals("All")) {
            this.nacinIshrane = 1;
        } else {
            if (nacinIshrane.equals("Vegetarian")) {
                this.nacinIshrane = 0;
            } else {
                this.nacinIshrane = 1;
            }
        }
    }

    public int getPol() {
        return this.pol;
    }

    public void setPol(int pol) {
        this.pol = pol;
    }

    public void setPol(String pol) {
        if (pol.equals("Male")) {
            this.pol = 0;
        } else {
            if (pol.equals("Female")) {
                this.pol = 1;
            } else {
                this.pol = 0;
            }
        }
    }

    public double getTezina() {
        return this.tezina;
    }

    public void setTezina(double tezina) {
        this.tezina = tezina;
    }

    public double getVisina() {
        return this.visina;
    }

    public void setVisina(double visina) {
        this.visina = visina;
    }

    public List<Organizam_needs_Mineral> getOrganizamNeedsMinerals() {
        return this.organizamNeedsMinerals;
    }

    public int getKorisnikId() {
        return this.korisnikid;
    }

    public void setKorisnikId(int id) {
        this.korisnikid = id;
    }

    public void setOrganizamNeedsMinerals(
            List<Organizam_needs_Mineral> organizamNeedsMinerals) {
        this.organizamNeedsMinerals = organizamNeedsMinerals;
    }

    public Organizam_needs_Mineral addOrganizamNeedsMineral(
            Organizam_needs_Mineral organizamNeedsMineral) {
        getOrganizamNeedsMinerals().add(organizamNeedsMineral);
        organizamNeedsMineral.setOrganizam(this);

        return organizamNeedsMineral;
    }

    public Organizam_needs_Mineral removeOrganizamNeedsMineral(
            Organizam_needs_Mineral organizamNeedsMineral) {
        getOrganizamNeedsMinerals().remove(organizamNeedsMineral);
        organizamNeedsMineral.setOrganizam(null);

        return organizamNeedsMineral;
    }

    public List<Organizam_needs_Vitamin> getOrganizamNeedsVitamins() {
        return this.organizamNeedsVitamins;
    }

    public void setOrganizamNeedsVitamins(
            List<Organizam_needs_Vitamin> organizamNeedsVitamins) {
        this.organizamNeedsVitamins = organizamNeedsVitamins;
    }

    public Organizam_needs_Vitamin addOrganizamNeedsVitamin(
            Organizam_needs_Vitamin organizamNeedsVitamin) {
        getOrganizamNeedsVitamins().add(organizamNeedsVitamin);
        organizamNeedsVitamin.setOrganizam(this);

        return organizamNeedsVitamin;
    }

    public Organizam_needs_Vitamin removeOrganizamNeedsVitamin(
            Organizam_needs_Vitamin organizamNeedsVitamin) {
        getOrganizamNeedsVitamins().remove(organizamNeedsVitamin);
        organizamNeedsVitamin.setOrganizam(null);

        return organizamNeedsVitamin;
    }

    private double[][] fizickaAktivnostPodaci = {{1.55, 1.78, 2.1},
            {1.56, 1.64, 1.82}};

    /*
     * Bazalna potrosnja predstavlja broj potrosenih kalorija tela u stanju mirovanja
     */
    public double getBazalnaMetabolickaPotrosnja() {
        double bmr;
        if (getPol() == Pol.MUSKI.ordinal()) {
            bmr = 66 + (13.7 * getTezina()) + (5 * getVisina())
                    - (6.8 * getStarost());
        } else {
            bmr = 655 + (9.6 * getTezina()) + (1.8 * getVisina())
                    - (4.7 * getStarost());
        }
        return bmr;
    }

    /*
     * Broj godina starosti organizma
     */
    public int getStarost() {
        long diff = (new Date()).getTime() - getDatumRodjenja().getTime();
        int yearDiff = (int) (diff / 1000 / 60 / 60 / 24 / 365.25);
        return yearDiff;
    }

    /*
     * Ukupna dnevna potrosnja predstavlja zbir
     * proizvoda bazalne potrosnje i koeficijenta celodnevne fizicke aktivnosti
     * i proizvoda koeficienta treninga i minuta trajanja treninga
     */
    public double getEnergetskaPotrosnja() {
        return (getBazalnaMetabolickaPotrosnja()
                * fizickaAktivnostPodaci[getPol()][getFizickaAktivnost()]);
    }

    public double getTreningPotrosnja() {
        return getTrening() * getTrajanjeTreninga();
    }

    /*
     * Indeks telesne mase predstavlja broj odnosa visine i tezine
     */
    public double getRacunIndeksTelesneMase() {
        double visinaM = getVisina() * 1.0 / 100;
        return getTezina() / (visinaM * visinaM);
    }

    private String indeksTelesneMase;

    public String getIndeksTelesneMase() {
        return indeksTelesneMase;
    }

    public void setIndeksTelesneMase(String indeksTelesneMase) {
        this.indeksTelesneMase = indeksTelesneMase;
    }

    private double trening;
    private double trajanjeTreninga;
    private VrstaObroka treningObrok;
    private int smanjenjeHolesterola;
    private int normalizovanjeKrvnogPritiska;
    private int opstipacija;
    private int dijareja;

    public double getTrening() {
        return trening;
    }

    public void setTrening(double trening) {
        this.trening = trening;
    }

    public VrstaObroka getTreningObrok() {
        return treningObrok;
    }

    public void setTreningObrok(int treningObrok) {
        switch (treningObrok) {
            case 1:
                this.treningObrok = VrstaObroka.DORUCAK;
                break;
            case 2:
                this.treningObrok = VrstaObroka.RUCAK;
                break;
            case 3:
                this.treningObrok = VrstaObroka.VECERA;
                break;
            case 0:
                this.treningObrok = VrstaObroka.BEZ_OBROKA;
                break;
            default:
                this.treningObrok = VrstaObroka.BEZ_OBROKA;
                break;
        }
    }

    public void setTreningObrok(VrstaObroka treningObrok) {
        this.treningObrok = treningObrok;
    }

    public double getTrajanjeTreninga() {
        return trajanjeTreninga;
    }

    public void setTrajanjeTreninga(double trajanjeTreninga) {
        this.trajanjeTreninga = trajanjeTreninga;
    }

    public int getSmanjenjeHolesterola() {
        return smanjenjeHolesterola;
    }

    public void setSmanjenjeHolesterola(int smanjenjeHolesterola) {
        this.smanjenjeHolesterola = smanjenjeHolesterola;
    }

    public int getNormalizovanjeKrvnogPritiska() {
        return normalizovanjeKrvnogPritiska;
    }

    public void setNormalizovanjeKrvnogPritiska(int normalizovanjeKrvnogPritiska) {
        this.normalizovanjeKrvnogPritiska = normalizovanjeKrvnogPritiska;
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

    public double getDorucakKalorije() {
        return this.getEnergetskaPotrosnja() * 0.35;
    }

    public double getRucakKalorije() {
        return this.getEnergetskaPotrosnja() * 0.40;
    }

    public double getVeceraKalorije() {
        return this.getEnergetskaPotrosnja() * 0.25;
    }

    public NacinIshrane getNacinIshraneEnum() {
        switch (nacinIshrane) {
            case 0:
                return NacinIshrane.VEGETARIJANSKI;
            case 1:
                return NacinIshrane.SVE;
            default:
                return NacinIshrane.SVE;
        }
    }

}
