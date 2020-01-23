'use strict'

const Person = require('./Person');
const util = require('./util');

class AddressBook {
    constructor() {
        this.addressBook = [];
    }

    addAddressBook(fileName) {
        util.writeFile("", fileName);
    }
    addContact(person) {
        this.addressBook.push(person);
    }

    //to edit user info
    updateContact(person) {
        for (let i = 0; i < this.addressBook.length; i++) {
            if (person.firstName == this.addressBook[i].firstName) {
                this.addressBook[i].lastName = person.lastName;
                this.addressBook[i].address = person.address;
                this.addressBook[i].city = person.city;
                this.addressBook[i].state = person.state;
                this.addressBook[i].zipcode = person.zipcode;
                this.addressBook[i].phone = person.phone;
                return 1;
            }
        }
        return -1;
    }
    sortContactByName() { }

    sortContactByZip() { }

    removeContact(firstName) { 
        for(let i=0;i<this.addressBook.length;i++){
            if(firstName == this.addressBook[i].firstName){
                this.addressBook.splice(i,1);
                return 1;
            }
        }
        return -1;
    }

    //to save contact
    saveContact(currentAddressBook){
        util.writeFile(this.addressBook, currentAddressBook);
    }

    //to show all available address books
    showAvailableAddressBook() {
        console.log(util.showAllJSONFiles());
    }

    //to check user exists or not
    isUserExist(firstName){
        for(let i=0;i<this.addressBook.length;i++){
            if(firstName == this.addressBook[i].firstName){
                this.addressBook.splice(i,1);
                return 1;
            }
        }
        return -1;
    }

    //to check file is there or not
    isFileExist(fileName){
        let fileArr = util.showAllJSONFiles();
        for(let i in fileArr){
            if(fileName == fileArr[i]){
                return true;
            }
        }
        return false;
    }

    //to show speicific address book data
    loadAddressBook(fileName) {
        for(let d of util.readFile(fileName)){
            this.addressBook.push(d);
        }
        return this.addressBook;
    }

    showAddressBook(){
        return this.addressBook;
    }

}
module.exports = AddressBook;