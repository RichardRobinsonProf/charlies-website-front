import apiConnection from "./apiConnection";


export default {
    async sendEmailAddress() {
        return await apiConnection.post('/send-emailAddress')
    }
}


