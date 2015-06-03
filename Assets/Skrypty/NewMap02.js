
private var positionX;
private var positionY;
var spawn_position;


var player : GameObject;

var spawnX;
var spawnY;

 var moveUp : KeyCode;
 var moveDown : KeyCode;


var block: GameObject;

function Awake(){
positionX= [-4.465528,-3.465528, -2.465528, -1.465528, -0.465528, 0.534472, 1.534472, 2.534472, 3.534472, 4.534472];
	positionY= [-1.003905, -0.003905296, 0.9960947];
	spawnX = [1,2,3,4,4,5,5,7,6,7];
	spawnY = [0,0,1,1,2,1,2,0,1,1];
}

function Start () {
	var arrayLenght = spawnX.length;

	for(var i = 0; i<arrayLenght; i++){
	     yield WaitForSeconds(0.05);
		spawn_object(spawnX[arrayLenght-(1+i)],spawnY[arrayLenght-(1+i)],block);
	}
}

function Update () {

}

function spawn_object(x, y, object)
{
	spawn_position = Vector3(positionX[x], positionY[y], 0);
	var temp_spawn_block = Instantiate(object, spawn_position, Quaternion.identity);
	var theScript : blockMove = temp_spawn_block.GetComponent(blockMove);
	theScript.posy = y;
	theScript.posx = x;
	if(theScript)
	{
		Debug.Log('jest skrypt '+ theScript.posy);
	}
}