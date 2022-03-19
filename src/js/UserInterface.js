import {Application} from "./Application";
import Log from "./Log";

export default class UserInterface extends Application {

    static animateElement(element, animations) {
        return new Promise((resolve, reject) => {
            const animationsArray = animations.split(" ");

            Log.d(`Set animations ${animationsArray} on element [${element}]`);

            for (const el of animationsArray) {
                element.classList.add(el);
            }

            element.addEventListener("animationend", function () {
                Log.d("Animation end");
                for (const el of animationsArray) {
                    element.classList.remove(el);
                }

                resolve("Animation ended");
            }, {once: true});
        });
    }

}