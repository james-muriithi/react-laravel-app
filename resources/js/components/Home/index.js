import React, { Component } from "react";

import Header from "./header";
import SearchForm from "./SearchForm";

export default class index extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <SearchForm />
            </div>
        );
    }
}
