#pragma strict

/*Mini IA - Source : http://answers.unity3d.com/questions/26177/how-to-create-a-basic-follow-ai.html */

public var cible:GameObject; //cible de l'agent
public var agent:NavMeshAgent; //agent du NavMesh
public var porteeMini:float = 10f; //mini
public var porteeMaxi:float = 10f; //max
public var exclamation:GameObject; //exclamation quand il voit le héros
private var stop : float=0; //distance où l'ennemi stoppe

function Start () {
	agent = GetComponent.<NavMeshAgent>();
	exclamation.SetActive (false);
}

function Update () {
	
	//calcul distance ennemi-joueur
    var distance = Vector3.Distance(transform.position, cible.transform.position);

    //apparition point d'exclamation
     if (distance >= 2 && distance <= 3) {
    	exclamation.SetActive (true);
    } else {
    	exclamation.SetActive (false);
    }

    if (distance <= porteeMaxi && distance >= porteeMini){
    	agent.gameObject.transform.LookAt(cible.transform);
    
    } else if (distance <= porteeMini && distance > stop) {
		//	avance vers l'ennemi
		agent.SetDestination(cible.transform.position);
	
	} else if  (distance <= stop) {
		agent.Stop();
	}


}