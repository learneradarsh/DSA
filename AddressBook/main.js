"use strict";

const util = require("./util");
const Person = require("./Person");
const AddressBook = require("./AddressBook");

const adrBook = new AddressBook();

let currentAddressBook; //to store current address book name;

//regex pattern for required inputs
const pattern = {
  firstName: /[a-zA-Z]$/,
  lastName: /[a-zA-Z]$/,
  address: /[\w]$/,
  city: /[a-zA-Z]$/,
  state: /[a-zA-Z]$/,
  zipcode: /^[\d]{6}$/,
  phone: /^[\d]{10}$/
};

let person = new Person();

const showMainMenu = () => {
  console.log(`
    "Welcome to Address Book"
    -------------------------
    1. Add Address Book
    2. Show Address Book
    3. Exit From Application
`);

  util.rl.question("Select Your Option:", option => {
    switch (option) {
      case "1":
        util.rl.question("Enter Address Book Name:", fileName => {
          if (fileName.trim() == "") {
            console.log("Invalid file name");
          } else {
            console.log(adrBook.addAddressBook(fileName.trim()));
          }
          showMainMenu();
        });
        break;
      case "2":
        console.log("\nExising Address Books:");
        adrBook.showAvailableAddressBook();
        util.rl.question("\nEnter Book Name To Continue:", fileName => {
          if (fileName.trim() == "" || !adrBook.isFileExist(fileName.trim())) {
            console.log("Invalid file name");
            showMainMenu();
          } else {
            currentAddressBook = fileName;
            adrBook.loadAddressBook(currentAddressBook);
            subMenu();
          }
        });
        break;
      case "3":
        console.log("Exit From Application");
        util.rl.close();
        break;
      default:
        console.log("Invalid option");
        showMainMenu();
    }
  });
};

const subMenu = () => {
  console.log(`
        1. Add Contact
        2. Delete Contact
        3. Edit Contact
        4. Save Contact
        5. Sort By Name
        6. Sort by Zipcode
        7. Display Contacts
        8. Exit to Main Menu

    `);

  util.rl.question("Select Your Option:", option => {
    switch (option) {
      case "1":
        util.rl.question("Enter First Name:", inpfirstName => {
          if (pattern.firstName.test(inpfirstName)) {
            person.setFirstName(inpfirstName);
            util.rl.question("Enter Last Name", inplastName => {
              if (pattern.lastName.test(inplastName)) {
                person.setLastName(inplastName);
                util.rl.question("Enter Address", inpAddress => {
                  if (pattern.address.test(inpAddress)) {
                    person.setAddress(inpAddress);
                    util.rl.question("Enter City", inpCity => {
                      if (pattern.city.test(inpCity)) {
                        person.setCity(inpCity);
                        util.rl.question("Enter State", inpState => {
                          if (pattern.state.test(inpState)) {
                            person.setState(inpState);
                            util.rl.question("Enter Zipcode", inpZipcode => {
                              if (pattern.zipcode.test(inpZipcode)) {
                                person.setZip(inpZipcode);
                                util.rl.question("Enter Phone", inpPhone => {
                                  if (pattern.phone.test(inpPhone)) {
                                    person.setPhone(inpPhone);
                                    if (adrBook.addContact(person) == false) {
                                      console.log("Contact Already Exist");
                                    } else {
                                      console.log(
                                        "Contact Added Successfully, Please save before exit."
                                      );
                                    }
                                    person = new Person();
                                    subMenu();
                                  } else {
                                    console.log("Invalid Entry");
                                    person = new Person();
                                    subMenu();
                                  }
                                });
                              } else {
                                console.log("Invalid Entry");
                                person = new Person();
                                subMenu();
                              }
                            });
                          } else {
                            console.log("Invalid input");
                            person = new Person();
                            subMenu();
                          }
                        });
                      } else {
                        console.log("Invalid input");
                        person = new Person();
                        subMenu();
                      }
                    });
                  } else {
                    console.log("Invalid Input");
                    person = new Person();
                    subMenu();
                  }
                });
              } else {
                console.log("Invalid input");
                person = new Person();
                subMenu();
              }
            });
          } else {
            console.log("invalid input");
            person = new Person();
            subMenu();
          }
        });
        break;
      case "2":
        util.rl.question("Enter First Name To Delete Data:", inpfirstName => {
          if (
            pattern.firstName.test(inpfirstName) &&
            adrBook.removeContact(inpfirstName) != -1
          ) {
            console.log("Contact Deleted Successfully");
            subMenu();
          } else {
            console.log("Invalid data");
            subMenu();
          }
        });
        break;
      case "3":
        util.rl.question("Enter First Name To Edit Data:", inpfirstName => {
          if (
            pattern.firstName.test(inpfirstName) &&
            adrBook.isUserExist(inpfirstName) != false
          ) {
            util.rl.question("Enter Last Name:",inplastName => {
                if(pattern.lastName.test(inplastName)){
                    person.setLastName(inplastName);
                    util.rl.question("Enter Address:",inpAddress => {
                        if(pattern.address.test(inpAddress)){
                            person.setAddress(inpAddress);
                            util.rl.question("Enter City:",inpCity => {
                                if(pattern.city.test(inpCity)){
                                    person.setCity(inpCity);
                                    util.rl.question("Enter State:",inpState =>{
                                        if(pattern.state.test(inpState)){
                                            person.setState(inpState);
                                            util.rl.question("Enter Zipcode:",inpZipcode=>{
                                                if(pattern.zipcode.test(inpZipcode)){
                                                    person.setZip(inpZipcode);
                                                    util.rl.question("Enter Phone:",inpPhone=>{
                                                        if(pattern.phone.test(inpPhone)){
                                                            person.setPhone(inpPhone);
                                                            adrBook.updateContact(person,inpfirstName);
                                                            console.log("Updated Contact Successfully");
                                                            person = new Person();
                                                            subMenu();
                                                        }else{
                                                            console.log("Invalid Entry");
                                                            person = new Person();
                                                            subMenu();
                                                        }
                                                    });
                                                }else{
                                                    console.log("Invalid Entry");
                                                    person = new Person();
                                                    subMenu();
                                                }
                                            });
                                        }else{
                                            console.log("Invalid Entry");
                                            person = new Person();
                                            subMenu();
                                        }
                                    });
                                }else{
                                    console.log("Invalid Entry");
                                    person = new Person();
                                    subMenu();
                                }
                            });
                        }else{
                            console.log("Invalid Entry");
                            person = new Person();
                            subMenu();
                        }
                    });
                }else{
                    console.log("Invalid Entry");
                    person = new Person();
                    subMenu();
                }
            });
          } else {
            console.log("Invalid Data");
            subMenu();
          }
        });
        break;
      case "4":
        adrBook.saveContact(currentAddressBook);
        console.log("Saved SuccessFully");
        subMenu();
        break;
      case "5":
        console.log(adrBook.sortContactByName());
        subMenu();
        // console.log("sort by name");
        break;
      case "6":
        console.log(adrBook.sortContactByZip());
        subMenu();
        // console.log("sort by zipcode");
        break;
      case "7":
        console.log("Current Contacts in Address Book");
        console.log(adrBook.showAddressBook());
        subMenu();
        break;
      case "8":
        showMainMenu();
        break;
      default:
        console.log("Invalid option");
        subMenu();
    }
  });
};

showMainMenu();
