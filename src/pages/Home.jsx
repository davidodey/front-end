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
                        UI / UX engineer with 15+ years of professional experience combining design and technology to deliver innovative, scalable solutions. Adept at UI / UX design, front end development, and full stack development. I have a proven track record of leading cross functional teams to deliver products on time and on budget. Passionate about AI/ML, real time communication, and building impactful products that enhance user experiences and drive business results.
                    </p>
                </section>

                <section className="professional-experience">
                    <h2>Professional Experience</h2>
                    <article className="job-position" style={{marginTop: 0}}>
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    {/*<div className={"logo"}>*/}
                                    {/*    <PearsonLogo width={70} height={70}/>*/}
                                    {/*</div>*/}
                                    <div className="company-icon">
                                        <h3>Lead Creative Technologist</h3>
                                        <div className="company-name">Pearson Education | Remote</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2020 to 2025</span>
                            </div>
                        </div>
                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Improved delivery times and efficiency throughout our UX department by leading a team to design and develop Endeavor, an internal project management system. Built with MongoDB, Express.js, React.js, and Node.js, it enables 150 teammates to efficiently bootstrap, deploy, and manage projects.
                                </li>
                                <li className="accomplishment">
                                    Thrived in a fast paced environment by collaborating with designers and professors to deliver pixel perfect, high impact React.js web applications under tight deadlines for user testing, class testing, investor meetings, and executive meetings.
                                </li>
                                <li className="accomplishment">
                                    Boosted consistency and efficiency across Pearson’s digital ecosystem by leading the design and development of the Gravity Web Components Design System using vanilla JavaScript. We delivered reusable, accessible web components that could be implemented across various codebases, along with robust documentation.
                                </li>
                                <li className="accomplishment">
                                    Spearheaded the design and development of multiple design systems using Figma as a reference to build pattern libraries, style guides, storybooks, and React.js components.
                                </li>
                                <li className="accomplishment">
                                    Teamed up with multiple designers and implemented a backend EPUB to API conversion service, enabling rapid prototyping for the Pearson+ platform and validating eTextbook workflows.
                                </li>
                                <li className="accomplishment">
                                    Using the OpenAI API, I developed a custom chat interface designed to provide career suggestions to students and dynamically update various UI elements based on their responses.
                                </li>
                                <li className="accomplishment">
                                    Provided one on one mentorship and support to teammates, offering guidance on architecture and development, debugging and fixing issues, and suggesting best practices.
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    {/*<div className={"logo"}>*/}
                                    {/*    <PearsonLogo width={70} height={70}/>*/}
                                    {/*</div>*/}
                                    <div className="company-icon">
                                        <h3>Sr. Creative Technologist</h3>
                                        <div className="company-name">Pearson Education | Remote</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2016 to 2020</span>
                            </div>
                        </div>

                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Designed and implemented pattern libraries to drive UI consistency across Pearson’s multiple applications. Standardized reusable React components, improving development efficiency, reducing design inconsistencies, and accelerating feature delivery.
                                </li>
                                <li className="accomplishment">
                                    Built prototypes and MVPs for user experience testing, focusing on reusable web components leveraging modern web component specifications.
                                </li>
                                <li className="accomplishment">
                                    Collaborated with cross functional teams to ensure user centric and accessible design solutions across various products.
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    {/*<div className={"logo"}>*/}
                                    {/*    <OReillyLogo width={70} height={70}/>*/}
                                    {/*</div>*/}
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
                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    {/*<div className={"logo"}>*/}
                                    {/*    <OReillyLogo width={70} height={70}/>*/}
                                    {/*</div>*/}
                                    <div className="company-icon">
                                        <h3>
                                            Creative Director</h3>
                                        <div className="company-name">Cyberitas Technologies - Phoenix Arizona</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2013 to 2014</span>
                            </div>
                        </div>

                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Lead the UI design for various high profile projects, including Better Home and Gardens, and Century 21 websites.
                                </li>
                                <li className="accomplishment">
                                    Involved in high level planning & UX strategy to provide the best designs for our clients, making sure the designs meet business requirements, and hit goals and objectives.
                                </li>
                                <li className="accomplishment">
                                    Introduced new processes improving communication between the design and development teams..
                                </li>
                                <li className="accomplishment">
                                    Improved our teams output and quality of work, through encouragement and education, with design and wireframe reviews.
                                </li>
                                <li className="accomplishment">
                                    Saved our agency money, by implementing new procedures for our design team to track their time better.
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    {/*<div className={"logo"}>*/}
                                    {/*    <OReillyLogo width={70} height={70}/>*/}
                                    {/*</div>*/}
                                    <div className="company-icon">
                                        <h3>

                                            Senior UI / UX Designer</h3>
                                        <div className="company-name">Vemma Nutrition - Phoenix Arizona</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2011 to 2013</span>
                            </div>
                        </div>

                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Sharpened the companies interactive strategy and addressed problems by focusing design efforts on a great user experience, through surveys, user testing, and in-house workshops.
                                </li>
                                <li className="accomplishment">
                                    Caught significant trends in mobile statistics to the companies website, news site, and email campaigns, enabling us to quickly re-think our interactive strategy.
                                </li>
                                <li className="accomplishment">
                                    Lead the UI design for various front-end projects that started with sketches and lead to vibrant interactive designs.
                                </li>
                                <li className="accomplishment">
                                    Gathered business goals and objectives through in-house requirement workshops, stakeholder interviews, and surveys.
                                </li>
                                <li className="accomplishment">
                                    Lead a mobile app project which received 45 5 star reviews, that launched for our 2013 annual convention.
                                </li>
                                <li className="accomplishment">
                                    Lead the design of a 2012 Stevie Award winning email campaign, doubling the click through rate to an average 7% CTR and maintained an open rate of over 32% up from 11% before the implemented design.
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>

                <section className="summary">
                    <h2>Education</h2>
                    <div className="school">
                        <div className="school-info">
                            <h3 className="school-name">
                                University of Advancing Technology
                            </h3>
                            <div className="school-tenure">2003 to 2005</div>
                        </div>
                        <div className="degree-pursued">Web Management</div>
                        <div className="school-location">Tempe, AZ</div>
                    </div>
                    <div className="school">
                        <div className="school-info">
                            <h3>
                                College of Dupage
                            </h3>
                            <div className="school-tenure">2001 to 2003</div>
                        </div>
                        <div className="degree-pursued">General</div>
                        <div className="school-location">Wheaton, IL</div>
                    </div>
                </section>
            </main>

            <aside>
                <section className="achievement">
                    <h2>Achievements</h2>
                    <div className="achievement">
                        <h3 className="achievement-title">Homework Pilot: iOS</h3>
                        <p>AI/ML Enthusiast: Vibe coded and launched an AI powered iOS homework app (Homework Pilot) to simplify education for families.</p>
                        <a href={"https://homeworkpilot.com/"}>Homework Pilot Website</a>
                    </div>
                    <div className="achievement">
                        <h3 className="achievement-title">Pearson Plus</h3>
                        <p>Played a pivotal role in guiding the design and user experience of Pearson's first DTC application. </p>
                        <a href={"https://www.pearson.com/en-us/pearsonplus.html"}>Pearson Plus Website</a>
                    </div>
                    <div className="achievement">
                        <h3 className="achievement-title">W3C CSS Working Group</h3>
                        <p>Was honored to represent Pearson Education in 2017, getting valuable insight into the state of CSS and its future. </p>
                        <a href={"https://www.w3.org/groups/wg/css/"}>W3C CSS Website</a>
                    </div>
                </section>
                <section className="skills">
                    <h2>Skills</h2>
                    <div className="skill-type">
                        <ul>
                            <li className="skill">Front End Design & Development: Expertise in React, Web Components, JavaScript (ES6+), HTML5, CSS, SCSS, Figma and accessibility for building performant, modular interfaces.
                            </li>
                            <li className="skill">Full stack & Server Side: Hands on experience with Node.js, Express, MongoDB, Firestore, Redis, RESTful API design, and microservices architecture.
                            </li>
                            <li className="skill">Design Systems & UX/UI: Proven ability to develop reusable component libraries, applying best practices in accessibility and user experience design.
                            </li>
                            <li className="skill">Cloud & Deployment: Skilled in AWS SDK implementation, Firebase, and DigitalOcean for deploying, scaling, and maintaining robust services.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="strengths">
                    <h2>Strengths</h2>
                    <div className="strength-type">
                        <div className="strength-title">Innovation & Future Focused Thinking: Adept at integrating emerging technologies (AI/ML, real time communication) to develop forward looking products that stay ahead of market trends.
                        </div>
                    </div>
                    <div className="strength-type">
                        <div className="strength-title">Strategic Problem Solving: Skilled at diagnosing complex technical challenges and implementing scalable, efficient solutions that drive measurable business outcomes.
                        </div>
                    </div>
                    <div className="strength-type">
                        <div className="strength-title">Leadership & Team Building: Proven track record of mentoring developers, fostering collaboration, and guiding cross functional teams toward common objectives.
                        </div>
                    </div>
                </section>

                <section className="references">
                    <h2>References</h2>
                    <div className="reference">
                        <div className="reference-name">Greg Davis, Director of Creative Technology</div>
                        <div className="reference-info">
                            <span className="reference-email">greg.davis@pearson.com</span>
                            <span className="reference-phone">720 987 1651</span>
                        </div>
                    </div>
                    <div className="reference">
                        <div className="reference-name">Steven Meyer, CPO of Parts Tech Automotive</div>
                        <div className="reference-info">
                            <span className="reference-email">steven.m.usmc@gmail.com</span>
                            <span className="reference-phone">562 715 1149</span>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    );
}

export default Home;