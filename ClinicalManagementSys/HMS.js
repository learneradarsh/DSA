class HMS {
  constructor() {
    this.doctors = [], this.patients = [], this.appointments = [];
  }
  addDoctor(doctor) {
    this.doctors.push(doctor);
    return true;
  }

  deleteDoctor(docId) {
    for (let i = 0; i < this.doctors.length; i++) {
      if (docId === this.doctors[i].id) {
        this.doctors.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  addPatient(patient) {
    this.patients.push(patient);
    return true;
  }

  deletePatient(patId) {
    for (let i = 0; i < this.patients.length; i++) {
      if (patId === this.patients[i].id) {
        this.patients.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  searchDoctorById(docId) {
    for (let doctor in this.doctors) {
      if (docId === this.doctors[doctor].id) {
        return this.doctors[doctor];
      }
    }
    return false;
  }

  searchPatientById(patId) {
    for (let patient in this.patients) {
      if (patId === this.patient[patient].id) {
        return this.patients[patient];
      }
    }
    return false;
  }

  bookAppointment(docId,patId,time){
    let appointMentDetails;
    let date;
    for(let doctor in this.doctors){
        if(this.doctors[doctor].id === docId && this.doctors[doctor].slot !== 0){
            this.doctors[doctor].slot = this.doctors[doctor].slot - 1;
            let patient = this.patients.find(patient =>{ return patient.id === patId?patient:false });
            date = new Date();
            date = date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear();
            appointMentDetails = {
                doctorId: docId,
                doctorName: this.doctors[doctor].name,
                patientId: patId,
                patientName: patient.name,
                appointDate: date,
                appointTime: time
            };
            this.appointments.push(appointMentDetails);
            return appointMentDetails;
        }else{
            date = new Date().getDate() + "/" + new Date().getMonth()+1 + "/" + new Date().getFullYear();
            appointMentDetails = {
                doctorId: docId,
                doctorName: this.doctors[doctor].name,
                patientId: patId,
                patientName: patient.name,
                appointDate: date,
                appointTime: time
            };
            this.appointments.push(appointMentDetails);
            return appointMentDetails;
        }
    }
  }

  generateAppointmentReport() {
      return this.appointments;
  }

  saveChanges() {
    writeFile(this.doctors,doctors);
    writeFile(this.patients,patients);
    writeFile(this.appointments,appointments);
  }
}

module.exports = HMS;
