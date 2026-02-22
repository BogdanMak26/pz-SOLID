class User {
    constructor(public name: string, public email: string) {}
}

class UserRepository {
    save(user: User) {
        console.log(`Saving ${user.name} to DB...`)
    }
}

class UserView {
    toHtml(user: User) { return `<div>${user.name}</div>`; }
}


const user = new User("Bohdan", "bhbjbhjbh@gmail.com");

const userRepository = new UserRepository();
userRepository.save(user);

const  userView = new UserView();
console.log(userView.toHtml(user));