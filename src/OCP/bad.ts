
class NotificationService {
    send(message: string, type: 'email' | 'sms') {
        if (type === 'email') {
            console.log("Email send")
        } else if (type === 'sms') {
            console.log("SMS send")
        }
    }
}
const notificator = new NotificationService();
notificator.send("Hello!" , 'sms')