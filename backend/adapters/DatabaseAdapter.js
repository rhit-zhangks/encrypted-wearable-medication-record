
class DatabaseAdapter {
    async getPatient(patientId) {
        throw new Error("getPatient() not implemented");
    }

    async getPrescriptions(patientId) {
        throw new Error("getPrescriptions() not implemented");
    }

    async getUserLogin(username){
        throw new Error("getUserLogin() not implemented");
    }
}

module.exports = DatabaseAdapter;
