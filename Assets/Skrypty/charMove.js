#pragma strict

 
 private var pos : Vector2;
 private var tr : Transform;
 
 var speed = 4.0;
 var moveUp : KeyCode;
 var moveDown : KeyCode;
 var moveRight : KeyCode;
 var moveLeft : KeyCode;
 
 function Start() {
     pos = transform.position;
     tr = transform;
 }
 
 function Update() {
 
     if (Input.GetKey(moveRight) && tr.position == pos) {
         pos += Vector2.right;
     }
     else if (Input.GetKeyDown(moveLeft) && tr.position == pos) {
         pos -= Vector2.right;
     }
     else if (Input.GetKeyDown(moveUp) && tr.position == pos) {
         pos += Vector2.up;
     }
     else if (Input.GetKeyDown(moveDown) && tr.position == pos) {
         pos -= Vector2.up;
     }
     
     transform.position = Vector3.MoveTowards(transform.position, pos, Time.deltaTime * speed);
 }   