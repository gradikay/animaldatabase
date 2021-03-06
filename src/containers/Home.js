// This file is exported to ---> src/Routes.js
// React required
import React, { useEffect, useState } from "react";
// Data / Collections
//import { animals } from "../database/animals/all_animals";
import { breedList } from "../database/animals/filter_breed";
// -------------- Application Begins Bellow ------------ \\

// Main Home Function
export default function Home() {

    // Important variables
    const [isLoading, setIsLoading] = useState(false); 
    const [data, setData] = useState([]);

    // working with data
    useEffect(() => {

        // Cleanup variable
        let unmounted = false;

        // Start loading
        setIsLoading(true);

        // Load Function
        async function onLoad() {

            try {
                if (!unmounted) {

                    // setting breed list to data
                    setData(breedList);
                }
            } catch (e) {

                alert(e);
            }

            // Stop loading
            setIsLoading(false);
        }

        // Returning onLoad Function
        onLoad();

        // Avoid post leaks by cleaning up useEffect with "unmounted" variable set to true
        return () => {
            unmounted = true;
            setData([]);
        };

    // Our clean up happens whenever the post changes or we leave the page
    }, []);

    //console.log(animals);
    //console.log(breedList);

    // Return UI
    return (
        <main id="Home" className="">

            {/* Introduction Component */}
            <Introduction />

            {/* Banner Component */}
            <Banner />

            {/* Row */}
            <div className="row m-0"> 
                <div className="col-md-6 p-0">

                    {/* Endangered Component */}
                    <NewSpecies />

                </div>
                <div className="col-md-6 p-0">

                    {/* Breeds Component */}
                    <Breeds isLoading={isLoading} data={data} />

                </div>
            </div>

            {/* Mammals Component */}
            <Mammals />

            {/* Row */}
            <div className="row m-0">
                <div className="col-md-6 p-0">

                    {/* Endangered Component */}
                    <Endangered />

                </div>
                <div className="col-md-6 p-0">

                    {/* Endangered Component */}
                    <Extincted />

                </div>
            </div>

            {/* Mammals Component */}
            <Blog />

        </main>
    );
}

// Introduction Component
function Introduction() {

    // Return UI
    return (
        <div className="text-center p-3 py-5 text-white bg-dark" style={{ }}>

            {/* Title */}
            <h1>AnimalDatabase</h1>

            {/* Description */}
            <p>We are an open-source animal database.</p>

            {/* Input */}
            <div className="row mx-auto justify-content-center">
                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control border-warning alert-warning" placeholder="Search" />
                        <div className="input-group-append shadow-sm">
                            <button className="btn btn-outline-warning alert-warning border-warning" type="submit">
                                <strong> Search Animal </strong>
                            </button>
                        </div>
                    </div>
                </div> 
            </div>

        </div>
        );
}

// Banner Component
function Banner() {
    return (
        <div className="alert alert-primary border border-primary m-3 shadow-sm">
            <strong>New!</strong> Learn how to submit animal names and become a contributor.
        </div>
        );
}

