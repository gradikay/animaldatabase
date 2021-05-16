// React required
import React from "react";
import { Link, useLocation } from "react-router-dom";
// -------------- Application Begins Bellow ------------ \\

// Main NavLink Component 
// Navigation Links / Tabs
export default function NavLink(props) {

    // Important variables
    const { linkName, linkReference } = props;
    let location = useLocation();  // Getting current path location
    const path = location.pathname;

    // Return Tab to UI
    return (
        <li className="nav-item">

            {/* Link */}
            <Link
                className={`nav-link mr-2
                ${path === "/extinct" ? "btn btn-warning text-dark" : null}
                ${path === "/newspecies" ? "btn btn-primary text-dark" : null}
                ${path === "/endangered" ? "btn btn-danger text-dark" : null}
                ${path === "/" || path === "/blog" || path === "/breeds" ? "btn btn-dark text-white" : null}
            `}
                to={`${linkReference}`}
            >

                {/* Title / Name */}
                <span> {linkName} </span>
            </Link>

        </li>
    );
}