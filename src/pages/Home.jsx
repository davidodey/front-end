import React from "react";

function Home() {
    return (
        <div className={"app"}>
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
            <main>
                <section className={"summary"}>
                    <h2>
                        Summary
                    </h2>
                    <p>
                        Award-winning Creative Technologist with 20+ years of experience combining design and technology
                        to deliver innovative, scalable solutions. Adept at front-end development, mobile applications
                        (iOS/React Native), and full-stack development, with a proven track record of leading
                        cross-functional teams to success. Passionate about AI/ML, real-time communication, and building
                        impactful products that enhance user experiences and drive business results.
                    </p>
                </section>
                <section className={"professional-experience"}>
                    <h2>
                        Professional Experience
                    </h2>
                    <article className={"job-position"}>
                        <div className={"job-title"}>
                            <h3>Lead Creative Technologist</h3>
                            <span className="job-tenure">2020 - 2025</span>
                        </div>
                        <div className={"company"}>
                            <div className={"logo"}></div>
                            <div className={"company-name"}>Pearson | Remote</div>
                        </div>
                        <div className={"my-accomplishments"}>
                            <ul>
                                <li className={"accomplishment"}>Spearheaded the architecture, design, and development
                                    of scalable systems that revolutionized digital learning and streamlined workflows.
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>
                <section className={"summary"}>
                    <h2>
                        Education
                    </h2>
                    <div className={"school"}>
                        <div className={"school-info"}>
                            <div className={"school-name"}>University of Advancing Technology</div>
                            <div className={"school-tenure"}>2003-2005</div>
                        </div>
                        <div className={"degree-pursued"}>Web Management</div>
                        <div className={"school-location"}>Tempe, AZ</div>
                    </div>
                </section>
            </main>
            <aside>
                <section className={"achievement"}>
                    <h2>Achievements</h2>
                    <div className={"achievement"}>
                        <div className={"achievement-title"}>Homework Pilot: IOS</div>
                        <p>Information on homework pilot</p>
                    </div>
                </section>
                <section className={"skills"}>
                    <h2>Skills</h2>
                    <div className={"skill-type"}>
                        <div className={"skill-title"}>Homework Pilot: IOS</div>
                        <ul>
                            <li className={"skill"}>Grunt</li>
                        </ul>
                    </div>
                </section>
                <section className={"strengths"}>
                    <h2>Strengths</h2>
                    <div className={"strength-type"}>
                        <div className={"strength-title"}>Leader</div>
                        <p>helped mentor</p>
                    </div>
                </section>
                <section className={"references"}>
                    <h2>References</h2>
                    <div className={"reference-name"}>
                        Greg Davis
                    </div>
                    <div className={"reference-info"}>
                        <span className={"reference-email"}>greg.davis@pearson.com</span>
                        <span className={"reference-phone"}>480-993-7293</span>
                    </div>
                </section>
            </aside>
        </div>
    );
}

export default Home;