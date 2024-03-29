import Log from "./Log";
import {Config} from "../../application.config";

const {ipcRenderer, remote} = window.require("electron");

class Application {

    static getAppById(id) {
        return Config.applications.filter((el) => el.id === id);
    }

    static setTheme() {
        Log.i(`Set ${localStorage.theme} theme`);

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    static setAlwaysOnTop() {
        Log.i(`Set always on top is ${localStorage.alwaysOnTop}`);

        ipcRenderer.send("always-on-top", (localStorage.alwaysOnTop === "true" || localStorage.alwaysOnTop === true));
    }
}

export {Application};