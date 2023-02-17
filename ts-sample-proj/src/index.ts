class User {
  email: string
  name: string
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

// instance of the class User
const newUser = new User('sam@sam.com', 'Sam');