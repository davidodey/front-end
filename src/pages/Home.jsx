import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeProfile } from "../redux/userSlice";
import {
    PearsonLogo,
    OReillyLogo,
} from "../components/Icons.jsx";
import Header from "../components/Header.jsx";

function Home() {
    const dispatch = useDispatch();

    // Access user profile, loading status, and error from Redux state
    const { profile, status, error } = useSelector((state) => state.user);

    // Define the user ID for the public profile to fetch
    const userId = "88urSkODGn";

    // Fetch user data on component mount
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchHomeProfile(userId)); // Dispatch the fetch action
        }
    }, [dispatch, status, userId]);

    return (
        <div className="app">
            <Header />
            <main>
                <section className="summary">
                    <h2>Summary</h2>
                    {status === "loading" && <p>Loading user profile...</p>}
                    {error && <p>Error: {error}</p>}
                    {profile ? (
                        <p>
                            {profile.name} is an award-winning Creative Technologist with
                            15+ years of experience, combining design and technology to
                            deliver innovative, scalable solutions.
                        </p>
                    ) : (
                        !status === "loading" && <p>No profile data available.</p>
                    )}
                </section>

                <section className="professional-experience">
                    <h2>Professional Experience</h2>
                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    <div className={"logo"}>
                                        <PearsonLogo width={70} height={70} />
                                    </div>
                                    <div className="company-icon">
                                        <h3>Lead Creative Technologist</h3>
                                        <div className="company-name">Pearson | Remote</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2020 - 2025</span>
                            </div>
                        </div>
                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Spearheaded the architecture, design, and development of
                                    scalable systems that revolutionized digital learning and
                                    streamlined workflows.
                                </li>
                                <li className="accomplishment">
                                    Directed the creation of the Gravity Web Components Design
                                    System, delivering reusable, accessible web components
                                    that boosted consistency and efficiency.
                                </li>
                                <li className="accomplishment">
                                    Designed & implemented a backend EPUB-to-API conversion
                                    service, enabling rapid prototyping for the Pearson+
                                    platform and validating eTextbook workflows.
                                </li>
                                <li className="accomplishment">
                                    Architected & built the Endeavor project management
                                    platform (Figma, GitLab, Azure, Digital Ocean
                                    integrations), improving sprint planning and
                                    cross-functional collaboration.
                                </li>
                                <li className="accomplishment">
                                    Delivered robust front-end and back-end solutions
                                    leveraging DigitalOcean, AWS, MongoDB, Redis, and
                                    Firebase, ensuring high performance and scalability.
                                </li>
                                <li className="accomplishment">
                                    Mentored developers, championed best practices, and
                                    partnered with designers, product managers, and
                                    stakeholders to align solutions with business objectives.
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* Other Positions */}
                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    <div className={"logo"}>
                                        <PearsonLogo width={70} height={70} />
                                    </div>
                                    <div className="company-icon">
                                        <h3>Sr. Creative Technologist</h3>
                                        <div className="company-name">Pearson | Remote</div>
                                    </div>
                                </div>

                                <span className="job-tenure">2016 - 2020</span>
                            </div>
                        </div>
                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Built prototypes and MVPs for user experience testing,
                                    focusing on reusable web components leveraging modern web
                                    component specifications.
                                </li>
                                <li className="accomplishment">
                                    Collaborated with cross-functional teams to ensure
                                    user-centric and accessible design solutions across
                                    various products.
                                </li>
                            </ul>
                        </div>
                    </article>

                    <article className="job-position">
                        <div className="company">
                            <div className="job-title">
                                <div className={"flex"}>
                                    <div className={"logo"}>
                                        <OReillyLogo width={70} height={70} />
                                    </div>
                                    <div className="company-icon">
                                        <h3>UI / UX Engineer</h3>
                                        <div className="company-name">O'Reilly Automotive |
                                            Remote
                                        </div>
                                    </div>
                                </div>

                                <span className="job-tenure">2014 - 2016</span>
                            </div>
                        </div>
                        <div className="my-accomplishments">
                            <ul>
                                <li className="accomplishment">
                                    Led UI development for the First Call Online application
                                    (generating $1.2M+ in daily sales, 8M+ monthly views).
                                </li>
                                <li className="accomplishment">
                                    Reduced load times by up to 75% through performance
                                    optimizations, boosting daily revenue to over $1M.
                                </li>
                                <li className="accomplishment">
                                    Built a custom responsive UI using SCSS, JavaScript, HTML,
                                    JSP, and Pattern Lab to support reusable interface
                                    components and consistent design patterns.
                                </li>
                                <li className="accomplishment">
                                    Managed team members, conducted daily scrums, and
                                    implemented new processes for efficient development
                                    cycles.
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>

                {/* Education, Achievements, Skills, and References Sections */}
                <section className="summary">
                    <h2>Education</h2>
                    <div className="school">
                        <div className="school-info">
                            <h3 className="school-name">
                                University of Advancing Technology
                            </h3>
                            <div className="school-tenure">2003-2005</div>
                        </div>
                        <div className="degree-pursued">Web Management</div>
                        <div className="school-location">Tempe, AZ</div>
                    </div>
                    <div className="school">
                        <div className="school-info">
                            <h3>College of Dupage</h3>
                            <div className="school-tenure">2001-2003</div>
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
                        <h3 className="achievement-title">Homework Pilot: IOS</h3>
                        <p>
                            AI/ML Enthusiast: Created and launched an AI-powered IOS
                            homework app (Homework Pilot) to simplify education for families.
                        </p>
                        <a href={"https://homeworkpilot.com/"}>https://homeworkpilot.com</a>
                    </div>
                    <div className="achievement">
                        <h3 className="achievement-title">Endeavor</h3>
                        <p>
                            Oversaw Endeavor (PM platform): Designed and developed a project
                            management platform with critical tool integrations for
                            streamlined collaboration.
                        </p>
                        <a href={"https://pearsonct.design/"}>https://pearsonct.design</a>
                    </div>
                </section>
            </aside>
        </div>
    );
}

export default Home;