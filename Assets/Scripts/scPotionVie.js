#pragma strict

public var heros:GameObject;
private var scInventaireHeros:scGestionInventaire;

function Start () {
	scInventaireHeros = heros.GetComponent.<scGestionInventaire>();
}

function Update () {


}

function OnTriggerEnter (autre : Collider) {

	if (autre.tag == "Player" && scInventaireHeros.nbPotionsVie < 3) {
		scInventaireHeros.SendMessageUpwards("augmenterPotionVie", 1, SendMessageOptions.DontRequireReceiver);
		Destroy(this.gameObject);
	}

}
