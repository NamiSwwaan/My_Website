import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer({ openChat }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Darsh Parikh. All rights reserved.</p>
          <div className="social-links">
            <a href="mailto:parikh.darsh@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://linkedin.com/in/darsh-parikh-ai/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/NamiSwwaan/"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        <button className="chat-button" onClick={openChat}>Chat with me</button>
      </div>
    </footer>
  );
}

export default Footer;
