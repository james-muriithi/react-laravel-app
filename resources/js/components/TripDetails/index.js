import axios from "axios";
import React, { Component } from "react";
import DetailsHeader from "./header";
import StarRatingComponent from "react-star-rating-component";
import Map from "./map";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: {},
        };
    }
    getTimeFromDate(date) {
        return moment(date).format("hh:mm A");
    }
    componentDidMount() {
        const tripId = this.props.match.params.id;
        axios
            .get(`/api/v1/trips/${tripId}`)
            .then((res) => {
                this.setState({
                    trip: res.data.data,
                });
            })
            .catch((err) => {
                alert("Could not fetch the trip");
            });
    }

    render() {
        const { trip } = this.state;
        return (
            <div className="container">
                <DetailsHeader />
                <div className="mt-5">
                    <div className="row pb-4">
                        <div className="col-md-6">
                            <p>{trip.request_date}</p>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <span className="d-inline-block">
                                <img
                                    src="http://cdn.onlinewebfonts.com/svg/img_521070.png"
                                    alt="money"
                                    height="15"
                                    width="20"
                                    className="mr-1"
                                />
                                {trip.cost} {trip.cost_unit}
                            </span>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="pb-3">
                        <div className="mt-3 pickup d-flex">
                            <span>
                                <span className="dot bg-success mr-1"></span>
                                {trip.pickup_location}
                            </span>
                            <span className="ml-auto">
                                {this.getTimeFromDate(trip.pickup_date)}
                            </span>
                        </div>
                        <div className="mt-3 drop-point d-flex">
                            <span>
                                <span className="dot mr-1 border border-dark"></span>
                                {trip.dropoff_location}
                            </span>
                            <span className="ml-auto">
                                {this.getTimeFromDate(trip.dropoff_date)}
                            </span>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                </div>

                <div className="mt-5">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img
                                src={trip.car_pic}
                                className="img-thumbnail border-0 rounded"
                                alt={trip.car_number}
                            />
                            <p className="pt-2">
                                {trip.car_make}
                                {trip.car_model}
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="details">
                                <div className="d-flex">
                                    <span>Distance</span>
                                    <span className="ml-auto">
                                        {trip.distance} {trip.distance_unit}
                                    </span>
                                </div>
                            </div>
                            <div className="details">
                                <div className="d-flex">
                                    <span>Duration</span>
                                    <span className="ml-auto">
                                        {trip.distance} {trip.duration_unit}
                                    </span>
                                </div>
                            </div>
                            <div className="details">
                                <div className="d-flex">
                                    <span>Subtotal</span>
                                    <span className="ml-auto">
                                        {trip.cost} {trip.cost_unit}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <p className="mb-2">{trip.driver_name}</p>
                            <img
                                src={trip.driver_pic}
                                alt={trip.driver_name}
                                className="img-thumbnail rounded-circle border-0"
                            />
                            <div className="rating">
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    starCount={5}
                                    value={trip.rating}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <Map />
                </div>

            </div>
        );
    }
}
