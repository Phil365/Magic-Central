﻿#pragma strict

public var heros:GameObject;
public var nbOr:int;
private var scInventaireHeros:scGestionInventaire;

function Start () {
	scInventaireHeros = heros.GetComponent.<scGestionInventaire>();
}

function Update () {
	
}

function OnTriggerEnter (autre : Collider) {

	if (autre.gameObject.tag == "Hero") {
		scInventaireHeros.SendMessageUpwards("augmenterOr", nbOr, SendMessageOptions.DontRequireReceiver);
		Destroy(this.gameObject);
	}

}