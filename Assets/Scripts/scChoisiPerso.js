#pragma strict

public var hero1: GameObject;
public var hero2: GameObject;
public var hero3: GameObject;

private var heroChoisi : int = 1; // par défaut le héros 1 est sélectionner si utilisateur ne sélectionne personne 
function Start () {
hero1.SetActive(true);
}

function Update () {
	if(Input.GetMouseButton(0)){
	transform.Rotate(new Vector3(0.0f,Input.GetAxis('Mouse X'),0.0f)); //permet de faire une rotation sur le héros 
	}
}

function ChoisiHero1(){ //choisi le premier héro et désactive les autres
//	Debug.Log('Hero 1');
	heroChoisi = 1;
	PlayerPrefs.SetInt('heroChoisi',heroChoisi); // enregistre le héros dans les préférences pour récupérer dans les autres scenes
	hero1.SetActive(true);
	hero2.SetActive(false);
	hero3.SetActive(false);
}

function ChoisiHero2(){
//	Debug.Log('Hero 2');
	heroChoisi = 2;
	PlayerPrefs.SetInt('heroChoisi',heroChoisi);
	hero1.SetActive(false);
	hero2.SetActive(true);
	hero3.SetActive(false);
}

function ChoisiHero3(){
//	Debug.Log('Hero 3');
	heroChoisi = 3;
	PlayerPrefs.SetInt('heroChoisi',heroChoisi);
	hero1.SetActive(false);
	hero2.SetActive(false);
	hero3.SetActive(true);
}
