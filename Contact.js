import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: "black",
        backgroundColor: 'yellow'
    },
    block: {
        borderColor: 'green',
        borderWidth: 5
    }

})

export default class Contact extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.block}
                onPress={() => this.props.onSelectContact(this.props.contact)}
            >
                <Text style={styles.text}>
                    {this.props.contact.name}
                    {this.props.contact.phoneNumber}
                </Text>
            </TouchableOpacity>
        )
    }
}