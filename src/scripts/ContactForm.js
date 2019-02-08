// A ContactForm component that, when filled out and a submit button is pressed, 
// adds a new contact to storage. It should import the ContactCollection component.

import CreateContactDOM  from "./ContactCollection"

const CreateContactForm = { 
    ContactForm: function () 
    {const ContactForm =  document.querySelector("#submit").addEventListener('click', event => {

    const name = document.querySelector("#nameinput").value
    const address = document.querySelector("#addressinput").value
    const phoneNumber = document.querySelector("#phoneNumberinput").value


    const ContactToSave = {
        name: name,
        phoneNumber: phoneNumber,
        address: address,


    }

    fetch("http://localhost:8088/ContactList", {
        method: "POST",

        headers: {
            // 'Accept': 'application/json',
            "Content-Type": "application/json"
        },

        body: JSON.stringify(ContactToSave)

    }).then(CreateContactDOM)
    console.log("click")
    

})
}


}

export default CreateContactForm 

