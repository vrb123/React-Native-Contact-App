import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import ContactList from '../ContactList'

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
})

export default class ContactListScreen extends React.Component {

    state = {
        showContacts: true,
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "Contact List",
            headerRight: <Button color='gray' title="Add" onPress={() => navigation.navigate('AddContactScreen')}/>
        };
    };

    isToggled = () => {
        return this.state.showContacts;
    }

    showForm = () => {
        this.props.navigation.navigate("AddContactScreen");
    }

    toggleContacts = () => {
        this.setState(prevState => ({
            showContacts: !this.state.showContacts
        }))
    }

    render() {
        return (
            <View style={styles.screen}>
                <Button color="gray" onPress={this.toggleContacts} title="Toggle"/>

                {this.isToggled() && (

                    <View>

                        <ContactList
                            contacts={this.props.screenProps.contacts}
                            onSelectContact={(contact) => {
                                this.props.navigation.navigate('ContactDetailsScreen', {
                                    name: contact.name,
                                    phoneNumber: contact.phoneNumber
                                });
                            }}/>

                    </View>
                )
                }

            </View>
        )
    }
}

// <Button color="gray" onPress={this.sort} title="Sort names"/> 