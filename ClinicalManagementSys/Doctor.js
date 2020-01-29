class Doctor {
  constructor() {
    this.name, this.id, this.spec, this.avail;
  }
  setDoctorName(name) {
    this.name = name;
  }

  setDoctorId(id) {
    this.id = `DOC${id}`;
  }

  setDoctorSpec(spec) {
    this.spec = spec;
  }

  setAvail(time){
      this.avail = time;
  }
}

module.exports = Doctor;