import React, { Component } from 'react'
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    };
    render() {
        return (
            <div style={{ height: "250px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "",
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
