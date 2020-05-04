import React from "react";
import { Chart, Cards, CountryPicker } from "./components"
import "./App.module.css"
import logo from "./logo.png";

import {fetchDataFromIndia} from "./api/indiaApi";
import {Typography} from "@material-ui/core";
// import {fetchDataFromGlobal} from "./api/globalApi";

class App extends React.Component {

    state = {
        data: ""
    }

    // globalstate = {
    //     data: {}
    // }

    async componentDidMount() {
        const indianData = await fetchDataFromIndia();

        this.setState({ indianData });
    }

    render() {

        const { indianData } = this.state;

        return (
            <div className="container" align="center" justify="center">
                <h1>
                    <img height="220" src={logo} justify="center"/>
                    <h3 align="center">MUMBAI</h3>
                    <Cards data={indianData} />
                    {/*<Chart />*/}
                    {/*<CountryPicker />*/}
                </h1>
            </div>
        )
    }
}

export default App;