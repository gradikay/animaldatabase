// React required
import React from "react";
// Components
import Routes from "./Routes"; // Pages
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Advertisement from "./components/Advertisement"; // Ads
// CSS
import "./css/index.css";
// -------------- Application Begins Bellow ------------ \\

// Main App Page Function
export default function App() {

    // Return UI
    return (
        <div className="App bg-white">

            {/* Navigation component */}
            <Navigation />

            {/* Container for Routes & Ads */}
            <div
                className="container-fluid"
                style={{ minHeight: "calc(100vh - 56px)" }}
            >
                <div className="row">

                    {/* Routes component - Column */}
                    <div className="col-md-12 p-0">
                        <Routes />
                    </div>

                    {/* Advertisement component - Column */}
                    <div className="col-md-12 border-top mb-3">
                        <Advertisement />
                    </div>

                </div>
            </div>

            {/* Footer component */}
            <Footer />

        </div>
    );
}