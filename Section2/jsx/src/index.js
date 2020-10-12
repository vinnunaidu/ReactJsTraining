import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    const buttonText = {text:"Click Me"};
    const bgstyle = {backgroundColor:'green', color:'white'};
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style={bgstyle}>{buttonText.text}</button>
        </div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));