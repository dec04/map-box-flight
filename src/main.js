const {app, BrowserWindow, ipcMain, Notification, BrowserView} = require("electron");
const path = require("path");
const {Config} = require("../application.config");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        frame: false,
        titleBarStyle: "hidden-inset",
        show: true,
        titleBarOverlay: {
            color: "#2f3241",
            symbolColor: "#74b1be"
        },
        width: Config.applicationWidth,
        height: Config.applicationHeight,
        maxHeight: Config.applicationMaxHeight,
        maxWidth: Config.applicationMaxWidth,
        minHeight: Config.applicationMinHeight,
        minWidth: Config.applicationMinWidth,
        backgroundColor: "#7B435B",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            webviewTag: true
        }
    });

    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on("close-me", (evt, arg) => {
    app.quit();
});

ipcMain.on("always-on-top", (evt, arg) => {
    for (const win of BrowserWindow.getAllWindows()) {
        win.setAlwaysOnTop(arg, "normal");
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
