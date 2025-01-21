import React from "react";

function Header () {
    return (
        <header>
            <h1>David O'Dey</h1>
            <p className="job-title">UI Engineer</p>
            <ul className="contact-info" aria-label="Contact Information">
                <li>
                    <span className="sr-only">Phone:</span>
                    <a href="tel:4804939525" className="phone">480-493-9525</a>
                </li>
                <li>
                    <span className="sr-only">Email:</span>
                    <a href="mailto:davodey@gmail.com" className="email">davodey@gmail.com</a>
                </li>
                <li>
                    <span className="sr-only">GitHub:</span>
                    <a
                        href="https://github.io/davodey"
                        className="github"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.io/davodey
                    </a>
                </li>
                <li>
                    <span className="sr-only">Location:</span>
                    <span className="location">Phoenix, AZ</span>
                </li>
            </ul>
        </header>
    )
}

export default Header