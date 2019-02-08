// A Contact component that displays a 
// person's name, phone number, and address.
const ContactHTML = (contact) => { 
    return `
    <h1 class="newName"> Name: ${contact.name}</h1>
    <div class ="newNumber"> Phone Number: ${contact.phoneNumber}</div>
    <div class = "newAddress"> Address: ${contact.address}
    
    `
}

export default ContactHTML 





