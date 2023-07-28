

(()=> {

  // No aplicando el principio de responsablidad única

  type Gender = 'M'|'F'

  class Person {

    // OPCION 1
    // ********
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;

    // constructor(
    //   name: string, 
    //   gender: Gender, 
    //   birthdate: Date
    //   ) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthdate = birthdate;
    // }

    // OPCION 2
    // ********
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}

  }


  class User extends Person {

    public lastAccess: Date;

    constructor (
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate)
      this.lastAccess = new Date()
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ){
      super(email, role, name, gender, birthdate)
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'physiodevapp@google.com',
    'Admin',
    'Fernando',
    'M',
    new Date('1985-10-21')
  )
  console.log({userSettings})

})()