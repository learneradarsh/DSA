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

  generateAppointmentReport() {
      return this.appointments;
  }

  saveChanges() {}
}

module.exports = HMS;
