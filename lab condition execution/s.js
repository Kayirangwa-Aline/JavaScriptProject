let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let userChoice = prompt("Enter your choice (first, last, new):")

switch (userChoice) {
    case "first":
        if (contacts.length > 0) {
            console.log("First contact:", contacts[0]);
        } else {
            console.log("Contact list is empty.");
        }
        break;

    case "last":
        if (contacts.length > 0) {
            console.log("Last contact:", contacts[contacts.length - 1]);
        } else {
            console.log("Contact list is empty.");
        }
        break;

    case "new":
        let newName = prompt("Enter name:");
        let newPhone = prompt("Enter phone:");
        let newEmail = prompt("Enter email:");

       
        if (newName && newPhone && newEmail) {
         
            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });
            console.log("New contact added successfully.");
        } else {
            console.log("Please enter all necessary data for the new contact.");
        }
        break;

    default:
        console.log("Invalid choice. Please enter 'first', 'last', or 'new'.");
}
