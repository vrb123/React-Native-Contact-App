export const fetchContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10&location=us')
    const {results} = await response.json();
    const result = new TransformContacts(results).transform();
    console.log(result);
    return new TransformContacts(results).transform();
}

export const login = async (name, password) => {
    const response = await fetch('localhost:8000', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({name, password})
    })
    if (response.ok) {
        return true;
    }
    return await response.text();
}

class TransformContacts {

    constructor(results) {
        this.data = results;
    }

    transform() {
        const result = [];
        this.data.forEach(contact => {
            const contactObj = new SingleContactDataTransform(contact);
            result.push(contactObj.transform());
        })
        return result
    }

}

class SingleContactDataTransform {
    constructor(result) {
        this.data = result;
    }

    getName() {
        const nameObj = this.data.name;
        return nameObj.first + " " + nameObj.last;
    }

    getPhoneNumber() {
        return this.data.phone;
    }

    transform() {
        return {
            name: this.getName(),
            phoneNumber: this.getPhoneNumber()
        }
    }

}