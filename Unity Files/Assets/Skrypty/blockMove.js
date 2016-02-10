#pragma strict

 
 var pos : Vector2;
 private var tr : Transform;
 
 var speed = 4.0;
 var moveUp : KeyCode;
 var moveDown : KeyCode;
 
 var posy = -100;
 var posx = -100;
 
 var spawnPos : Vector2;
 var player : GameObject;
 var player_script : charMove;

 
 function Start() {
     pos = transform.position;
     tr = transform;		
 }
 
 function Update() {
 	if(posy == -1)
     {
        pos += Vector2.up;
        posy = 0;
     }
 if(posy == 3)
     {
        pos -= Vector2.up;
        posy = 2;
     }

     if (Input.GetKeyUp(moveDown) && tr.position == pos) {
    	 posy++;
         pos += Vector2.up;

     }
     else if (Input.GetKeyUp(moveUp) && tr.position == pos) {
      	 posy--;
         pos -= Vector2.up;   
     }

     transform.position = Vector3.MoveTowards(transform.position, pos, Time.deltaTime * speed);
     
     if(posy == 3 && Input.GetKeyUp(moveDown)){
         posy= -1;
        spawnPos = Vector2(pos.x,-2.003905);
     	var temp_spawn_player = Instantiate(gameObject, spawnPos, Quaternion.identity);
     	Destroy(gameObject,0.1);
     }
     if(posy == -1 && Input.GetKeyUp(moveUp)){
        posy= 3;
        spawnPos = Vector2(pos.x,1.996095);
     	var temp_spawn_player2 = Instantiate(gameObject, spawnPos, Quaternion.identity);
     	Destroy(gameObject,0.1);
     }
     	player = GameObject.FindGameObjectsWithTag("Player")[0];
	if(player){
		player_script = player.GetComponent(charMove);
	}else{Debug.Log("ni ma playera");}
	
	if(player_script){
		if(posx == player_script.posx && posy == player_script.posy)
			{
				player_script.pos = Vector2(-4.465528,-1.003905);
				player.transform.position=Vector3(-4.465528,-1.003905,0);Debug.Log("kolizja");
				Debug.Log("kolizja player: "+ player_script.posx+" "+player_script.posy+" block: "+posx+" "+posy);
				player_script.posx = 0;
				player_script.posy = 0;			
			}
	}
     
 }   