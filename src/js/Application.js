import Log from "./Log";

class Application {

    static setTheme() {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        Log.i(`Set ${localStorage.theme} theme`);

    }

    static extendDomElements() {
        Element.prototype.setAnimation = function (animations) {
            const animationsArray = animations.split(" ");

            Log.d(`Set animations ${animationsArray} on element [${this}]`);

            for (const el of animationsArray) {
                this.classList.add(`${animationsArray[el]}`);
            }
        };
    }
}

export {Application};