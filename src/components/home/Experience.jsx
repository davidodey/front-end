import React from "react";
import CompanyLogo from "./CompanyLogo.jsx";
import Accomplisment from "./CompanyAccomplishments.jsx";

export default function Experience() {
    return (
        <>
            {/*Ability to add / remove / hide companys*/}
            <h2>Professional Experience</h2>
            <article className="job-position">
                <div className="company">
                    <div className="job-title">
                        <div className="flex">
                            <div className="logo">
                                {/*Ability to upload logo to assign to ssaid company*/}
                                <CompanyLogo width={60} height={60} />
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
                        {/*Ability to add / remove accomplishements.*/}
                        <Accomplisment />
                    </ul>
                </div>
            </article>
        </>
    );
}