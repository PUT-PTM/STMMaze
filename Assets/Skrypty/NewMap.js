
private var positionX;
private var positionY;
var spawn_position;

var player_script : charMove;
var player : GameObject;

var spawnX;
var spawnY;


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
		spawn_object(spawnX[i],spawnY[i],block);
	}	
}

function Update () {

	player = GameObject.FindGameObjectsWithTag("Player")[0];
	
	if(player){
	player_script = player.GetComponent(charMove);
	}else{Debug.Log("ni ma playera");}
	var arrayLenght = spawnX.length;
	if(player_script){
		for (var i =0; i<arrayLenght; i++)
		{
			if(player_script.posx == spawnX[i] && player_script.posy == spawnY[i])
			{
				
				player_script.posx = 0;
				player_script.posy = 0;
				var spawn_pos = Vector2(-4.465528,-1.003905);
				player_script.pos = Vector2(-4.465528,-1.003905);
				player.transform.position=Vector3(-4.465528,-1.003905,0);
				Debug.Log('Kolizja');
			}
		}
	}
	else{
	Debug.Log('Ni ma skryptu');
	}
}

function spawn_object(x, y, object)
{
	spawn_position = Vector3(positionX[x], positionY[y], 0);
	var temp_spawn_block = Instantiate(object, spawn_position, Quaternion.identity);
}