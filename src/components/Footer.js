import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'





import "../styles/Footer.css";












function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      
       <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faGithub} />
     
       
        
        
      </div>
      <p> &copy; 2021 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;
