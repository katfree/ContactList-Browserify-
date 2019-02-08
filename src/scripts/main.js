// In main.js, import the ContactList component and the ContactForm component.

// The user should see the contact form at the top of the view, 
// and the list of contacts underneath it.

// Bonus: Are there any other modules that could be made?
//  Do any modules have more than one possible responsibility?
//   Perhaps something that is a general utility function.


 import CreateContactForm  from "./ContactForm"
 import CreateContactDOM  from "./ContactCollection"

 CreateContactForm.ContactForm()
 
 CreateContactDOM()