# STMMaze
===========

Simple puzzle game project using STM32 as the player motion controller. The objective of the player is to beat the maze.
There is only one possible path to win each round. Obstacles on the map moves with the movement of the player which makes it harder to reach the end of maze.

# IDE
------

For this project I am using Unity3d version 4.3.2f1

# STM drivers
------
The board i am using for this project is STM32F4 Discovery (before you proceed make sure you have installed drivers for your STM). If you want to get this work on your STM you will need to get through steps listed below:
- Go to: http://www.espruino.com/Download and download espruino firmware for your board
- Go to page: http://www.st.com/web/catalog/tools/FM116/SC959/SS1532/LN1199/PF252419 and download STM-LINK007
- Next step is to plug in your board to USB and open STM-link you downloaded and installed
- Click connect icon and choose espurino file for your board
- Target > Program & Verify
- Now that you have espruino on your board connect mini-usb on STM to PC (should be visible in CP as Virtual Com Port)
- For the espruino IDE you need to install app on google chrome
- Open Espurino app and click connect > choose COM port you have previously viewed in CP.
- Now you can program STM using espurino IDE!

# Content
------
- Unity Files -> contains all files needed to open project in Unity
- PC&Mac&Linux Executables -> download this folder and run lunch.exe to lunch game on your platform!
- STM32 -> scripts that you can run through Espurino IDE (using accelerometer to move player)