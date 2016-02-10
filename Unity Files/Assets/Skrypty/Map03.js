
private var positionX;
private var positionY;
var spawn_position;

var spawnX;
var spawnY;

 var moveUp : KeyCode;
 var moveDown : KeyCode;


var block: GameObject;


function Awake(){

positionX= [-4.465528,-3.465528, -2.465528, -1.465528, -0.465528, 0.534472, 1.534472, 2.534472, 3.534472, 4.534472];
	positionY= [-1.003905, -0.003905296, 0.9960947];
	spawnX = [1,2,3,4,4,5,3,8,6,7];
	spawnY = [1,0,2,0,2,0,0,2,1,1];
	gameObject.SetActive(false);
}

function Start () {
	var arrayLenght = spawnX.length;
	for(var i = 0; i<arrayLenght; i++){
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
	if(theScript){
	theScript.posy = y;
	theScript.posx = x;
	}
	
}