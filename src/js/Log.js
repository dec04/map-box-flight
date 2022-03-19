import {Config} from "../../application.config";

export default class Log {
    static d(message) {
        if (process.env.NODE_ENV === "development") {
            console.log(`%c ${message}`, `color: ${Config.debugColor}`);
        }
    }

    static e(message) {
        console.log(`%c ${message}`, `color: ${Config.errorColor}`);
    }

    static i(message) {
        console.log(`%c ${message}`, `color: ${Config.infoColor}`);
    }

    static w(message) {
        console.log(`%c ${message}`, `color: ${Config.warningColor}`);
    }
}