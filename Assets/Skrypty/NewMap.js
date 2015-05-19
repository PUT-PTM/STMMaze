
private var positionX;
private var positionY;
var spawn_position;

var block: GameObject;

function Start () {
	positionX= [-4.465528,-3.465528, -2.465528, -1.465528, -0.465528, 0.534472, 1.534472, 2.534472, 3.534472, 4.534472];
	positionY= [-1.003905, -0.003905296, 0.9960947];
	spawn_object(1,0,block);
	spawn_object(2,0,block);
	spawn_object(3,1,block);
	spawn_object(4,1,block);
	spawn_object(4,2,block);
	spawn_object(5,1,block);
	spawn_object(5,2,block);
	spawn_object(7,0,block);
	spawn_object(6,1,block);
	spawn_object(7,1,block);	
}

function Update () {

}

function spawn_object(x, y, object)
{
	spawn_position = Vector3(positionX[x], positionY[y], 0);
	var temp_spawn_block = Instantiate(object, spawn_position, Quaternion.identity);
}