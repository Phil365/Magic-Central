#pragma strict
    var player : GameObject;
    // This will return the game object named Hand in the scene.
    player = GameObject.Find("Hero");
function Start () {

}

function Update () {

}

function OnTriggerEnter(trigg:Collider) 
{
	if (trigg.gameObject.tag == "teleportNiveeau2") 
	{
		Application.LoadLevel (4);
	}
	if (trigg.gameObject.tag == "teleportNiveau1") 
	{
		Application.LoadLevel (3);
	}

	if (trigg.gameObject.tag == "teleportTuto") 
	{
		Application.LoadLevel (2);
	}

	if (trigg.gameObject.tag == "teleportHub") 
	{
		Application.LoadLevel (1);
	}

	if (trigg.gameObject.tag == "teleportNiveeau2Etage") 
	{
		 player.transform.position = Vector3(-94.36, 1, 237.96);
	}

}


