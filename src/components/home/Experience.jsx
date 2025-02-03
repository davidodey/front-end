import React from "react";
import CompanyLogo from "./CompanyLogo.jsx";

export default function Experience({data}) {
    return (
        <>
            {/*Ability to add / remove / hide companys*/}

            <article className="job-position">
                <div className="company">
                    <div className="job-title">
                        <div className="flex">
                            <div className="logo">
                                <CompanyLogo data={data} width={60} height={60} />
                            </div>
                            <div className="company-icon">
                                <h3>{data.companyName}</h3>
                                <div className="company-name">{data.title}</div>
                            </div>
                        </div>
                        <span className="job-tenure">2020 - 2025</span>
                    </div>
                </div>
                {
                    data.accomplishments?.map(item => {
                        return <li>{item.desc}</li>
                    })
                }
            </article>
        </>
    );
}