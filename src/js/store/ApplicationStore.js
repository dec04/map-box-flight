import {makeAutoObservable} from "mobx";
import Log from "../Log";
import moment from "moment";

const {ipcRenderer, remote} = window.require("electron");

class ApplicationStore {

    alwaysOnTop = localStorage.alwaysOnTop;
    theme = localStorage.theme;
    currentTime = moment();
    currentTimeUTC = moment().utcOffset("+00:00");
    internet = "offline";

    constructor() {
        makeAutoObservable(this);
        Log.d(`Current store:\n-alwaysOnTop: ${this.alwaysOnTop};\n-theme:${this.theme}`);
    }

    get localTime() {
        return this.currentTime.format("ddd, HH:MM:ss");
    }

    get utcTime() {
        return this.currentTimeUTC.format("ddd, HH:MM:ss");
    }

    getTime() {
        this.currentTime = moment();
        this.currentTimeUTC = moment().utcOffset("+00:00");
    }

    changeTheme() {
        if (this.theme === "dark") {
            this.theme = "light";
        } else {
            this.theme = "dark";
        }
        localStorage.theme = this.theme;

        Log.d(`Set state [theme]: ${this.theme}, [localStorage.theme]: ${localStorage.theme}`);
    }

    changeAlwaysOnTop() {
        this.alwaysOnTop = !(this.alwaysOnTop === "true" || this.alwaysOnTop === true);
        localStorage.alwaysOnTop = this.alwaysOnTop;
        Log.d(`Set state [alwaysOnTop]: ${this.alwaysOnTop}, [localStorage.alwaysOnTop]: ${localStorage.alwaysOnTop}`);
    }

    checkConnection() {
        this.intenret = navigator.onLine ? "Fly One Network" : "Offline";
    }

}

export default new ApplicationStore();