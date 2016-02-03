#pragma strict
public var hero1: GameObject;
public var hero2: GameObject;
public var hero3: GameObject;
var heroEnregistrer : int =1; // si le joueur ne sélectionne personne il à par defaut le héros 1
function Start () {

}

function Awake () {
heroEnregistrer = PlayerPrefs.GetInt('heroChoisi'); //va cherhcer le héros choisi dans le menu


if (heroEnregistrer == 1){
	hero1.SetActive(true); //active le gameobject utilisé
	Destroy(hero2); // détruit les héros inutile dans le gameobject pour optimiser le jeu
	Destroy(hero3);
}

if (heroEnregistrer == 2){
	hero2.GetComponent.<Renderer>().enabled = true;
	Destroy(hero1);
	Destroy(hero3);
	Destroy(transform.Find("ninja").gameObject);

}

if (heroEnregistrer == 3){
	hero3.GetComponent.<Renderer>().enabled = true;
	Destroy(hero1);
	Destroy(hero2);
	Destroy(transform.Find("ninja").gameObject);

}





}