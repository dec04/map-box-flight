import Log from "./Log";

const {ipcRenderer, remote} = window.require("electron");

class Application {

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

    static extendDomElements() {
        Element.prototype.setAnimation = function (animations) {
            return new Promise((resolve, reject) => {
                const animationsArray = animations.split(" ");

                Log.d(`Set animations ${animationsArray} on element [${this}]`);

                for (const el of animationsArray) {
                    this.classList.add(el);
                }

                this.addEventListener("animationend", function () {
                    Log.d("Animation end");
                    for (const el of animationsArray) {
                        this.classList.remove(el);
                    }

                    resolve("Animation ended");
                }, {once: true});
            });
        };
    }
}

export {Application};