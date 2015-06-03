#pragma strict

 
 var pos : Vector2;
 private var tr : Transform;
 
 var speed = 4.0;
 var moveUp : KeyCode;
 var moveDown : KeyCode;
 var moveRight : KeyCode;
 var moveLeft : KeyCode;
 
 var posx = 0;
 var posy = -1;
 
 var timer = 0.0;

 var spawnPos : Vector2;
 
 static var level = 0;
 
 var map01 : GameObject;
 var map02 : GameObject;
 var map03 : GameObject;


 
 function Start() {
     pos = transform.position;
     tr = transform;
     map02.SetActive(false);
     map03.SetActive(false);
 }
 
 function Update() {
 
 		timer += Time.deltaTime;
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
     if (Input.GetKeyUp(moveRight) && tr.position == pos) {
     	if(posx <9)
     	{
     	 posx++;
         pos += Vector2.right;
        }
     }
     else if (Input.GetKeyUp(moveLeft) && tr.position == pos) {
     	if(posx>0)
     	{
     	 posx--;
         pos -= Vector2.right;
        }
     }
     else if (Input.GetKeyUp(moveUp) && tr.position == pos) {
    
         pos += Vector2.up;
         posy++;
     }
     else if (Input.GetKeyUp(moveDown) && tr.position == pos) {
      		
         pos -= Vector2.up;
         posy--;
     }
     
     transform.position = Vector3.MoveTowards(transform.position, pos, Time.deltaTime * speed);
     
     if(posy == 3 && Input.GetKeyUp(moveUp)){
         posy= -1;
        spawnPos = Vector2(pos.x,-2.003905);
     	var temp_spawn_player = Instantiate(gameObject, spawnPos, Quaternion.identity);
     	Destroy(gameObject,0.1);
     }
     if(posy == -1 && Input.GetKeyUp(moveDown)){
        posy= 3;
        spawnPos = Vector2(pos.x,1.996095);
     	var temp_spawn_player2 = Instantiate(gameObject, spawnPos, Quaternion.identity);
     	Destroy(gameObject,0.1);
     }
     
     if(posy == 1 && posx == 9){
     	level++;
     	posy=0;
     	posx=0;
     	transform.position = Vector3.MoveTowards(transform.position, pos, Time.deltaTime * speed);
     	pos = Vector3(-4.465528,-1.003905,0);
     	transform.position=Vector3.MoveTowards(transform.position, pos, Time.deltaTime*speed*5);
     	var bloczki = GameObject.FindGameObjectsWithTag("block01");
     	for ( var bloczek in bloczki){
     		Destroy(bloczek);
     	}
     	var bloczki2 = GameObject.FindGameObjectsWithTag("block02");
     	for ( var bloczek in bloczki2){
     		Destroy(bloczek);
     	}
     	if(level==1){
     	map01.SetActive(false);
     	map02.SetActive(true);}
     	if(level==2){
     	map02.SetActive(false);
     	map03.SetActive(true);
     	}
     }
     if(level==3){
     	Application.LoadLevel("koniec");
     }
     
 }   