// SocialMedia.js file

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SocialMedia=()=> {
    return (
        <div>
           <a href="https://github.com/fatima" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://web.facebook.com/fatima" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/fatima" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/fatima" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
        </div>
    )
}

export default SocialMedia

