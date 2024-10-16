// let num1 = parseInt(prompt("Enter the first number"))
// let num1 = parseInt(prompt("Enter the second number"))

// let c = num1 + num2;
// alert(c)

// let num = parseInt(prompt("Enter the number"))
// if (num % 2 == 0){
//     alert("This is even number")
// }
// else{
//     alert("this is odd number")
// }

// let day = parseInt(prompt("Enter day of the week"))
// if(day==1){
//     alert("Monday")
// }
// else if(day==2){
//     alert("Tuesday")
// }
// else if(day==3){
//     alert("Wednesday")
// }
// else if(day==4){
//     alert("Thursday")
// }
// else if(day==5){
//     alert("Friday")
// }
// else if(day==6){
//     alert("Saturday")
// }
// else if(day==7){
//     alert("Sunday")
// }
// else{
//     alert("Invalid number")
// }

// let email = "rizwanzaman38@gmail.com";
// let pass = 12345;

// let email1 = prompt("Enter your Email")
// let pass1 = parseInt(prompt("Enter the password"))

// if(email == email1 && pass == pass1){
//     alert("You are sucessfully login")
// }
// else{
//     alert("Incorrect password")
// }



// let person{
//     name = "Ahamad",
//     age = 20,
//     gender ="male",
//     education = "bs",
//     address = "lahore",
//     hobby = "coding"
// }

// console.log(`The Name is ${person.name} and Age is ${person.age} and the Education ${person.education}`)


let email = "rizwanzaman38@gmail.com";
let pass = 12345;
let total_bal = 10000;

let email1 = prompt("Enter your Email")
if(email!=email1){
    alert("You enterd the incorrect Email.")
    let email1 = prompt("Enter your correct Email")
}


let pass1 = parseInt(prompt("Enter the password"))
if(pass!=pass1){
    alert("You enterd the incorrect Password.")
    let pass1 = parseInt(prompt("Enter the correct password"))
}


if(email==email1 && pass==pass1){
    alert("You are Sucessfully login to Your Account.\n Your total balance is \n What you want?")
}
if(email!=email1 && pass!=pass1){
    alert("Plz Enter the Right Credientials.\n Thank You.")
}