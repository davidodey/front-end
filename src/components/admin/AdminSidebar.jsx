// File: AdminSidebar.jsx

import React from "react";

function AdminSidebar({ sidebarLinks, activeSection, onChangeSection }) {
    return (
        <aside className="admin-sidebar">
            <div className="sidebar-title">CMS Sections</div>
            <ul>
                {sidebarLinks.map((link) => (
                    <li
                        key={link.id}
                        className={activeSection === link.id ? "active" : ""}
                        onClick={() => onChangeSection(link.id)}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default AdminSidebar;