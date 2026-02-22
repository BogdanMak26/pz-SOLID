class UserProfile {
    constructor(public name: string, public email: string) {}

    // Порушення: логіка збереження не стосується профілю користувача
    saveToDatabase() {
        console.log(`Saving ${this.name} to DB...`);
    }

    // Порушення: формат виводу може змінюватися незалежно від даних
    formatAsHtml() {
        return `<div>${this.name}</div>`;

    }
}
const user = new UserProfile("Bohdan", "bhbjbhjbh@gmail.com");
user.saveToDatabase()
console.log(user.formatAsHtml());