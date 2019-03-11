import React, { Component, Fragment } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import api from '../config/api'
import Icon from "react-native-vector-icons/FontAwesome";
import Header from '../components/Header'

import {
    Content,
    Avatar,
    RepositoryContent,
    RepositoryContentTitle,
    RepositoryContentSub,
    RepositoryIcon,
} from "../components/main";

// import styles from './styles';

export default class screens extends Component {
    state = {
        list: [],
        loading: true,
        name: '',
        organization: ''
    }
    async componentDidMount() {
        const navData = this.props.navigation.getParam('data')
        const { name, organization } = navData;
        const { data } = await api.get(`/${organization}/${name}/issues`)
        this.setState({
            list: [...data],
            loading: false,
            name,
            organization
        })
        
    }

    render() {
            return (
            (this.state.loading) ? <ActivityIndicator size='large' style={{flex: 1, alignItems: "center", justifyContent: "center"}} /> : (
                <Fragment>
                    <Header title={this.props.navigation.getParam('data').name} />
                    <View style={{ paddingLeft: 15, paddingRight: 15, justifyContent: "flex-start"}}>
                    <FlatList
                        keyExtractor={item => String(item.id)}
                        data={this.state.list}
                        renderItem={({ item }) => (
                            <Content onPress={() => {}}>
                                <Avatar source={{ uri: item.user.avatar_url }} />
                                <RepositoryContent>
                                    <RepositoryContentTitle numberOfLines={1}>
                                        {item.title}
                                    </RepositoryContentTitle>
                                    <RepositoryContentSub>
                                        {item.user.login}
                                    </RepositoryContentSub>
                                </RepositoryContent>
                                <RepositoryIcon>
                                    <Icon name="angle-right" size={18} color="#999" />
                                </RepositoryIcon>
                            </Content>
                        )}
                    />
                    </View>
                </Fragment>
            )
        );
    }
}
