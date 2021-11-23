import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function ResultsHeader(props) {
    return (
        <div className="my-3">
            <div className="d-flex">
                <Link to="/">
                    <span className="font-weight-bold">&lt;</span>
                </Link>
                <h4 className="pl-3 font-weight-bold">
                    Trips ({props.total})
                </h4>
            </div>
        </div>
    );
}

ResultsHeader.propTypes = {
    total: PropTypes.number
}

export default ResultsHeader

