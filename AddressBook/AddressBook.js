"use strict";
const Person = require("./Person");
const util = require("./util");

class AddressBook {
  constructor() {
    this.addressBook = [];
  }

  /**
   * @param  {} fileName
   */
  addAddressBook(fileName) {
    if (util.isFileExist(fileName)) {
      return "File already exist";
    } else {
      util.writeFile("", fileName);
      return `${fileName} successfully created`;
    }
  }

  /**
   * @param  {} person
   */
  addContact(person) {
    for(let i=0;i<this.addressBook.length;i++){
      if(person.firstName === this.addressBook[i].firstName ){
        return false; // contact already exist
      }
    }
    this.addressBook.push(person);
  }

  /**
   * @param  {} person
   * @param  {} type
   */
  updateContact(person,inpfirstName) {
    for (let i = 0; i < this.addressBook.length; i++) { 
      if(inpfirstName === this.addressBook[i].firstName){
        this.addressBook[i].firstName = inpfirstName;
        this.addressBook[i].lastName = person.lastName;
        this.addressBook[i].address = person.address;
        this.addressBook[i].city = person.city;
        this.addressBook[i].state = person.state;
        this.addressBook[i].zipcode = person.zipcode;
        this.addressBook[i].phone = person.phone;
        // return true;
      }
    }
  }

  sortContactByName() {
    return this.addressBook.sort();
  }

  sortContactByZip() {
    return this.addressBook.sort((a, b) => {
      return a - b;
    });
  }

  /**
   * @param  {} firstName
   */
  removeContact(firstName) {
    for (let i = 0; i < this.addressBook.length; i++) {
      if (firstName == this.addressBook[i].firstName) {
        this.addressBook.splice(i, 1);
        return 1;
      }
    }
    return -1;
  }

  /**
   * @param  {} currentAddressBook
   */
  saveContact(currentAddressBook) {
    util.writeFile(this.addressBook, currentAddressBook);
  }

  /**
   * to show all available address books
   */
  showAvailableAddressBook() {
    console.log(util.showAllJSONFiles());
  }

  /**
   * to check user exists or not
   * @param  {} firstName
   */
  isUserExist(firstName) {
    for (let i = 0; i < this.addressBook.length; i++) {
      if (firstName == this.addressBook[i].firstName) {
        return true;
      }
    }
    return false;
  }

  /**
   * to check file is there or not
   * @param  {} fileName
   */
  isFileExist(fileName) {
    let fileArr = util.showAllJSONFiles();
    for (let i in fileArr) {
      if (fileName == fileArr[i]) {
        return true;
      }
    }
    return false;
  }

  /**
   * to show speicific address book data
   * @param  {} fileName
   */
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
