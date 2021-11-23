import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import ResultsHeader from "./header";
import ResultCard from "./resultCard";

class SearchResults extends Component {
    render() {
        const { location } = this.props;
        const results = location.state.results;

        return (
            <div className="container">
                <ResultsHeader total={results.length} />
                <div className="mt-5">
                    {results.map((res, i) => (
                        <Link to={`/trip-details/${res.id}`}>
                            <ResultCard
                                key={i}
                                pickupLocation={res.pickup_location}
                                dropoffLocation={res.dropoff_location}
                                startTime={res.pickup_date}
                                rating={res.driver_rating}
                                status={res.status}
                                cost={`${res.cost} ${res.cost_unit}`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(SearchResults);
