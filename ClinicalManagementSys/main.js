const util = require("./util");
const Doctor = require("./Doctor");
const Patient = require("./Patient");
const HMS = require("./HMS");

let doctor = new Doctor();
let patient = new Patient();
let hms = new HMS();

let id = 0;

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
                break;
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
                break;
            default:
                rl.close();
        }
    })
}

mainMenu();