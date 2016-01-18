#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(trigg:Collider) 
{
	if (trigg.gameObject.tag == "teleportNiveau1") 
	{
		Application.LoadLevel (3);
	}
}


function teleportNiveau1 () {
	Application.LoadLevel (3);
}
