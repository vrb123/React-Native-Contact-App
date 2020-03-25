import React from 'react'
import {SectionList, Text, View} from 'react-native'
import Contact from './Contact'
import PropTypes from 'prop-types'

class ContactList extends React.Component {

    propTypes = {
        contacts: PropTypes.array,
    }

    renderItem = ({item}) => (
        <Contact
            key={item.key}
            contact={item}
            onSelectContact={
                (contact) => {
                    this.props.onSelectContact(contact)
                }}
        />
    )

    renderSectionHeader = ({section}) => (
        <View style={{paddingLeft: 0, alignItems: "center", backgroundColor: "yellow"}}>
            <Text style={{color: "yellow", fontSize: 25}}>{section.title}</Text>
        </View>
    )

    render() {
        let composedData = {};
        this.props.contacts.forEach((obj) => {
            const firstLetter = obj.name[0].toUpperCase();
            if (!(firstLetter in composedData)) {
                composedData[firstLetter] = []
            }
            composedData[firstLetter].push(obj);
        })
        const sections = Object.keys(composedData).map(key => (
            {title: key, data: composedData[key]}
        ));
        return (


            <SectionList
                sections={sections}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}>
            </SectionList>
        )
    }


}

export default ContactList;
