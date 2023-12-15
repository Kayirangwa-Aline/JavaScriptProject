const contactList = [
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
  

  const newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
  };
  contactList.push(newContact);
  

  console.log("First Contact:", `${contactList[0].name} / ${contactList[0].phone} / ${contactList[0].email}`);
  console.log("Last Contact:", `${contactList[contactList.length - 1].name} / ${contactList[contactList.length - 1].phone} / ${contactList[contactList.length - 1].email}`);