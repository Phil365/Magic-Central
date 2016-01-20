 /*
 * Vitesse de déplacement du hero 
 * @access public
 * @var vitesse
 */

public var vitesse:float = 3; 

 /*
 * Vector3 direction du déplacement
 * @access private
 * @var deplacement
 */

private var deplacement:Vector3;

 /*
 * Accès au rigidbody du joueur
 * @access private
 * @var joueurRigidbody
 */
private var joueurRigidbody:Rigidbody;

 /*
 * Récupération du layer du sol
 * @access private
 * @var masqueSol
 */

private var masqueSol:int;

 /*
 * Définition de la longueur du rayon de la caméra
 * @access private
 * @var camRayLength
 */

private var camRayLength:float = 100;

 /*
 * Définition de la reserve de mana du joueur
 * @access public
 * @var mana
 */

public var mana:int = 60;

 /*
 * Accès au character controller du hero
 * @access public
 * @var personnage
 */

public var personnage:CharacterController; 

 /*
 * Projectile (attaque magique du personnage)
 * @access public
 * @var projectile
 */

public var projectile:GameObject;

 /*
 * Projectile (attaque magique du personnage)
 * @access public
 * @var nouveauProjectile
 */

private var nouveauProjectile:GameObject;

 /*
 * force appliquée au projectile
 * @access public
 * @var force
 */

private var force:int=100;

private var saut= false;

 /*
 * Source : https://unity3d.com/learn/tutorials/projects/survival-shooter/player-character?playlist=17144
 * Rotation suivant l'endroit du curseur de la souris
 */


function Awake ()
{
    // On récupere le layer qui corresponds au sol
    masqueSol = LayerMask.GetMask ("sol");
    // On récupere le ridigbody du joueur
    joueurRigidbody = GetComponent (Rigidbody);
    
}


function FixedUpdate ()
{
    //Récuperation des touches permettant de deplacer le hero
    var haut:float = Input.GetAxisRaw ("Horizontal");
    var bas:float = Input.GetAxisRaw ("Vertical");

    
    Deplacer(haut, bas);

    
    Tourner();

}



function Deplacer (haut : float, bas : float)
{
	// On set le vecteur en ce basant sur les axes Horizontaux et Verticaux
    deplacement.Set (haut, 0f, bas);

    deplacement = deplacement.normalized * vitesse * Time.deltaTime;

    // Déplacement du hero
    joueurRigidbody.MovePosition (transform.position + deplacement);



}


function Tourner ()
{
    // Création du rayon partant de la position de la position de la caméra vers la souris
    var camRay : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);

    // Création d'une variable permettant de vérifier si le sol a été touché
    var solTouche : RaycastHit;

 
    if(Physics.Raycast (camRay, solTouche, camRayLength, masqueSol))
    {
       
        var joueurSouris : Vector3  = solTouche.point - transform.position;


        joueurSouris.y = 0f;

        
        var nouvelleRotation : Quaternion = Quaternion.LookRotation (joueurSouris);

        // Set the player's rotation to this new rotation.
        joueurRigidbody.MoveRotation (nouvelleRotation);

		if(Input.GetButton("Fire1"))
		{
			mana-=20;
		}

		if (Input.GetButtonUp("Fire1")){
		
		if(this.projectile){

			// Vecteur qui part de la position du joueur
			var position:Vector3=transform.position;
			position.y +=0.5;


			//Instantiation des projectiles 
			nouveauProjectile = Instantiate(projectile, position, transform.rotation);
			nouveauProjectile.GetComponent.<Rigidbody>().AddForce(joueurSouris * force);

			}
		}
    }
}
