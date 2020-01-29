class Patient{
    constructor(){
        this.name,
        this.id,
        this.contactNum,
        this.age
    }

    setPatientName(name){
        this.name = name;
    }

    setPatientId(id){
        this.id = `PAT${id}`;
    }
    
    setPatientContact(contact){
        this.contact = contact;
    }

    setPatientAge(age){
        this.age = age;
    }
}

module.exports = Patient;