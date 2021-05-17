// This file is exported to ---> src/Routes.js
// React required
import React from "react";
import { Link } from "react-router-dom";
// Data / Collections
import { animals } from "../database/animals/allAnimals";
// -------------- Application Begins Bellow ------------ \\

// Main Footer Function
export default function Footer() {

    // Important variables
    const totalAnimals = animals[0].count_species;

    // Return UI
    return (
        <footer id="Footer" className="container-fuild bg-dark text-white p-3">
            <div className="row">

                {/* About Component */}
                <About totalAnimals={totalAnimals} />

                {/* Links Component */}
                <Links />                

                {/* Help Component */}
                <Help />

                {/* Thanks Component */}
                <Thanks />

            </div>
            <div className="row border-top border-secondary mt-3 pt-3">
                <div className="col-md-12 text-center">
                    <span> 2021. AnimalDatabase - All Rights Reserved. Built with </span>
                    <span role="img" aria-label="heart"> &#128150; </span>
                    <span> by Gradi Kayamba </span>
                </div>
            </div>
        </footer>
    );
}

// FooterLink Component
function FooterLink(props) {

    // Important variables
    const { linkTitle, linkRef } = props;

    // Return Tab to UI
    return (
        <li className="list-group-item p-1 mb-2 rounded bg-dark border border-secondary shadow">
            <span role="img" aria-label="arrow" className="border-right border-secondary mr-2"> &#128205; </span>
            <Link to={linkRef} className="text-white"> {linkTitle} </Link>
        </li>
    );
}

// About Component
function About(props) {

    // Important variables
    const { totalAnimals } = props
    // Return UI
    return (
        <div className="col-md-3">
            <p>
                <span role="img" aria-label="chick"> &#128037; </span>
                <strong> About </strong>
            </p>
            <p>
                <b> AnimalDatabase </b>
                <span> is home of the </span>
                <span className="border-bottom border-danger"> cutt</span>
                <span className="border-bottom border-warning">est!</span>
            </p>
            <p> Built by animal lover for all animal lovers around the world. </p>
            <p> We currently have {totalAnimals} animals names in our collection, ... of course we want more. </p>
            <p> - <i className="border-bottom border-warning"> Would you like to help? </i> </p>
            <p className="border border-secondary rounded p-2 text-center shadow">
                <span> visit our </span>
                <a href="#h">GitHub</a>
                <span> Page </span>
            </p>
        </div>
        );
}

// Links Component
function Links() {

    // Return UI
    return (
        <div className="col-md-3 mb-3">
            <p>
                <span role="img" aria-label="chick"> &#128279; </span>
                <strong> Link </strong>
            </p>
            <ul className="list-group list-group-flush">
                <FooterLink linkRef="/category/breeds" linkTitle="Breeds" />
                <FooterLink linkRef="/category/endangered" linkTitle="Endangered" />
                <FooterLink linkRef="/category/extinct" linkTitle="Extinct" />
                <FooterLink linkRef="/category/newspecies" linkTitle="New Species" />
                <FooterLink linkRef="/category/mammals" linkTitle="Mammals" />
                <FooterLink linkRef="/category/mammals" linkTitle="Blog" />
                <FooterLink linkRef="/category/mammals" linkTitle="Sitemap" />
            </ul>
        </div>
        );

}

// Help Component
function Help() {

    // Return UI
    return (
        <div className="col-md-3">
            <p>
                <span role="img" aria-label="sandwitch"> &#127789; </span>
                <strong> Help </strong>
            </p>
            <p> We are open-source and you can help us by contributing to our github page. </p>

            <p className="border border-secondary rounded p-2 text-center shadow">
                <span> visit our </span>
                <a href="#h">GitHub</a>
                <span> Page </span>
            </p>
            <p> What you can help us with? ... </p>
            <p className="m-0">
                <span role="img" aria-label="instrument"> &#127927; </span>
                <span> Spellchecks </span>                
            </p>
            <p className="m-0">
                <span role="img" aria-label="instrument"> &#127927; </span>
                <span> Animal Names </span>                
            </p>
            <p>
                <span role="img" aria-label="instrument"> &#127927; </span>
                <span> Pictures </span>                
            </p>
            <p> Every little effort is appreciated   <span role="img" aria-label="chick"> &#128035; </span> </p>
            
        </div>
        );

}

// Thanks Component
function Thanks() {

    // Return UI
    return (
        <div className="col-md-3">
            <p>
                <span role="img" aria-label="sandwitch"> &#129412; </span>
                <strong> Thanks - About the Author </strong>
            </p>
            <p> Gradi is a Congolese-American self-taught software developer and an animal lover. </p>
            <p> He learned his first line of codes at the age of 20 and Factopedia was his first project.</p>
            <p> AnimalDatabase.net was originally Factopedia.com before changing the name in early 2020.</p>
                        
        </div>
        );

}