const LENGTH = 30;

const firstNames = ['Bob', 'Smith', 'John', 'William', 'Mark', 'Max', 'George', 'Adam']
const lastNames = ['Bulgakov', 'Pushkin', 'Shakespeare', 'Deyron'];

const random = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateName = () => `${firstNames[random(firstNames.length - 1)]} ${lastNames[random(lastNames.length - 1)]}`

const generatePhoneNumber = () => `${random(999, 100)}-${random(999, 100)}-${random(9999, 1000)}`

const createContact = () => ({
    name: generateName(),
    phoneNumber: generatePhoneNumber()
});

export const compareContacts = (contact1, contact2) => contact1.name > contact2.name

const addKeys = (val, key) => ({key: key, ...val})

export default Array.from({length: LENGTH}, createContact).map(addKeys);