import React from 'react';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons'

import {compareContacts} from './contacts'
import {fetchContacts} from './api'

import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetails'
import LoginScreen from './screens/LoginScreen'
import SettingsScreen from './screens/SettingsScreen'

const ContactAppNavigator = createStackNavigator({
    "ContactListScreen": {screen: ContactListScreen},
    "AddContactScreen": {screen: AddContactScreen,},
    "ContactDetailsScreen": {screen: ContactDetailsScreen,},
}, {
    'initialRouteScreen': {screen: "ContactListScreen"}
})

const AppNavigator = createSwitchNavigator({
    Login: {screen: LoginScreen},
    ContactAppNavigator: {screen: ContactAppNavigator}
}, {
    'initialRouteScreen': {screen: "Login"}
})

const contactContainer = createAppContainer(AppNavigator);

const tabNavigator = createBottomTabNavigator({
    Settings: {
        screen: SettingsScreen
    },
    Contacts: {
        screen: contactContainer
    }
}, {
    tabBarOptions: {
        activeTintColor: "yellow",
        inactiveTintColor: "black"
    },
    lazy: true
})

tabNavigator.navigationOptions = {
    tabBarOptions: ({focused, tintColor}) => (
        <Ionicons size={25} color={tintColor} name={`ios-contacts${focused ? "" : "-outline"}`}/>
    )
}


const Container = createAppContainer(tabNavigator);

export default class App extends React.Component {

    state = {
        contacts: null
    }

    componentWillMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const contacts = await fetchContacts();
        this.setState({contacts});
    }


    addContact = (newContact) => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, {...newContact, key: prevState.contacts.length}]
        }));
    }

    sort = () => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts].sort(compareContacts)
        }));
    }

    render() {
        return (
            <Container screenProps={{
                contacts: this.state.contacts,
                addContact: this.addContact
            }}/>
        )
    }

}
