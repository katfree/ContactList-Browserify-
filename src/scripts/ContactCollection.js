// A ContactCollection component that loads existing contacts from storage,
//  and saves new ones. Each new contact should have an auto-generated identifier.


import CreateContactForm from "./ContactForm"
import ContactDOM from "./AddToDom"
import ContactHTML  from "./Contact"

const CreateContactDOM = () => {

    fetch("http://localhost:8088/ContactList")
            .then(contacts => contacts.json())
            .then(function(element) {
                document.getElementById("contacts").innerHTML = ""
                return element
            })
            .then(contactsArray => {
                contactsArray.forEach(contact => {
                    const currentContactHTML = ContactHTML(contact)
                    document.getElementById("contacts").innerHTML += currentContactHTML
                });
            })
} 
    
 export default CreateContactDOM 