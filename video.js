var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready',function(){
  var mainWindow = new BrowserWindow({
    width: 1000,
    height: 800
  });
  console.log(this);
  mainWindow.loadURL("file://"+__dirname+"/index.html");
  mainWindow.openDevTools();
});
