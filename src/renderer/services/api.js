import {remote} from 'electron';
const fs = require('fs');
import axios from 'axios';

class API {
    constructor() {
        this.userConfig = JSON.parse(fs.readFileSync(`${remote.app.getPath('home')}/.materialscommons/config.json`));
    }

    post(path, data) {
        return axios.post(this._url(path), data, {params: {apikey: this.userConfig.apikey}});
    }

    put(path, data) {
        return axios.put(this._url(path), data, {params: {apikey: this.userConfig.apikey}});
    }

    get(path) {
        return axios.get(this._url(path), {params: {apikey: this.userConfig.apikey}});
    }

    _url(path) {
        return `${this.userConfig.mcurl}/${path}`;
    }
}

let api = new API();

export default api;
