#pragma strict

 
 private var pos : Vector2;
 private var tr : Transform;
 
 var speed = 4.0;
 var moveUp : KeyCode;
 var moveDown : KeyCode;
 var moveRight : KeyCode;
 var moveLeft : KeyCode;
 
 var posx = 0;
 var posy = -1;
 
 var timer = 0.0;
 
 var player : GameObject;
 var spawnPos : Vector2;

 
 function Start() {
     pos = transform.position;
     tr = transform;
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
     if (Input.GetKey(moveRight) && tr.position == pos) {
     	if(posx <9)
     	{
     	 posx++;
         pos += Vector2.right;
        }
     }
     else if (Input.GetKeyDown(moveLeft) && tr.position == pos) {
     	if(posx>0)
     	{
     	 posx--;
         pos -= Vector2.right;
        }
     }
     else if (Input.GetKeyDown(moveUp) && tr.position == pos) {
    
         pos += Vector2.up;
         posy++;
          Debug.Log(posy);
     }
     else if (Input.GetKeyDown(moveDown) && tr.position == pos) {
      		
         pos -= Vector2.up;
         posy--;
          Debug.Log(posy); 
     }
     
     transform.position = Vector3.MoveTowards(transform.position, pos, Time.deltaTime * speed);
     
     if(posy == 3 && Input.GetKeyDown(moveUp)){
         posy= -1;
        spawnPos = Vector2(pos.x,-2.003905);
     	var temp_spawn_player = Instantiate(gameObject, spawnPos, Quaternion.identity);
     	Destroy(gameObject,0.1);
     }
     if(posy == -1 && Input.GetKeyDown(moveDown)){
        posy= 3;
        spawnPos = Vector2(pos.x,1.996095);
     	var temp_spawn_player2 = Instantiate(gameObject, spawnPos, Quaternion.identity);
     	Destroy(gameObject,0.1);
     }
     
 }   