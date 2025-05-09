// Home.jsx
import React from "react";
import {
    PearsonLogo,
    OReillyLogo,
} from "../components/Icons.jsx";
import Header from "../components/Header.jsx";

function Home() {
    return (
        <div className="app">
            <Header />
            <main>
                <section className="summary">
                    <h2>Summary</h2>
                    <p>
                        Seasoned UI/UX Engineer with 15+ years of experience delivering innovative, scalable digital experiences across web and mobile platforms. Expertise spans UI architecture, design systems, front end engineering, and full-stack development. Proven ability to lead cross-functional teams, build accessible and performant applications, and drive alignment between design and engineering. Passionate about emerging technologies including AI/ML and real time communication.                    </p>
                </section>
                <section className="skills">
                    <h2>Skills</h2>
                    <div className="skill-type">
                        <ul className="skills-list">
                            <li className="skill"><strong>Frontend:</strong> JavaScript (ES6+), React, Web Components, HTML5, CSS/SCSS, Responsive Design, Accessibility (WCAG 2.1), Design Tokens</li>
                            <li className="skill"><strong>Backend:</strong> Node.js, Express, Firebase, MongoDB, REST APIs, Microservices</li>
                            <li className="skill"><strong>Tools & Systems:</strong> Git, Redux, AWS, Figma, CI/CD, Performance Optimization, Component Libraries, Design Systems</li>
                            <li className="skill"><strong>Soft Skills:</strong> Agile Development, Cross functional Collaboration, Team Mentorship, Product Alignment, User Testing</li>
                        </ul>
                    </div>
                </section>
                <section className="professional-experience">
                    <h2>Professional Experience</h2>
                    <article className="job-position" style={{marginTop: 0}}>
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    <div className={"logo"}>
                                        <PearsonLogo width={70} height={70}/>
                                    </div>
                                    <div className="company-icon">
                                        <h3>Lead Front End Engineer (Creative Technologist)</h3>
                                        <div className="company-name">Pearson Education | Remote</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2020 to 2025</span>
                            </div>
                        </div>
                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Led the end to end creation of multiple design systems, increasing UI consistency and reducing development time across Pearson’s web platforms by 30%
                                </li>
                                <li className="accomplishment">
                                    Architected and launched an enterprise class testing platform using the MERN stack, enabling real time usability validation at over 10 universities
                                </li>
                                <li className="accomplishment">
                                    Designed and deployed a company wide project management tool, cutting costs and accelerating delivery cycles for more than 150 users
                                </li>
                                <li className="accomplishment">
                                    Delivered over 10 responsive and accessible web applications for usability studies, academic evaluations and executive reviews, meeting strict performance standards
                                </li>
                                <li className="accomplishment">
                                    Mentored junior developers on modular architecture, debugging strategies and front end best practices, improving team output and code maintainability
                                </li>
                            </ul>

                        </div>
                    </article>
                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    <div className={"logo"}>
                                        <PearsonLogo width={70} height={70}/>
                                    </div>
                                    <div className="company-icon">
                                        <h3>Sr. Front End Engineer (Creative Technologist)</h3>
                                        <div className="company-name">Pearson Education | Remote</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2016 to 2020</span>
                            </div>
                        </div>

                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Built reusable UI systems and CSS style guides to align product and design teams across multiple projects
                                </li>
                                <li className="accomplishment">
                                    Implemented Redux based state management and backend data integrations across several React applications
                                </li>
                                <li className="accomplishment">
                                    Collaborated with accessibility experts to achieve WCAG 2.0 compliance in front end implementations across Pearson platforms
                                </li>
                                <li className="accomplishment">
                                    Developed high fidelity static prototypes using HTML, CSS and JavaScript, later adapted into production single page applications
                                </li>
                            </ul>

                        </div>
                    </article>
                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    <div className={"logo"}>
                                        <OReillyLogo width={70} height={70}/>
                                    </div>
                                    <div className="company-icon">
                                        <h3>UI / UX Engineer</h3>
                                        <div className="company-name">O'Reilly Automotive | Remote</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2014 to 2016</span>
                            </div>
                        </div>

                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Led UI development for the First Call Online application (generating $1.2M+ in daily sales, 8M+ monthly views).
                                </li>
                                <li className="accomplishment">
                                    Reduced load times by up to 75% through performance optimizations, boosting daily revenue to over $1M.
                                </li>
                                <li className="accomplishment">
                                    Built a custom responsive UI using SCSS, JavaScript, HTML, JSP, and Pattern Lab to support reusable interface components and consistent design patterns.
                                </li>
                                <li className="accomplishment">
                                    Managed team members, conducted daily scrums, and implemented new processes for efficient development cycles.
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>

            </main>

            <aside>
                <section className="achievement">
                    <h2>Achievements</h2>
                    <div className="achievement">
                        <h3 className="achievement-title">Pearson Plus</h3>
                        <p>
                            Led front end strategy and UX implementation for Pearson’s first direct to consumer (DTC) learning platform. Collaborated over 2 years with Product, UX, and Engineering teams to deliver a scalable React-based application with integrated design system components.
                        </p>
                        <a href="https://www.pearson.com/en-us/pearsonplus.html">Pearson Plus Website</a>
                    </div>
                    <div className="achievement">
                        <h3 className="achievement-title">W3C CSS Working Group</h3>
                        <p>Was honored to represent Pearson Education from 2017 - 2020, getting valuable insight into the state of CSS and its future. </p>
                        <a href={"https://www.w3.org/groups/wg/css/"}>W3C CSS Website</a>
                    </div>
                </section>


                <section className="strengths">
                    <h2>Strengths</h2>
                    <div className="strength-type">
                        <div className="strength-title">
                            Rapid Execution & Continuous Learning: Recognized for producing clean, efficient code under pressure. Quickly absorbs new tools and frameworks, enabling rapid onboarding and reducing time-to-impact on high-stakes projects.
                        </div>
                    </div>
                    <div className="strength-type">
                        <div className="strength-title">
                            Innovation & Future-Focused Thinking: Adept at identifying and integrating emerging technologies—including AI, machine learning, and real-time systems—to create products that anticipate user needs and market shifts.
                        </div>
                    </div>
                    <div className="strength-type">
                        <div className="strength-title">
                            Strategic Problem Solving: Known for untangling complex design and engineering challenges and crafting solutions that are both technically sound and aligned with product strategy, ensuring long-term system integrity and performance.
                        </div>
                    </div>
                    <div className="strength-type">
                        <div className="strength-title">
                            Leadership & Team Development: Builds strong engineering culture through mentorship, hands-on guidance, and cross-disciplinary collaboration. Drives accountability and knowledge sharing to elevate team capability.
                        </div>
                    </div>
                </section>

                <section className="reference">
                    <h2>Education</h2>
                    <div className="school">
                        <div className="school-info">
                            <h3 className="school-name">
                                University of Advancing Technology
                            </h3>

                        </div>
                        <div className="degree-pursued">2003 to 2005 - Web Management</div>
                        <div className="school-location">Tempe, AZ</div>

                    </div>
                    <div className="school">
                        <div className="school-info">
                            <h3>
                                ITT Tech
                            </h3>

                        </div>
                        <div className="degree-pursued">2001 to 2003 - Associates Computer Networking</div>
                        <div className="school-location">Burr Ridge, IL</div>
                    </div>
                    <div className="school">
                        <div className="school-info">
                            <h3>
                                College of Dupage
                            </h3>

                        </div>
                        <div className="degree-pursued">1999 to 2001 General - Credit Transfer</div>
                        <div className="school-location">Wheaton, IL</div>
                    </div>
                </section>
            </aside>
        </div>
    );
}

export default Home;