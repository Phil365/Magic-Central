#pragma strict

var musique: AudioSource = GetComponent.<AudioSource>(); //Prend l'audio source et la place dans la variable musique

function Start () {

}

function Update () {

}

function Mute () {

	if(musique.mute) { //Si la musique est assourdie

		musique.mute = false; //La musique n'est plus assourdie

	}

	else {

		musique.mute = true; //Sinon, la musique est assourdie.

	}

}