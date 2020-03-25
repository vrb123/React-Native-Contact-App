import React from 'react'
import {Button, KeyboardAvoidingView, TextInput} from 'react-native'

export default class AddContactForm extends React.Component {

    state = {
        name: "",
        phoneNumber: "",
        canSubmit: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name != this.state.name || prevState.phoneNumber != this.state.phoneNumber) {
            this.validateForm();
        }
    }

    handleSave = (key) => (
        val => {
            this.setState(prevState => (
                {[key]: val}
            ))
        }
    )

    saveName = this.handleSave('name');

    savePhoneNumber = (phoneNumber) => {
        let filtered = phoneNumber = phoneNumber.split('').filter(c => {
            return "0123456789".indexOf(c) !== -1
        })
        this.setState(prevState => ({
            phoneNumber: filtered.join('').substring(0, 10)
        }))
    }

    validateForm = () => {
        return this.setState(prevState => ({
            canSubmit: (this.state.phoneNumber.length == 10 &&
                (typeof this.state.name == "string") &&
                this.state.name.split(' ').filter(v => v.length > 0).length >= 2)
        }))
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <TextInput
                    value={this.state.name}
                    onChangeText={this.saveName}
                />
                <TextInput
                    value={this.state.phoneNumber}
                    onChangeText={this.savePhoneNumber}
                    keyboardType="numeric"
                />
                <Button title="Save contact"
                        onPress={this.handleSubmit}
                        disabled={!this.state.canSubmit}/>
            </KeyboardAvoidingView>
        )
    }


}