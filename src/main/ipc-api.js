import {BrowserWindow, dialog, ipcMain} from 'electron';

const getDirFromUser = (targetWindow) => {
    const directories = dialog.showOpenDialog(targetWindow, {
        properties: ['openDirectory']
    });

    let dir = directories ? directories[0] : null;
    targetWindow.webContents.send('getDirFromUserResponse', dir);
    console.log('user chose directory:', dir);
};

ipcMain.on('getDirFromUser', (event, data) => {
    console.log('ipcMain data =', data);
    let targetWindow = BrowserWindow.fromId(data);
    getDirFromUser(targetWindow);
});

