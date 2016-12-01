const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Vars init
var mainWindow = null;
const debug = true;

// Quit when all windows are closed
app.on('window-all-closed', function() {  
    app.quit();
});

// When application is ready, create application window
app.on('ready', function() {

    // Create main window
    // Other options available at:
    // http://electron.atom.io/docs/latest/api/browser-window/#new-browserwindow-options
    mainWindow = new BrowserWindow({
        name: "Vagtron",
        width: 1000,
        height: 600,
        toolbar: false,
        backgroundColor: '#f7f7f7'
    });

    // Target HTML file which will be opened in window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Uncomment to use Chrome developer tools
    if(debug) mainWindow.webContents.openDevTools({detach:true});

    // Cleanup when window is closed
    mainWindow.on('closed', function() {
        mainWindow = null;
    });

});