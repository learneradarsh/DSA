/**
 * Person class having all required properties.
 * @class
 * @classdesc Person class including firstname, lastname, address, city, state, zipcode, and phone.
 */
class Person {

    constructor() {
        this.firstName = this.firstName;
        this.lastName = this.lastName;
        this.address = this.address;
        this.city = this.city;
        this.state = this.state;
        this.zipcode = this.zipcode;
        this.phone = this.phone;
    }
    
    // getFirstName(firstName){
    //    return firstName; 
    // }

    // getLastName(lastName){
    //     return lastName;
    // }

    // getAddress(address){
    //     return address;
    // }

    // getCity(city){
    //     return city;
    // }

    // getState(state){
    //     return state;
    // }

    // getZip(zipcode){
    //     return zipcode;
    // }

    // getPhone(phone){
    //     return phone;
    // }

    setFirstName(firstName){
        this.firstName = firstName; 
     }
 
     setLastName(lastName){
         this.lastName = lastName;
     }
 
     setAddress(address){
         this.address = address;
     }
 
     setCity(city){
         this.city = city;
     }
 
     setState(state){
         this.state = state;
     }
 
     setZip(zipcode){
         this.zipcode = zipcode;
     }
 
     setPhone(phone){
         this.phone = phone;
     }
}

module.exports = Person;