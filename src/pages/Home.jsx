import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeProfile } from "../redux/userSlice";
import {
    PearsonLogo,
    OReillyLogo,
} from "../components/Icons.jsx";
import Header from "../components/home/Header.jsx";
import Experience from "../components/home/Experience.jsx";

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
                            {profile.summaries.summary}
                        </p>
                    ) : (
                        !status === "loading" && <p>No profile data available.</p>
                    )}
                </section>
                <section className="professional-experience">
                    <Experience/>
                </section>

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