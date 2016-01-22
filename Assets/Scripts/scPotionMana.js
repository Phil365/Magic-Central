#pragma strict

public var heros:GameObject;
private var scInventaireHeros:scGestionInventaire;

function Start () {
	scInventaireHeros = heros.GetComponent.<scGestionInventaire>();
}

function Update () {


}

function OnTriggerEnter (autre : Collider) {

	if (autre.tag == "Player" && scInventaireHeros.nbPotionsMana < 3) {
		scInventaireHeros.SendMessageUpwards("augmenterPotionMana", 1, SendMessageOptions.DontRequireReceiver);
		Destroy(this.gameObject);
	}

}
