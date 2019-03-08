import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input } from "../components/input";
import Icons from "react-native-vector-icons/FontAwesome";
import {
    Divider,
    Content,
    Avatar,
    RepositoryContent,
    RepositoryContentTitle,
    RepositoryContentSub,
    RepositoryIcon
} from "../components/main";

export default class GitIssues extends Component {
    state = {
        repositories: [{}, {}, {}, {}]
    };
    render() {
        return (
            <View>
                <Input placeholder="Adicionar novo Repositorio" />
                <Divider />
                {this.state.repositories.map(el => (
                    <Content key={Math.random()}>
                        <Avatar
                            source={{
                                uri:
                                    "https://avatars0.githubusercontent.com/u/48359272?v=4"
                            }}
                        />
                        <RepositoryContent>
                            <RepositoryContentTitle>
                                Facebook
                            </RepositoryContentTitle>
                            <RepositoryContentSub>
                                Community
                            </RepositoryContentSub>
                        </RepositoryContent>
                        <RepositoryIcon>
                            <Icon name="angle-right" size={30} color="#900" />
                        </RepositoryIcon>
                    </Content>
                ))}
            </View>
        );
    }
}
