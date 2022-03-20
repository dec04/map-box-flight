import {makeAutoObservable} from "mobx";
import Log from "../Log";
import moment from "moment";

class ApplicationStore {

    alwaysOnTop = localStorage.alwaysOnTop;
    theme = localStorage.theme;
    currentTime = moment();
    currentTimeUTC = moment().utcOffset("+00:00");
    isOnline = navigator.onLine;
    networkName = "Offline";
    hasUnreadNotifications = !!localStorage.hasUnreadNotifications;

    constructor() {
        makeAutoObservable(this);
        this.checkConnection();
        Log.d(`Current store:\n-alwaysOnTop: ${this.alwaysOnTop};\n-theme:${this.theme}`);
    }

    //region Time
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

    //endregion

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
        this.isOnline = navigator.onLine;
        this.networkName = navigator.onLine ? "Fly One Network" : "Offline";
    }

    makeNotificationsRead() {
        this.hasUnreadNotifications = false;
        localStorage.hasUnreadNotifications = this.hasUnreadNotifications;
        Log.d(`Set state [hasUnreadNotifications]: ${this.hasUnreadNotifications}, [localStorage.hasUnreadNotifications]: ${localStorage.hasUnreadNotifications}`);
    }

}

export default new ApplicationStore();