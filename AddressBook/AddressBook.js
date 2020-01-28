"use strict";
const Person = require("./Person");
const util = require("./util");

class AddressBook {
  constructor() {
    this.addressBook = [];
  }

  addAddressBook(fileName) {
    if (util.isFileExist(fileName)) {
      return "File already exist";
    } else {
      util.writeFile("", fileName);
      return `${fileName} successfully created`;
    }
  }

  addContact(person) {
    this.addressBook.push(person);
  }

  //to edit user info
  updateContact(person, type) {
    // console.log(value,type,this.addressBook.length,inpfirstName);
    for (let i = 0; i < this.addressBook.length; i++) {
      if (person.firstName == this.addressBook[i].firstName) {
        if (type == "LastName") {
          this.addressBook[i].lastName = person.lastName;
        } else if (type == "Address") {
          this.addressBook[i].address = person.address;
        } else if (type == "City") {
          this.addressBook[i].city = person.city;
        } else if (type == "State") {
          this.addressBook[i].state = person.state;
        } else if (type == "Zipcode") {
          this.addressBook[i].zipcode = person.zipcode;
        } else if (type == "Phone") {
          this.addressBook[i].phone = person.phone;
        }
        return 1;
      }
    }
    return -1;
  }
  sortContactByName() {
    return this.addressBook.sort();
  }

  sortContactByZip() {
    return this.addressBook.sort((a, b) => {
      return a - b;
    });
  }

  removeContact(firstName) {
    for (let i = 0; i < this.addressBook.length; i++) {
      if (firstName == this.addressBook[i].firstName) {
        this.addressBook.splice(i, 1);
        return 1;
      }
    }
    return -1;
  }

  //to save contact
  saveContact(currentAddressBook) {
    util.writeFile(this.addressBook, currentAddressBook);
  }

  //to show all available address books
  showAvailableAddressBook() {
    console.log(util.showAllJSONFiles());
  }

  //to check user exists or not
  isUserExist(firstName) {
    for (let i = 0; i < this.addressBook.length; i++) {
      if (firstName == this.addressBook[i].firstName) {
        this.addressBook.splice(i, 1);
        return 1;
      }
    }
    return -1;
  }

  //to check file is there or not
  isFileExist(fileName) {
    let fileArr = util.showAllJSONFiles();
    for (let i in fileArr) {
      if (fileName == fileArr[i]) {
        return true;
      }
    }
    return false;
  }

  //to show speicific address book data
  loadAddressBook(fileName) {
    for (let d of util.readFile(fileName)) {
      this.addressBook.push(d);
    }
    return this.addressBook;
  }

  showAddressBook() {
    return this.addressBook;
  }
}
module.exports = AddressBook;
