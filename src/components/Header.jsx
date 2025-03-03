import React from "react";
import {EmailIcon, GithubIcon, LocationIcon, PhoneIcon} from "./Icons.jsx";

function Header () {
    return (
        <header>
            <h1>David O'Dey</h1>
            <p className="job-title">Creative Technologist | UI / UX Engineer | Web and Mobile Solutions Expert</p>

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
                    <span className="sr-only">GitHub:</span>
                    <span className="contact-icon">
              <GithubIcon/>
              <a
                  href="https://github.com/davodey"
                  className="github"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                github.com/davodey
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