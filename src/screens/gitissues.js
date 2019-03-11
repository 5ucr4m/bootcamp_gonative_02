import React, { Component, Fragment } from "react";
import { View, FlatList, ActivityIndicator, Alert, AsyncStorage } from "react-native";
import api from '../config/api'
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "../components/input";
import Header from '../components/Header'
import {
    Divider,
    Content,
    Avatar,
    RepositoryContent,
    RepositoryContentTitle,
    RepositoryContentSub,
    RepositoryIcon,
    SearchContainer
} from "../components/main";

export default class GitIssues extends Component {
    state = {
        repositories: [],
        inputText: '',
        loading: false,
        data: {}
    };

    async componentDidMount() {
        this.setState({ repositories: JSON.parse(await AsyncStorage.getItem('@des02:repo')) || [] })
    }

    _handleChangeText = text => {
        this.setState({ inputText: text })
    }

    _submitRequest = async () => {
        this.setState({ loading: true })
        try {
            const { data } = await api.get(`/${this.state.inputText}`)
            const repo = {
                id: data.id,
                name: data.name,
                organization: data.organization.login,
                url: data.organization.avatar_url,
            }
    
            this.setState({
                repositories: [ ...this.state.repositories, {...repo}],
                inputText: '',
                loading: false
            }, () => {
                AsyncStorage.setItem('@des02:repo', JSON.stringify(this.state.repositories))
            })
        } catch (err) {
            this.setState({
                loading: false
            })
            Alert.alert('Ocorreu um erro', 'Repositorio não encontrado')
        }
    }

    _listIssues = (repo) => {
        this.props.navigation.navigate('ListIssues', {data: repo})
    }

    
    render() {
        return (
            <Fragment>
            <Header title="GitIssues" />
            {this.state.loading && <ActivityIndicator size="small" style={{ marginBottom: 20}} />}
            <View style={{ paddingLeft: 15, paddingRight: 15, justifyContent: "flex-start"}}>
                <SearchContainer>
                    <Input 
                        placeholder="Adicionar novo Repositorio" 
                        value={this.state.inputText}
                        onChangeText={this._handleChangeText}/>
                    <RepositoryIcon style={{  }} onPress={this._submitRequest}>
                        <Icon name="plus" size={18} color="#333" />
                    </RepositoryIcon>
                </SearchContainer>
                <Divider />
                <FlatList keyExtractor={ (repo, index) => String(repo.id) }  data={this.state.repositories} renderItem={({item}) => (
                    <Content onPress={() => this._listIssues(item)}>
                        <Avatar
                            source={{
                                uri: item.url,
                            }}
                        />
                        <RepositoryContent>
                            <RepositoryContentTitle>
                                {item.name}
                            </RepositoryContentTitle>
                            <RepositoryContentSub>
                                {item.organization}
                            </RepositoryContentSub>
                        </RepositoryContent>
                        <RepositoryIcon>
                            <Icon name="angle-right" size={18} color="#999" />
                        </RepositoryIcon>
                    </Content>
                )} />
            </View>
            </Fragment>
        );
    }
}
