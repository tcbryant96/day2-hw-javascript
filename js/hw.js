console.log("Hi")
/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
//C(9/5) + 32 = F
var convert_num = far => (far-32)* (5/9)

console.log(convert_num(50))










/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    change(password, new_password){
        if (password === this.password){
            this.password = new_password
            console.log(`${this.username}'s password has been changed`)
        }
        else{
            console.log(`password entered is not the password for ${this.username}`)
        }
    }
    
}

let user1 = new User('Trevor', 'Bryant')
console.log(user1)

user1.change("Bryant", "Hi")








/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/


let lst = [-10, -3, 4, -2, 8, 9, -3];
let squareNegatives = lst.filter(num => num < 0)
console.log(squareNegatives)

function squareNeg(arr){
    let new_arr = arr.filter(num => num < 0)
    return new_arr.map(e => e**2)
}
console.log(squareNeg(lst))