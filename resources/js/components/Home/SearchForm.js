import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            includeCancelled: false,
            distance: "d_any",
            time: "t_any",
        };
    }

    update(name, e) {
        this.setState({ [name]: e.target.value });
    }

    toggleCheckbox(event) {
        this.setState({
            includeCancelled: event.target.checked,
        });
    }

    fetchTrips() {
        return axios
            .get("/api/v1/trips", { params: this.state })
            .then((res) => res.data.data)
            .catch((e) => console.log(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        const results = await this.fetchTrips();

        this.props.history.push({
            pathname: "results",
            state: { results },
        });
    }

    distances = {
        d_any: "any",
        d_below_two: "Under 2km",
        d_three_to_eight: "3 to 8km",
        d_eight_to_fifteen: "8 to 15km",
        d_fifteen: "More than 15km",
    };

    times = {
        t_any: "any",
        t_below_five: "Under 5 min",
        t_five_to_ten: "5 to 10 min",
        t_ten_to_twenty: "10 to 20 min",
        t_twenty: "More than 20 min",
    };

    render() {
        return (
            <div className="m-4">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="search-input form-group">
                        <label htmlFor="keyword">Keyword</label>
                        <input
                            type="text"
                            id="keyword"
                            className="form-control w-100"
                            value={this.state.keyword}
                            onChange={(e) => this.update("keyword", e)}
                        />
                    </div>
                    <div className="includeCancelled form-group pl-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={this.state.includeCancelled}
                            onChange={(e) => this.toggleCheckbox(e)}
                            id="include-cancelled"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="include-cancelled"
                        >
                            Include cancelled trips
                        </label>
                    </div>

                    <div className="mt-3 radio">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Distance</h3>
                                {Object.entries(this.distances).map(
                                    ([value, key]) => (
                                        <div className="form-check ">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name=""
                                                id={`d-${value}`}
                                                value={value}
                                                checked={
                                                    this.state.distance ===
                                                    value
                                                }
                                                onChange={(e) =>
                                                    this.update("distance", e)
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={`d-${value}`}
                                            >
                                                {key}
                                            </label>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="col-md-6">
                                <h3>Time</h3>
                                {Object.entries(this.times).map(
                                    ([value, key]) => (
                                        <div className="form-check ">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name=""
                                                id={`t-${value}`}
                                                value={value}
                                                checked={
                                                    this.state.time === value
                                                }
                                                onChange={(e) =>
                                                    this.update("time", e)
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={`t-${value}`}
                                            >
                                                {key}
                                            </label>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 submit text-center">
                        <div className="dropdown-divider"></div>
                        <button className="btn btn-primary mt-3" type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SearchForm);
