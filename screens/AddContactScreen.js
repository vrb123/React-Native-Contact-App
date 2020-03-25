import React from 'react'
import {StyleSheet, View} from 'react-native'
import AddContactForm from '../AddContactForm'

const styles = StyleSheet.create({
    screen: {
        paddingTop: -40
    }
})


export default class AddContactScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "Add contact",
        };
    };

    handleSubmit = (formState) => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactListScreen')
    }

    render() {
        return (
            <View styles={styles.screen}>
                <AddContactForm onSubmit={this.handleSubmit}/>
            </View>
        )
    }

}