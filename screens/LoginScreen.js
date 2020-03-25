import React from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import {login} from '../api'

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        flex: 1,
        alignItems: "center",
        backgroundColor: 'yellow'
    }
})

export default class LoginScreen extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleUsernameTextInputChange = (username) => {
        this.setState({username});
    }

    handlePasswordTextInputChange = (password) => {
        this.setState({password});
    }

    render() {
        return (
            <View style={styles.screen}>
                <TextInput placeholder="Username" value={this.props.username}
                           onChangeText={this.handleUsernameTextInputChange}/>
                <TextInput placeholder="Password" value={this.props.password}
                           onChangeText={this.handlePasswordTextInputChange}/>
                <Button title="Here we go" onPress={() => this.goLogin()}/>
            </View>
        )
    }

    goLogin = async () => {
        try {
            let loginResult = await login(this.props.username, this.props.password);
        } catch (err) {
            console.log(err);
        }
        this.props.navigation.navigate('ContactAppNavigator');
    }

}