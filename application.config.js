import json from "./package.json";

export class Config {
    // Main browser resolution (iPad Pro Gen 2)
    static applicationWidth = 834;
    static applicationHeight = 1112;
    static applicationMinWidth = 600;
    static applicationMinHeight = 850;
    static applicationMaxWidth = 1034;
    static applicationMaxHeight = 1312;

    static applicationTitle = json.productName;
    static applicationVersion = json.version;

    // Log colors
    static debugColor = "#2563eb";
    static errorColor = "#dc2626";
    static infoColor = "#0891b2";
    static warningColor = "#ca8a04";
}