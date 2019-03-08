import React, { Component } from "react";
import { MainContainer } from "./components/main";
import GitIssues from "./screens/gitissues";

export default class App extends Component {
    render() {
        return (
            <MainContainer>
                <GitIssues />
            </MainContainer>
        );
    }
}