// Endangered Component
function NewSpecies() {

    // Return UI
    return (
        <div className="border-top pt-5 p-3">
            <div className="row m-0">
                <div className="col-md-12 mb-3">
                    <h2>
                        <span role="img" aria-label="chick"> &#129425; </span>
                        <span>New Species </span>
                    </h2>
                    <p>In this section you will see various breeds of animals.</p>
                    <p>Animals withing breeds share many characteristics since they originate from the same species.</p>
                    <button type="button" className="btn btn-info alert-info border-info shadow-sm">
                        <span> All new species </span>
                        <span role="img" aria-label="chick"> &#129425; </span>
                    </button>
                </div>
                <div className="col-md-12 alert-info border rounded border-info text-center p-3 py-4">
                    <h3 className="mb-3">
                        <strong> Notable New Species </strong>
                    </h3>
                    <div className="btn-group w-100 shadow-sm mb-3">
                        <button type="button" className="btn btn-info alert-info border-info">
                            <b> Snakes </b>
                        </button>
                        <button type="button" className="btn btn-info alert-info border-info">
                            <b> Turtles </b>
                        </button>
                    </div>
                    <div className="btn-group w-100 shadow-sm">
                        <button type="button" className="btn btn-info alert-info border-info">
                            <b> Cats </b>
                        </button>
                        <button type="button" className="btn btn-info alert-info border-info">
                            <b> Dogs </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Breeds Component
function Breeds(props) {

    // Important variables
    const { data, isLoading } = props;

    // Return UI
    return (
        <div className="bg-light border-top py-5 p-3 border-left">
            <div className="row m-0">
                <div className="col-md-12 mb-3"> 
                    <h2>
                        <span role="img" aria-label="chick"> &#129419; </span>
                        <span> Breeds </span>
                    </h2>
                    <p>In this section you will see various breeds of animals.</p>
                    <p>Animals withing breeds share many characteristics since they originate from the same species.</p>
                    <button type="button" className="btn btn-primary alert-primary border-primary shadow-sm">
                        <span> All breeds </span>
                        <span role="img" aria-label="chick"> &#129419; </span>
                    </button>
                </div>
                <div className="col-md-12 alert-primary border rounded border-primary text-center p-3 py-4">

                    {/* Heading */}
                    <h3 className="mb-3">
                        <strong> Notable breeds </strong>
                    </h3>

                    {/* Button Component */}
                    {!isLoading && data

                        // Button
                        ? <Button data={data} />

                        // Loading
                        : <div className="p-3 text-center w-100">
                            <span className="spinner-border text-muted"></span>
                        </div>
                    }

                </div>
            </div>
        </div>
        );
}

// Endangered Component
function Endangered() {

    // Return UI
    return (
        <div className="bg-light border-top py-5 p-3 border-right">        
            <div className="row m-0">
                <div className="col-md-12 mb-3">
                    <h2>
                        <span role="img" aria-label="chick"> &#128038; </span>
                        <span> Endangered Species </span>
                    </h2>
                    <p>In this section you will see various breeds of animals.</p>
                    <p>Animals withing breeds share many characteristics since they originate from the same species.</p>
                    <button type="button" className="btn btn-danger alert-danger border-danger shadow-sm">
                        <span> All endangered </span>
                        <span role="img" aria-label="chick"> &#128038; </span>
                    </button>
                </div>
                <div className="col-md-12 alert-danger border rounded border-danger text-center p-3">
                    <h3 className="mb-3">
                        <span> Notable Endangered </span>                        
                    </h3>
                    <div className="btn-group w-100 shadow-sm mb-3">
                        <button type="button" className="btn btn-danger alert-danger border-danger">
                            <b> Snakes </b>
                        </button>
                        <button type="button" className="btn btn-danger alert-danger border-danger">
                            <b> Turtles </b>
                        </button>
                    </div>
                    <div className="btn-group w-100 shadow-sm">
                        <button type="button" className="btn btn-danger alert-danger border-danger">
                            <b> Cats </b>
                        </button>
                        <button type="button" className="btn btn-danger alert-danger border-danger">
                            <b> Dogs </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        );
}

// Extincted Component
function Extincted() {

    // Return UI
    return (
        <div className="border-top pt-5 p-3">
            <div className="row m-0">
                <div className="col-md-12 mb-3">
                    <h2>
                        <span role="img" aria-label="chick"> &#128009; </span>
                        <span> Extincted Species </span>
                    </h2>
                    <p>In this section you will see various breeds of animals.</p>
                    <p>Animals withing breeds share many characteristics since they originate from the same species.</p>
                    <button type="button" className="btn btn-warning alert-warning border-warning shadow-sm">
                        <span> All extincted </span>
                        <span role="img" aria-label="chick"> &#128009; </span>
                    </button>
                </div>
                <div className="col-md-12 alert-warning border rounded border-warning text-center p-3">
                    <h3 className="mb-3">
                        <span> Notable Extincted </span>
                    </h3>
                    <div className="btn-group w-100 shadow-sm mb-3">
                        <button type="button" className="btn btn-warning alert-warning border-warning">
                            <b> Snakes </b>
                        </button>
                        <button type="button" className="btn btn-warning alert-warning border-warning">
                            <b> Turtles </b>
                        </button>
                    </div>
                    <div className="btn-group w-100 shadow-sm">
                        <button type="button" className="btn btn-warning alert-warning border-warning">
                            <b> Cats </b>
                        </button>
                        <button type="button" className="btn btn-warning alert-warning border-warning">
                            <b> Dogs </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        );
}

// Mammals Component
function Mammals() {
    // Return UI
    return (
        <div className="bg-white border-top py-5 p-3">
            <div className="row m-0">
                <div className="col-md-6 mb-3">
                    <h2>
                        <span role="img" aria-label="chick"> &#129421; </span>                       
                        <span> Mammals </span>
                    </h2>
                    <p>In this section you will see various breeds of animals.</p>
                    <p>Animals withing breeds share many characteristics since they originate from the same species.</p>
                    <button type="button" className="btn btn-dark alert-secondary border-dark shadow-sm">
                        <span> All mammals </span>
                        <span role="img" aria-label="chick"> &#129421; </span>
                    </button>
                </div>
                <div className="col-md-6 alert-light border border-dark rounded text-center p-3">
                    <h3 className="mb-3">
                        <span> Mammal Family </span>
                        
                    </h3>
                    <div className="btn-group w-100 shadow-sm mb-3">
                        <button type="button" className="btn btn-outline-dark">
                            <b> Snakes </b>
                        </button>
                        <button type="button" className="btn btn-outline-dark">
                            <b> Turtles </b>
                        </button>
                    </div>
                    <div className="btn-group w-100 shadow-sm">
                        <button type="button" className="btn btn-outline-dark">
                            <b> Cats </b>
                        </button>
                        <button type="button" className="btn btn-outline-dark">
                            <b> Dogs </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Blog Component
function Blog() {

    // Return UI
    return (
        <div className="bg-light border-top text-center p-3 py-5">
            <h2>
                <span role="img" aria-label="chick"> &#128220; </span>
                <span> Blog </span>
            </h2>
            <p> Our blog is all about animals. Read More </p>
            <div className="row">
                <div className="col-md-3">
                    <div className="card shadow-sm border-0">
                        <div className="card-header alert-danger border border-danger">
                            <h3> Top 10 Dangerous Snakes </h3>
                        </div>
                        <div className="card-body bg-white border-left border-right">
                            <p className="mb-0"> Content </p>
                        </div>
                        <div className="card-footer alert-light border py-2">
                            <span> by Gradi </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm border-0">
                        <div className="card-header alert-danger border border-danger">
                            <h3> Top 10 Dangerous Snakes </h3>
                        </div>
                        <div className="card-body bg-white border-left border-right">
                            <p className="mb-0"> Content </p>
                        </div>
                        <div className="card-footer alert-light border py-2">
                            <span> by Gradi </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm border-0">
                        <div className="card-header alert-danger border border-danger">
                            <h3> Top 10 Dangerous Snakes </h3>
                        </div>
                        <div className="card-body bg-white border-left border-right">
                            <p className="mb-0"> Content </p>
                        </div>
                        <div className="card-footer alert-light border py-2">
                            <span> by Gradi </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm border-0">
                        <div className="card-header alert-danger border border-danger">
                            <h3> Top 10 Dangerous Snakes </h3>
                        </div>
                        <div className="card-body bg-white border-left border-right">
                            <p className="mb-0"> Content </p>
                        </div>
                        <div className="card-footer alert-light border py-2">
                            <span> by Gradi </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

// Button Component
function Button(props) {

    // Important variables
    const { data } = props;

    // Return UI
    return (
        <div className="row m-0">
                { data.map((the, i) => {

                    // Important variables
                    const name = the.name;
                    const count = the.count_species;

                    // Return UI
                    return (
                        <div className="col-md-6 p-0 px-2" key={i++}>
                            <button
                                type="button"
                                className="btn btn-primary alert-primary border-primary text-capitalize mb-2 shadow-sm w-100"
                            >
                                <b> {name} </b> - <span> {count} species </span>
                            </button>
                        </div>
                    );
                })}

            </div>
        );
}
