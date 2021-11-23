import React from 'react'
import { Link } from "react-router-dom";

function DetailsHeader(props) {
    return (
        <div className="my-3">
            <div className="d-flex">
                <Link to="/results">
                    <span className="font-weight-bold">&lt;</span>
                </Link>
                <h4 className="pl-3 font-weight-bold">
                    Trip Details
                </h4>
            </div>
        </div>
    );
}


export default DetailsHeader;

