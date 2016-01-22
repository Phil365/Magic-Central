#pragma strict

/*Mini IA - Source : http://answers.unity3d.com/questions/26177/how-to-create-a-basic-follow-ai.html */
var tempEntreAttaque : float= 5f;
public var cible:GameObject; //cible de l'agent
public var agent:NavMeshAgent; //agent du NavMesh
public var porteeMini:float = 10f; //mini
public var porteeMaxi:float = 10f; //max
public var exclamation:GameObject; //exclamation quand il voit le héros
private var stop : float=0; //distance où l'ennemi stoppe
public var degatMinion:int =2;
private var hero: GameObject;
private var santeHero:scDeplacementTirHero;
private var timer:float;
function Awake () {
	hero= GameObject.FindGameObjectWithTag('Hero');
	santeHero = hero.GetComponent.<scDeplacementTirHero>();
}

function Start () {
	agent = GetComponent.<NavMeshAgent>();
	exclamation.SetActive (false);
	Debug.Log(degatMinion);
}

function Update () {
	timer += Time.deltaTime;
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
		if(timer > tempEntreAttaque && distance <= porteeMini){
		Attaque();
		}

	
	} else if  (distance <= stop) {
		
		agent.Stop();

	}


}

function Attaque()
{ timer= 0f;
	if(santeHero.Viedisponible>0)
	{
		santeHero.PrendDamage(degatMinion);

	}
}