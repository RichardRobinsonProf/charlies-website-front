import apiConnection from "./apiConnection";


export default {
    async addUser() {
        return await apiConnection.post('/users')
    }
}

