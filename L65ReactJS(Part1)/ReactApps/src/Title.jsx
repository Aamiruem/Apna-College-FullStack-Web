import "./App.css";
function Title() {
    return (
        <div>
            <p>2*2 = {2 * 2}</p>
        < h1 > I am Title</ h1 >;
        <h3>I am a subtitle</h3>
        </div>
    );    
}

export default Title;

// Exporting the component for other files to use it.  In this case, it's used in App.js.  We can import it in any file we want.  In this case, App.js.  This is a simple component that returns a heading.  ReactJS uses JSX to create components.  JSX is a syntax extension for JavaScript, used to describe XML-like structures in JavaScript.  JSX makes it easier to write and understand code.
