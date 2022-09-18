import apiConnection from "./apiConnection";


export default {
    async sendEmail() {
        return await apiConnection.post('/send-email')
    }
}


