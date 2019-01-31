import currentWindowTracker from './current-window';
import {ipcRenderer} from 'electron';

export const getDirFromUser = async () => {
    ipcRenderer.send('getDirFromUser', currentWindowTracker.currentWindow.id);
    return new Promise((resolve) => {
        ipcRenderer.on('getDirFromUserResponse', (event, data) => resolve(data))
    })
};