import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="wrapper with-image">
            
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="calendar">
            <path className="icon/action/calendar" fill-rule="evenodd" clip-rule="evenodd" d="M42 11H6V15H42V11ZM42 19H6V29H42V19ZM38 25V23H10V25H38ZM42 33H6V37H42V33Z" fill="#E67E22"/>
            </g>
            </svg>
            
            
                <div className="text">GO GREEN</div>
                <div className="flex-wrapper"><b>Make it green</b></div>
                <div className="description">Now more than ever. Our planet is need our</div>

            <div>
               <button className="line" type="submit" name="submit">
               <p className="flex-form">Do it Now</p>
               </button>
            </div>
            </div>
        )
    }
}
// function App() {
//return(

// );
// }
export default App;