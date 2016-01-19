#pragma strict

/*Mini IA - Source : http://answers.unity3d.com/questions/26177/how-to-create-a-basic-follow-ai.html */

public var cible:GameObject;
public var agent:NavMeshAgent;
public var porteeMini:float = 10f; //mini
public var porteeMaxi:float = 10f; //max
private var stop : float=0; //distance où l'ennemi stoppe

function Start () {
	agent = GetComponent.<NavMeshAgent>();
}

function Update () {
	
	//calcul distance ennemi-joueur
    var distance = Vector3.Distance(transform.position, cible.transform.position);
    
    if (distance <= porteeMaxi && distance >= porteeMini){
    	agent.gameObject.transform.LookAt(cible.transform);
    
    } else if (distance <= porteeMini && distance > stop) {
		//	avance vers l'ennemi
		agent.SetDestination(cible.transform.position);
	
	} else if  (distance <= stop) {
		agent.Stop();
	}


}