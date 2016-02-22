var SerialPort = require("serialport").SerialPort;
var robot = require("kbm-robot");
var readline = require('readline');


var serialPort = new SerialPort("COM9", {
  baudrate: 50000
});

var rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function(line) {
    if (line === "start"){
		getData();
	} else if ( line === "stop" ) {
		rl.close();
	}
}).on('close',function(){
    process.exit(0);
});;


robot.startJar();
	
serialPort.on("open", function () {
  console.log('open');

  serialPort.write("ls\n", function(err, results) {
	console.log('err ' + err);
	console.log('results ' + results);
  });
});

function getData() {
	serialPort.on('data', function(data) {
		var formattedData = data.toString();
		formattedData.replace(/^[a-z0-9]+$/, '');
		console.log(formattedData);
		if(formattedData == 'moveUP') {
			console.log('SIKI');
		}
		switch (formattedData) {
			case "moveUP":
				pressKey('UP');
				break;
			case 'moveDOWN':
				pressKey('DOWN');
				break;
			case 'moveRIGHT':
				pressKey('RIGHT');
				break;
			case 'moveLEFT':
				pressKey('LEFT');
				break;
			default:
		}
		pressKey('NUM_LOCK');
  });
}

function pressKey(string) {
setTimeout(function() {
	robot
			.press(string)
			.sleep(200)
			.release(string)
			.go()
			.then(robot.stopJar);
	}, 500);
	
}