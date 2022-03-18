import React from "react";

export default class AppWrapper extends React.Component {
    render() {
        return <div>
            <h1>💖 Hello World!</h1>
            <p>Welcome to your Electron application.</p>
            <button className='bg-indigo-500'>Tailwind</button>
            <article className="prose prose-stone">
                <h1>Prose test</h1>
                <p>
                    For years parents have espoused the health benefits of eating garlic bread with cheese to their
                    children, with the food earning such an iconic status in our culture that kids will often dress
                    up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                    springing up around the country.
                </p>
            </article>
        </div>;
    }
}

