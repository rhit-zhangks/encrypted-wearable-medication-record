
class DatabaseAdapter {
    async getPatient(patientId) {
        throw new Error("getPatient() not implemented");
    }

    async getPrescriptions(patientId) {
        throw new Error("getPrescriptions() not implemented");
    }

    async getPrescription(prescriptionId) {
        throw new Error("getPrescription() not implemented");
    }
}

module.exports = DatabaseAdapter;
