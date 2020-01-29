const util = require("./util");
const Doctor = require("./Doctor");
const Patient = require("./Patient");
const HMS = require("./HMS");

let doctor = new Doctor();
let patient = new Patient();
let hms = new HMS();

let id = 0;

const pattern = {
  name: /[a-zA-Z]$/,
  spec: /[a-zA-Z]$/,
  zipcode: /^[\d]{6}$/,
  phone: /^[\d]{10}$/,
  age:/^[\d]{3}$/
};

const mainMenu = () => {
    console.log(`
        Welcome to HMS
        --------------
        1. Add Doctor
        2. Delete Doctor
        3. Add Patient
        4. Delete Patient
        5. Search Doctor By Id
        6. Search Patient By Id
        7. Book Appointment
        8. Generate Doctor/Patient Appointment Report
        9. Save Changes Before Exit
        10. Exit
    `);

    util.rl.question("Select Your Choice:",(choice)=>{
        switch(choice){
            case "1":
                util.rl.question("Enter Doctor Name:",(inpDoctName)=>{
                    if(pattern.name.test(inpDoctName)){
                        doctor.setDoctorName(inpDoctName);
                        util.rl.question("Enter Specialisation:",(inpDoctSpec)=>{
                            if(pattern.spec.test(inpDoctSpec)){
                                doctor.setDoctorSpec(inpDoctSpec);
                                
                            }else{
                                console.log("invalid input");
                                doctor = new Doctor();
                                mainMenu();        
                            }
                        });
                    }else{
                        console.log("invalid input");
                        doctor = new Doctor();
                        mainMenu();
                    }
                });
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            case "7":
                break;
            case "8":
                break;
            case "9":
                break;
            case "10":
                rl.close();
                break;
            default:
                mainMenu();
        } 
    });
}

mainMenu();