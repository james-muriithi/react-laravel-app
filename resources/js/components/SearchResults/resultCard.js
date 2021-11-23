import React, { Component } from "react";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";
import { withRouter } from "react-router-dom";

class ResultCard extends Component {
    static propTypes = {
        results: PropTypes.array,
        rating: PropTypes.number,
        startTime: PropTypes.string,
        pickupLocation: PropTypes.string,
        dropoffLocation: PropTypes.string,
        cost: PropTypes.string,
        status: PropTypes.string,
    };

    render() {
        return (
            <div className="mb-2 card shadow p-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="trip-start-time">
                            <p>{this.props.startTime}</p>
                        </div>
                        <div className="mt-2 pickup">
                            <span className="dot bg-success mr-1"></span>
                            {this.props.pickupLocation}
                        </div>
                        <div className="mt-2 drop-point">
                            <span className="dot mr-1 border border-dark"></span>
                            {this.props.dropoffLocation}
                        </div>
                    </div>
                    <div className="col-md-6 text-md-right text-left">
                        <div>{this.props.cost}</div>
                        {this.props.status.toLowerCase() == "completed" && (
                            <div className="rating">
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    starCount={5}
                                    value={this.props.rating}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 text-right text-uppercase">
                        {this.props.status}
                        <img
                            height="25"
                            width="25"
                            src={
                                this.props.status.toLowerCase() == "completed"
                                    ? "https://cdn4.iconfinder.com/data/icons/flat-game-ui-buttons-icons-2/80/1-33-512.png"
                                    : "https://media.istockphoto.com/vectors/no-sign-red-circle-line-illegal-icon-vector-id1080261168?k=6&m=1080261168&s=170667a&w=0&h=edIWpiwlLVHXp8KnIO5fEAaIc6iHuXIrMKFS6ihVW2A="
                            }
                            alt="icon"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ResultCard);
