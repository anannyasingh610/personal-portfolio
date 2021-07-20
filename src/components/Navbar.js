import React from "react";
import logo from "../logo2.png" ;
//react fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons";  

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      
        
        
  <a><img className="logo2" src={logo} alt="logo2..." /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={ faBars } style={{ color: "#fff" }}/> </button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <div class="elements">
    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick="toggleMenu();">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about" onClick="toggleMenu();">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills" onClick="toggleMenu();">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#timeline" onClick="toggleMenu();">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects" onClick="toggleMenu();">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact" onClick="toggleMenu();">Contact</a>
      </li>
    </ul>
    </div>
   </div>
</nav>

    )
}

export default Navbar
