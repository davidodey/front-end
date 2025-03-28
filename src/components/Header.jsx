import React from "react";
import {EmailIcon, GithubIcon, LocationIcon, PhoneIcon, WebsiteIcon} from "./Icons.jsx";

function Header () {
    return (
        <header>
            <h1>David O'Dey</h1>
            <p className="job-title">UI / UX Engineer | Creative Technologist | Web and Mobile Solutions Expert</p>

            <ul className="contact-info" aria-label="Contact Information">
                <li>
                    <span className="sr-only">Phone:</span>
                    <span className="contact-icon">
              <PhoneIcon/>
              <a href="tel:4804939525" className="phone">
                480-493-9525
              </a>
            </span>
                </li>

                <li>
                    <span className="sr-only">Email:</span>
                    <span className="contact-icon">
              <EmailIcon/>
              <a href="mailto:davodey@gmail.com" className="email">
                davodey@gmail.com
              </a>
            </span>
                </li>

                <li>
                    <span className="sr-only">Website:</span>
                    <span className="contact-icon">
              <WebsiteIcon/>
              <a
                  href="https://davidodey.com"
                  className="github"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                https://davidodey.com
              </a>
            </span>
                </li>

                <li>
                    <span className="sr-only">Location:</span>
                    <span className="contact-icon">
              <LocationIcon size={25}/>
              <span className="location">Phoenix, AZ</span>
            </span>
                </li>
            </ul>
        </header>
    )
}

export default Header