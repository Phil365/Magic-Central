#pragma strict

/*
 * Contient le nombre d'or du personnage
 * @access public
 * @var orInventaire
 */
 public var orInventaire:int;

 /*
 * Contient le nombre de potions de vie 
 * @access public
 * @var nbPotionsVie
 */

 public var nbPotionsVie:int;

  /*
 * Contient le nombre de potions de mana 
 * @access public
 * @var nbPotionsMana
 */

 public var nbPotionsMana:int;


function Start () {

	// Variable de test
	orInventaire = 200;

}

function Update () {

	

}

function diminutionOrVie(prixPotionVie:int) 
{
	
	orInventaire = orInventaire-prixPotionVie;
	Debug.Log("Or :"+orInventaire);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("Or", orInventaire);

}

function augmenterPotionVie(nbPotion:int) 
{
	
	nbPotionsVie = nbPotionsVie+nbPotion;
	Debug.Log("Potions de Vie :" +nbPotionsVie);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("nbPotionsVie", nbPotionsVie);
}

function diminutionOrMana(prixPotionMana:int) 
{
	
	orInventaire = orInventaire-prixPotionMana;
	Debug.Log("Or :"+orInventaire);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("nbPotionsMana", prixPotionMana);

}

function augmenterPotionMana(nbPotion:int) 
{
	
	nbPotionsMana = nbPotionsMana+nbPotion;
	Debug.Log("Potions de mana :" + nbPotionsMana);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("Or", orInventaire);
}

function augmenterOr(nbOr:int) 
{
	
	orInventaire += nbOr;
	Debug.Log("Or :" + orInventaire);
	// On stocke dans des players prefs car le joueur va changer de scene
	PlayerPrefs.SetInt("Or", orInventaire);
}