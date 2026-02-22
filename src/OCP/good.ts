
interface INotifier {
    send(message: string): void;
}

class EmailNotifier implements INotifier {
    send(message: string) { console.log(message + " : Email send") }
}

class SmsNotifier implements INotifier {
    send(message: string) { console.log(message + " : SMS send")}
}

const email = new EmailNotifier();
email.send("Hello");

const sms = new SmsNotifier();
sms.send("Hello!");