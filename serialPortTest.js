var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var robot = require("kbm-robot");
var readline = require('readline');


var serialPort = new SerialPort("COM9", {
  baudrate: 9600
});

robot.startJar();
	
serialPort.on("open", function () {
  console.log('open');
  
  serialPort.on('data', function(data) {
		data = data.toString();
		data = data.slice(1,2);
		switch (data) {
			case '1':
				pressKey('UP');
				console.log('UP');
				break;
			case '2':
				pressKey('DOWN');
				console.log('DOWN');
				break;
			case '3':
				pressKey('RIGHT');
				console.log('RIGHT');
				break;
			case '4':
				pressKey('LEFT');
				console.log('LEFT');
				break;
		}
  });


  serialPort.write("ls\n", function(err, results) {
	console.log('err ' + err);
	console.log('results ' + results);
  });
});


	

function pressKey(string) {
	robot
			.press(string)
			.sleep(100)
			.release(string)
			.sleep(100)
			.go()
}