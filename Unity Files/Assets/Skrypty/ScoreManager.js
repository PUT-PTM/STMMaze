static var score : int;

private var text: UI.Text;
var text2: UI.Text;
var level : GameObject;

function Awake(){
	text = GetComponent(UI.Text);
	score = 100;
	DontDestroyOnLoad(gameObject);
}

function Update(){
	level = GameObject.FindGameObjectsWithTag("Player")[0];
	var script = level.GetComponent(charMove);
	text.text = "Twój wynik: " + score;
	text2.text = "Poziom: " + (script.level+1);
	if (Input.GetKeyUp(KeyCode.UpArrow)){
		score--;
	}
	if (Input.GetKeyUp(KeyCode.DownArrow)){
		score--;
	}
	if (Input.GetKeyUp(KeyCode.RightArrow)){
		score--;
	}
	if (Input.GetKeyUp(KeyCode.LeftArrow)){
		score--;
	}
	
}