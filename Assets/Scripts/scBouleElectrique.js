#pragma strict

 /*
 * degat appliqué<
 * @access public
 * @var degat
 */

public var degat:float = 10f;

 /*
 * projectile
 * @access public
 * @var anObject
 */

public var projectile : GameObject; 

/*
 * collider du projectile
 * @access public
 * @var projectileCollider
 */

public var projectileCollider : Collider;

 /*
 * main camera
 * @access private
 * @var cam
 */

private var cam : Camera;

 /*
 * tableau de planes
 * @access private
 * @var planes
 */

private var planes : Plane[];


function Start () {

	cam = Camera.main;
	planes = GeometryUtility.CalculateFrustumPlanes(cam);
	projectileCollider = GetComponent.<Collider>();

}

function Update () {

	if (GeometryUtility.TestPlanesAABB(planes, projectileCollider.bounds)) 
	{
		Debug.Log("trouvé");
	}

	else 
	{
		Destroy(this.gameObject);

	}

}

function OnTriggerEnter (autre : Collider) {
	
	if (autre.gameObject.tag == 'ennemi') {

		autre.gameObject.SendMessageUpwards("diminuerVie", degat, SendMessageOptions.DontRequireReceiver);
	}

}

