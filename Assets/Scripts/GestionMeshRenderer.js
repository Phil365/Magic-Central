#pragma strict
public var Nakiya: GameObject;
public var Kaseem: GameObject;
public var Kayden: GameObject;
var heroEnregistrer : int =1; // si le joueur ne sélectionne personne il à par defaut le héros 1
function Start () {

}

function Awake () {
heroEnregistrer = PlayerPrefs.GetInt('heroChoisi'); //va cherhcer le héros choisi dans le menu


if (heroEnregistrer == 1){
	Nakiya.SetActive(true); //active le gameobject utilisé
	Destroy(Kaseem); // détruit les héros inutile dans le gameobject pour optimiser le jeu
	Destroy(Kayden);
}

if (heroEnregistrer == 2){
	Kaseem.GetComponent.<Renderer>().enabled = true;
	Destroy(Nakiya);
	Destroy(Kayden);
	Destroy(transform.Find("ninja").gameObject);

}

if (heroEnregistrer == 3){
	Kayden.GetComponent.<Renderer>().enabled = true;
	Destroy(Nakiya);
	Destroy(Kaseem);
	Destroy(transform.Find("ninja").gameObject);

}





}