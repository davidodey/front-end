import React, { useState } from "react";
import "../assets/admin.css";
import { IconContact, IconSummary } from "../components/Icons.jsx";

// Import your new sub-components:
import AdminSidebar from "../components/admin/AdminSidebar";
import ContactSection from "../components/admin/ContactSection";
import SummarySection from "../components/admin/SummarySection";

function AdminCMS() {
    // -------------------------------------
    // CONTACT + SUMMARY STATE
    // -------------------------------------
    const [name, setName] = useState("David O'Dey");
    const [jobTitle, setJobTitle] = useState("UI Engineer...");
    const [phone, setPhone] = useState("480-493-9525");
    const [email, setEmail] = useState("davodey@gmail.com");
    const [github, setGithub] = useState("github.com/davodey");
    const [location, setLocation] = useState("Phoenix, AZ");

    const [summary, setSummary] = useState("Award-winning Creative Technologist...");

    // -------------------------------------
    //  Which section is active in the sidebar
    // -------------------------------------
    const [activeSection, setActiveSection] = useState("contact");

    // The sidebar navigation items
    const sidebarLinks = [
        { id: "contact", label: "Contact", icon: <IconContact width={24} height={24} /> },
        { id: "summary", label: "Summary", icon: <IconSummary width={24} height={24} /> },
    ];

    // -------------------------------------
    //  SAVE HANDLERS
    // -------------------------------------
    const handleSaveContactInfo = async () => {
        try {
            const response = await fetch('/server/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies for session
                body: JSON.stringify({
                    name,
                    jobTitle,
                    phone,
                    email,
                    github,
                    location,
                }),
            });

            if (!response.ok) {
                // Extract error message from response
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to save contact information');
            }

            const data = await response.json();
        } catch (err) {
            console.error('Error saving contact info:', err);
        }
    };

    const handleSaveSummary = () => {
        console.log("Summary saved:", summary);
        alert("Summary saved!");
    };

    // -------------------------------------
    //  DECIDE WHICH SECTION TO RENDER
    // -------------------------------------
    let mainContent;
    if (activeSection === "contact") {
        mainContent = (
            <ContactSection
                name={name}
                setName={setName}
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                github={github}
                setGithub={setGithub}
                location={location}
                setLocation={setLocation}
                onSave={handleSaveContactInfo}
            />
        );
    } else if (activeSection === "summary") {
        mainContent = (
            <SummarySection
                summary={summary}
                setSummary={setSummary}
                onSave={handleSaveSummary}
            />
        );
    } else {
        // Fallback
        mainContent = <div>Invalid Section</div>;
    }

    // -------------------------------------
    //  RENDER LAYOUT
    // -------------------------------------
    return (
        <div className="admin-page-layout">
            <AdminSidebar
                sidebarLinks={sidebarLinks}
                activeSection={activeSection}
                onChangeSection={setActiveSection}
            />
            <main className="admin-main">{mainContent}</main>
        </div>
    );
}

export default AdminCMS;