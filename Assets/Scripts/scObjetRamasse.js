#pragma strict

public var potionVie: GameObject;
public var potionMana: GameObject;
public var tasOr: GameObject;

function Start () {

}

function Update () {

}

function InstancierObjet (type) {

	switch (type) {

		case "potionVie":
		Instantiate(this.potionVie, transform.position, transform.rotation);
		break;

		case "potionMana":
		Instantiate(this.potionVie, transform.position, transform.rotation);
		break;

		case "tasOr" :
		Instantiate(this.tasOr, transform.position, transform.rotation);
		break;
	}


}