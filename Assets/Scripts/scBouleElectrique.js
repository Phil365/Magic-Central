#pragma strict

public var degat:float = 10f;

function Start () {

}

function Update () {

}

function OnTriggerEnter (autre : Collider) {
	Debug.Log(autre);
	if (autre.gameObject.tag == 'ennemi') {

		autre.gameObject.SendMessageUpwards("diminuerVie", degat, SendMessageOptions.DontRequireReceiver);
	}
}