#pragma strict

/*
 * vie des Minions
 * @access public
 * @var vieMinion
 */   

public var vieMinion:float;

/*
 * mana des minions
 * @access public
 * @var manaMinion
 */   

public var manaMinion:float;

/*
 * Degats des minions
 * @access public
 * @var degatMinion
 */   

public var degatMinion:float;

/*
 * Référence au script de gestion des objets
 * @access public
 * @var scObjetRamasse
 */   


private var scObjetRamasse:scObjetRamasse;

function Start () {
	scObjetRamasse = GetComponent.<scObjetRamasse>();
}

function Update () {
	if (vieMinion <=0) {
		Destroy(this.gameObject);
		//Si l'ennemi meurt on définit l'objet gagné aléatoirement
		var hasard = Random.Range(1, 6);
		switch (hasard) {
			case 1:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "potionVie", SendMessageOptions.DontRequireReceiver);
			break;
			case 2:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "tasOr", SendMessageOptions.DontRequireReceiver);
			break;
			case 3:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "tasOr", SendMessageOptions.DontRequireReceiver);
			break;
			case 4:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "tasOr", SendMessageOptions.DontRequireReceiver);
			break;
			case 5:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "tasOr", SendMessageOptions.DontRequireReceiver);
			break;
			case 6:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "potionMana", SendMessageOptions.DontRequireReceiver);
			break;
		}
	}
}

function diminuerVie(nbDegat:float) {
	vieMinion-=nbDegat;
}