import React, { Component } from "react";
import { MainContainer } from "./components/main";
import Routes from './routes'

export default class App extends Component {
    render() {
        return (
            <MainContainer>
                <Routes />
            </MainContainer>
        );
    }
}
