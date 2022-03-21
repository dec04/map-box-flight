import {makeAutoObservable} from "mobx";
import Log from "../Log";
import moment from "moment";
import testNotifications from "../../../test_mocks/testNotifications";

class ApplicationStore {

    alwaysOnTop = localStorage.alwaysOnTop;
    theme = localStorage.theme;
    currentTime = moment();
    currentTimeUTC = moment().utcOffset("+00:00");
    isOnline = navigator.onLine;
    networkName = "Offline";
    notifications = testNotifications;

    constructor() {
        makeAutoObservable(this);
        this.checkConnection();
        Log.d(`Current store:\n  -alwaysOnTop: ${this.alwaysOnTop};\n  -theme:${this.theme}`);
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
        this.networkName = navigator.onLine ? "Fly One" : "Offline";
    }

    get hasUnreadNotifications() {
        const unread = this.notifications.filter((el) => !el.isRead);
        return unread.length > 0;
    }

    makeNotificationRead(id) {
        this.notifications[id].isRead = true;
    }

}

export default new ApplicationStore();