import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <h3 className="center">Sorry! This page does not exist!</h3>
            <Link to="/">
                <h5 className="center">
                    Click here to return back to the Home Page
                </h5>
            </Link>
        </div>
    );
};

export default Page404;
