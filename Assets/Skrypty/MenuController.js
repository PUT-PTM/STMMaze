#pragma strict

function Start () {

}

function Update () {
	if(Input.anyKey){
		Application.LoadLevel("Main");
	}
}