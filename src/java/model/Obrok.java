package model;

import java.io.Serializable;
import enums.VrstaObroka;
import java.util.List;

public class Obrok implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;

	private String ime;

	private double kalorije;

	private int vrstaObroka;

	private String opis;
	
	private String slika;
	
	private List<Obrok_has_Namirnica> obrokHasNamirnicas;

	public Obrok() {
	}

	public Obrok(int id, String ime, double kalorije, int vrstaObroka, String opis, String slika) {
		this.id = id;
		this.ime = ime;
		this.kalorije = kalorije;
		this.vrstaObroka = vrstaObroka;
		this.opis = opis;
		this.slika = slika;
	}

	public Obrok(int id, String ime, double kalorije, int vrstaObroka, String opis, String slika, List<Obrok_has_Namirnica> obrokHasNamirnicas) {
		this.id = id;
		this.ime = ime;
		this.kalorije = kalorije;
		this.vrstaObroka = vrstaObroka;
		this.opis = opis;
		this.slika = slika;
		this.obrokHasNamirnicas = obrokHasNamirnicas;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getIme() {
		return this.ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public double getKalorije() {
		double zbir = 0;
		for(Obrok_has_Namirnica ohn : getObrokHasNamirnicas()){
			zbir += ohn.getNamirnica().getKalorija() * ohn.getKolicinaUGramima() * ohn.getKomad() / 100;
		}
		return Math.round(zbir);
	}

	public void setKalorije(double kalorije) {
		this.kalorije = kalorije;
	}

	public int getVrstaObroka() {
		return this.vrstaObroka;
	}

	public void setVrstaObroka(int vrstaObroka) {
		this.vrstaObroka = vrstaObroka;
	}

	public List<Obrok_has_Namirnica> getObrokHasNamirnicas() {
		return this.obrokHasNamirnicas;
	}

	public void setObrokHasNamirnicas(List<Obrok_has_Namirnica> obrokHasNamirnicas) {
		this.obrokHasNamirnicas = obrokHasNamirnicas;
	}

	public Obrok_has_Namirnica addObrokHasNamirnica(Obrok_has_Namirnica obrokHasNamirnica) {
		getObrokHasNamirnicas().add(obrokHasNamirnica);
		obrokHasNamirnica.setObrok(this);

		return obrokHasNamirnica;
	}

	public Obrok_has_Namirnica removeObrokHasNamirnica(Obrok_has_Namirnica obrokHasNamirnica) {
		getObrokHasNamirnicas().remove(obrokHasNamirnica);
		obrokHasNamirnica.setObrok(null);

		return obrokHasNamirnica;
	}
	
	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getSlika() {
		return slika;
	}

	public void setSlika(String slika) {
		this.slika = slika;
	}

	public VrstaObroka getVrstaObrokaEnum(){
		switch(getVrstaObroka()){
			case 0: return VrstaObroka.DORUCAK;
			case 1: return VrstaObroka.RUCAK;
			case 2:	return VrstaObroka.VECERA;
			default:return VrstaObroka.DORUCAK;
		}
	}
	
	public double getUgljeniHidrati(){
		double zbir = 0;
		for(Obrok_has_Namirnica ohn : getObrokHasNamirnicas()){
			zbir += ohn.getNamirnica().getUgljenihhidrata() * ohn.getKolicinaUGramima() * ohn.getKomad() / 100;
		}
		return Math.round(zbir);
	}
	
	public double getProteini(){
		double zbir = 0;
		for(Obrok_has_Namirnica ohn : getObrokHasNamirnicas()){
			zbir += ohn.getNamirnica().getProteina() * ohn.getKolicinaUGramima() * ohn.getKomad() / 100;
		}
		return Math.round(zbir);
	}
	
	public double getMasti(){
		double zbir = 0;
		for(Obrok_has_Namirnica ohn : getObrokHasNamirnicas()){
			zbir += ohn.getNamirnica().getMasti() * ohn.getKolicinaUGramima() * ohn.getKomad() / 100;
		}
		return Math.round(zbir);
	}
	
	public double getSastojak(String nazivSastojak){
		double kolicinaUObroku = 0;
		for(Obrok_has_Namirnica ohn : getObrokHasNamirnicas()){
			if(ohn.getNamirnica().getNaziv().equals(nazivSastojak)){
				kolicinaUObroku = (ohn.getKolicinaUGramima() * ohn.getKomad())/this.getGramazaObroka();
			}
		}
		return kolicinaUObroku;
	}
	
	private double getGramazaObroka(){
		double zbir = 0;
		for(Obrok_has_Namirnica ohn : getObrokHasNamirnicas()){
			zbir += ohn.getKolicinaUGramima() * ohn.getKomad();
		}
		return Math.round(zbir);
	}
	
	public boolean isObrokVegetarijanski(){
		for(Obrok_has_Namirnica ohn : obrokHasNamirnicas){
			if(!ohn.getNamirnica().isNamirnicaVegetarijanska()){
				return false;
			}
		}
		return true;
	}
	
	public int getOpstipacija(){
		for(Obrok_has_Namirnica ohn : obrokHasNamirnicas){
			if(ohn.getNamirnica().getOpstipacija() == 1){
				return 1;
			}
		}
		return 0;
	}
	
	public int getDijareja(){
		for(Obrok_has_Namirnica ohn : obrokHasNamirnicas){
			if(ohn.getNamirnica().getDijareja() == 1){
				return 1;
			}
		}
		return 0;
	}
	
	public int getSmanjenjeHolesterola(){
		for(Obrok_has_Namirnica ohn : obrokHasNamirnicas){
			if(ohn.getNamirnica().getSmanjenjeHolesterola() == 1){
				return 1;
			}
		}
		return 0;
	}
	
	public int getNormalizovanjePritiska(){
		for(Obrok_has_Namirnica ohn : obrokHasNamirnicas){
			if(ohn.getNamirnica().getNormalizovanjePritiska() == 1){
				return 1;
			}
		}
		return 0;
	}

}
