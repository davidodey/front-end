import React from "react";
import {EmailIcon, GithubIcon, LocationIcon, PhoneIcon} from "../Icons.jsx";
import { useDispatch, useSelector } from "react-redux";
function Header () {
    const { profile, status, error } = useSelector((state) => state.user);
    return (
        <header>
            <h1>{profile?.name}</h1>
            <p className="job-title">{profile?.jobTitle}</p>

            <ul className="contact-info" aria-label="Contact Information">
                <li>
                    <span className="sr-only">Phone:</span>
                    <span className="contact-icon">
              <PhoneIcon/>
              <a href="tel:4804939525" className="phone">
                {profile?.phone}
              </a>
            </span>
                </li>

                <li>
                    <span className="sr-only">Email:</span>
                    <span className="contact-icon">
              <EmailIcon/>
              <a href="mailto:davodey@gmail.com" className="email">
                   {profile?.email}
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
                    {profile?.github}
              </a>
            </span>
                </li>

                <li>
                    <span className="sr-only">Location:</span>
                    <span className="contact-icon">
              <LocationIcon size={25}/>
              <span className="location">    {profile?.location}</span>
            </span>
                </li>
            </ul>
        </header>
    )
}

export default Header