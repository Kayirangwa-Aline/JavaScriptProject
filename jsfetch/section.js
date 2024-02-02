let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let showContact = function (contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
};

let showAllContacts = function (contacts) {
    if (contacts instanceof Array) {
        for (contacts of contacts) {
            console.log(`${contacts.name} / ${contacts.phone} / ${contacts.email}`);
        }
    }
};

let addNewContact = function (contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
};

let sortContacts = function (contacts, sortBy) {
    if (contacts instanceof Array) {
        contacts.sort((a, b) => {
            const propA = a[sortBy].toLowerCase();
            const propB = b[sortBy].toLowerCase();
            return propA.localeCompare(propB);
        });
    }
};

console.log("Original Contacts:");
showAllContacts(contacts);

let sortBy = prompt("Enter sorting option (name/phone/email):").toLowerCase();

sortContacts(contacts, sortBy);

console.log(`Contacts sorted by ${sortBy}:`);
showAllContacts(contacts);
