function onInit() {
  SPI1.setup({sck:A5, miso:A6, mosi:A7, baud:integer=9600});
  SPI1.send([0x20,0b01000111], E3);
}
var count=0;
var avrx=0.0, avry=0.0;
var message = 0;
function getAcc() {
  var accx = SPI1.send([0xA9,0], E3)[1];
  var accy = SPI1.send([0xAB,0], E3)[1];

  if (accx>127) accx-=256;
  if (accy>127) accy-=256;
  avrx = 0.1*accx + 0.9*avrx;
  avry = 0.1*accy + 0.9*avry;
  if( avrx > 20) {
    digitalWrite(LED2, 1);
    message = 1;
  } else {
    digitalWrite(LED2, 0);
  }
  if( avrx < -20) {
    digitalWrite(LED4, 1);
    message = 2;
  } else {
    digitalWrite(LED4, 0);
  }
  if( avry > 20) {
    digitalWrite(LED1, 1);
    message = 3;
  }
  else {
    digitalWrite(LED1, 0);
  }
  if( avry < -20) {
    digitalWrite(LED3, 1);
    message = 4;
  } else {
    digitalWrite(LED3, 0);
  }
  count++;
  if(count % 100 == 99) {
    console.log(message);
  }
  if(count > 1000) {
    count = 0;
  }
  message = 0;
}
onInit();

setInterval(getAcc, 10);