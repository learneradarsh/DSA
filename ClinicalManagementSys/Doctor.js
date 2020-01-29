class Doctor {
  constructor() {
    this.name, this.id, this.spec, this.avail = [], this.slot = 5;
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

  setAvail(startTime, endTime) {
    this.avail.push({
        startTime: startTime,
        endTime: endTime
    });
  }
}

module.exports = Doctor;
