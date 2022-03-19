import {makeAutoObservable} from "mobx";
import Log from "../Log";
import {Application} from "../Application";

const {ipcRenderer, remote} = window.require("electron");

class ApplicationStore {

    alwaysOnTop = localStorage.alwaysOnTop;
    theme = localStorage.theme;

    constructor() {
        makeAutoObservable(this);
        Log.d(`Current store:\n-alwaysOnTop: ${this.alwaysOnTop};\n-theme:${this.theme}`);
    }

    changeTheme() {
        if (this.theme === "dark") {
            this.theme = "light";
        } else {
            this.theme = "dark";
        }
        localStorage.theme = this.theme;

        Log.d(`Set state [theme]: ${this.theme}, [localStorage.theme]: ${localStorage.theme}`);
        Application.setTheme();
    }

    changeAlwaysOnTop() {
        this.alwaysOnTop = !(this.alwaysOnTop === "true" || this.alwaysOnTop === true);
        localStorage.alwaysOnTop = this.alwaysOnTop;
        Log.d(`Set state [alwaysOnTop]: ${this.alwaysOnTop}, [localStorage.alwaysOnTop]: ${localStorage.alwaysOnTop}`);
    }

}

export default new ApplicationStore();