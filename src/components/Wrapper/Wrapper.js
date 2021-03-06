import React from "react";
import "./wrapper.css";

function Wrapper(props) {
    return (
        <div className="wrapper">
            <div className="container col-md-6">
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;