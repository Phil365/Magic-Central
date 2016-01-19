#pragma strict
public var cible:GameObject;


 private var distance:float=1;
function Start () {

}


 function Update(){
 
     transform.position.z = cible.transform.position.z -distance;
     transform.position.y = cible.transform.position.y;
     transform.position.x = cible.transform.position.x;
 
 }