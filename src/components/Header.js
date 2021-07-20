import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <Typed
                className="typed-text"
                strings={["hello.", "bonjour.","ciao.", "namaste.","hola."]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
    
            </div>
            
        </div>
    )
}

export default Header
