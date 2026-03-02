// Get and Set Methods
// Public and Private Properties

class UserProfile{
    constructor(username, email, birthdate)
    {
        this.username = username;
        this.email = email;
        this.birthdate = birthdate;
    }
    
    get username() {
        return this._username;
    }
    
    get email() {
        return this._email;
    }
    
    get birthdate() {
        return this._birthdate;
    }
    
    
    set username(username) {
        if (username === "" || typeof username != 'string')
        {
            throw new Error('Invalid username.');
        }
        else 
        {
            this._username = username;
        }
    } 
    
    set email(email) {
        if (email.indexOf('@') === -1)
        {
            throw new Error('Invalid email.');
        }
        else 
        {
             this._email = email;
        }
    }
    
    
    set birthdate(birthdate)
    {
        if (isNaN(Date.parse(birthdate)))
        {
            throw new Error('Invalid birthdate.');
        }
        else
        {
            this._birthdate = birthdate;
        }
    }
}