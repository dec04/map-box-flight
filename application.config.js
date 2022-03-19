import json from "./package.json";

export class Config {
    // Main browser resolution (iPad Pro Gen 2)
    static applicationWidth = 834;
    static applicationHeight = 1112;
    static applicationMinWidth = 400;
    static applicationMinHeight = 550;
    static applicationMaxWidth = 1034;
    static applicationMaxHeight = 1312;

    static applicationTitle = json.productName;

    // Log colors
    static debugColor = "#2563eb";
    static errorColor = "#dc2626";
    static infoColor = "#0891b2";
    static warningColor = "#ca8a04";
}