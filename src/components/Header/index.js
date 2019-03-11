import React from 'react';

import { View, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'

// import styles from './styles';

const Header = ({ title }) => <View style={{
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: "center",
}}>
    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
</View>;

export default Header;
