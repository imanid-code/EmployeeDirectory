import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Jumbotron () {
    return (
        <div style={{backgroundColor: "lightblue"}} className="jumbotron">
            <div className="container">
                <h1 style={{textAlign: "center", color: "white" }}className="display">
                    Employee Tracker
                </h1>
            </div>
        </div>
    )
}

export default Jumbotron;