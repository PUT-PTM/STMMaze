

private var text: UI.Text;
var level : GameObject;

function Awake(){
	text = GetComponent(UI.Text);

}

function Update(){
		var score: GameObject = GameObject.Find('Text');
		var scoreScript = score.GetComponent(ScoreManager);
		text.text = "Wynik: " + scoreScript.score;
}