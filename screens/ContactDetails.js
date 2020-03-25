import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    screen: {
        paddingTop: 40
    },
    text: {
        fontSize: 20,
        color: 'red',
        fontFamily: "Carlito"
    }
})

export default class ContactDetailScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.getParam('name')
        }
    }

    static getRandomItemInArray(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>Hello {this.props.navigation.getParam('name')}</Text>
                <Button title="Go to random contact" onPress={() => {
                    const randomContact = this.goToRandom();
                    this.props.navigation.push('ContactDetailsScreen', {
                        name: randomContact.name,
                        phoneNumber: randomContact.phoneNumber
                    })
                }}/>
            </View>
        )
    }

    goToRandom = () => {
        let contacts = this.props.screenProps.contacts;
        let randomContact = ContactDetailScreen.getRandomItemInArray(contacts);
        console.log(randomContact);
        // while(randomContact.phoneNumber!==this.props.navigation.getParam('phoneNumber')){
        //     randomContact=ContactDetailScreen.getRandomItemInArray(contacts);
        // }

        return randomContact;
    }

}