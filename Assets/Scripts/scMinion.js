#pragma strict

public var vieMinion:float;
public var manaMinion:float;
public var degatMinion:float;

public var nbOr:int;
public var or:GameObject;
public var potionMana:GameObject;
public var potionVie:GameObject;

function Start () {

}

function Update () {
	if (vieMinion <=0) {
		Destroy(this.gameObject);
	}
}

function diminuerVie(nbDegat:float) {
	vieMinion-=nbDegat;
}