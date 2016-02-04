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
	
	Destroy(Kaseem); // détruit les héros inutile dans le gameobject pour optimiser le jeu
	Destroy(Kayden);
	Debug.Log("test");
}

if (heroEnregistrer == 2){
	Destroy(Nakiya);
	Destroy(Kayden);


}

if (heroEnregistrer == 3){
	Destroy(Nakiya);
	Destroy(Kaseem);
}





}