// This file is exported to ---> src/Routes.js
// React required
import React from "react";
import { useLocation } from "react-router-dom";
// Components
import NavLink from "./NavLink";
// -------------- Application Begins Bellow ------------ \\

// Main Navigation Function
export default function Navigation() {

    // Important variables
    let location = useLocation();  // Getting current path location
    const path = location.pathname;

    // Return UI
    return (
        <nav
            id="Navigation"
            className={`navbar navbar-expand-md navbar-dark border-bottom shadow-sm
                ${path === "/extinct" ? "bg-extinct border-warning" : null}
                ${path === "/newspecies" ? "bg-new-species border-info" : null}
                ${path === "/endangered" ? "bg-endangered border-danger" : null}
                ${path === "/" || path === "/blog" || path === "/breeds" ? "bg-dark border-dark" : null}
            `}
        >

            {/* Brand */}
            <a className="navbar-brand border-bottom" href="/"> <b> AnimalDatabase </b> </a>

            {/* Helper - disable button */}
            {(() => {
                switch (path) {
                    case "/extinct":
                        return <button className="btn btn-warning border border-secondary" disabled> {path} </button>;
                    case "/endangered":
                        return <button className="btn btn-danger border border-secondary" disabled> {path} </button>;
                    case "/newspecies":
                        return <button className="btn btn-info border border-secondary" disabled> {path} </button>;
                    default:
                        return null;
                }
            })()}            

            {/* Toggler / collapsibe Button */}
            <button
                className="navbar-toggler btn-dark bg-dark"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
            >

                {/* Icon */}
                <span className="navbar-toggler-icon"></span>

            </button>

            {/* Navbar links */}
            <div id="collapsibleNavbar" className="collapse navbar-collapse justify-content-center">

                {/* Tabs - List */}
                <ul className="navbar-nav">

                    {/* NavLink Component ~ Home */}
                    <NavLink linkName="Home" linkReference="/" />

                    {/* NavLink Component ~ Home */}
                    <NavLink linkName="Breeds" linkReference="/breeds" />

                    {/* NavLink Component ~ Endangered ~ animals */}
                    <NavLink linkName="Endangered" linkReference="/endangered" />

                    {/* NavLink Component ~ Extinct ~ animals */}
                    <NavLink linkName="Extinct" linkReference="/extinct" />

                    {/* NavLink Component ~ Extinct ~ animals */}
                    <NavLink linkName="New Species" linkReference="/newspecies" />

                    {/* NavLink Component ~ Blog */}
                    <NavLink linkName="Blog" linkReference="/blog" />

                </ul>

            </div>

        </nav>
    );
}