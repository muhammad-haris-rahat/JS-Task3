// TODO Chapter # 12 - 13

// Question # 01

// var input = prompt("Enter a number or alphabets: ")
// if(input >= "A" && input <= "Z"){
//     console.log("It is uppercase")
// }else if (input >= "a" && input <= "z"){
//     console.log("It is lowercase")
// }else{
//     console.log("It is a number")
// }

// Question # 02

// var num1 = + prompt("Enter first number :")
// var num2 = + prompt("Enter second number :")
// if (num1>num2){
//     console.log("First number is grater!")
// }else if (num1<num2){
//     console.log("Second number is grater!")
// }else if (num1===num2){
//     console.log("Both are equal!")
// }


// Question # 03

// var input = + prompt("Enter a number :")
// if (input>0){
//         console.log("Its a positive number!")
// }else if (input<0){
//     console.log("Its a negative number!")
// }else if (input===0){
//     console.log("its zero!")
// }


// Question # 04

// var input = prompt("Enter an alphabet: ")
// if (input=== "a" || input=== "e" ||input=== "i" ||input=== "o" ||input=== "u"){
//     console.log("Its a vowel!")
// }else{
//     console.log("Its not a vowel!")
// }


// Question # 05

// var password = "notebook"
// var input = prompt("Enter password :")
// if (password===input){
//     console.log("Correct!The password you entered matches the original password")
// }else if (password != input){
//     console.log("Incorrect Password")
// }


// Question # 06

// var greeting;
// var hour = 13 
// if (hour < 18){
//     greeting = "Good day"
//     console.log ( "Good day")

// }else{
//     greeting = "Good evening"
//     console.log ( "Good evening")
    
// }


// Question # 07

// var time = + prompt("Enter time in 24hr. format: ")
// if (time >= 0 && time < 12){
//     console.log("Good morning")
// }else if (time >= 12 && time < 17){
//     console.log("Good afternoon")
// }else if (time >= 17 && time < 21){
//     console.log("Good evening")
// }else if (time >= 21 && time <= 23){
//     console.log("Good night")
// }else{
//     console.log("Invalid time!")
// }


// TODO CHAPTER 14 - 16


// Question # 01

// var empty = []


// Question # 02

// var studentsName = []


// Question # 03

// var colours = ["Red" , "Green" , "Blue" , "Purple"]


// Question # 04

// var numbers = [1 , 2 , 5 , 7 , 25 , 35 ]


// Question # 05

// var boolean = [true , false]


// Question # 06

// var array = ["Haris" , 25 , true]


// Question # 07

// var qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil." , "PhD"]
// console.log(qualification)
// document.write("1." + qualification[0] + "<br>" + "2." + qualification[1]+ "<br>" +"3." + qualification[2] + "<br>" + "4." + qualification[3] + "<br>" + "5." + qualification[4] + "<br>" + "6." + qualification[5] + "<br>" + "7." + qualification[6] + "<br>" + "8." + qualification[7]  )


// Question # 08

// var students = ["Haris" , "Aweem" , "Tamsal"]
// var marks = [488 , 450 , 420]
// var total = 500
// var percentage1 = (marks[0]/total)*100
// var percentage2 = (marks[1]/total)*100
// var percentage3 = (marks[2]/total)*100
// console.log(percentage1 , percentage2 , percentage3)
// document.write("Score of " +  students[0]  + " is "  + marks[0]  + "." + "Percentage is " + percentage1 + "<br>" + "Score of " +  students[1]  + " is "  + marks[1]  + "." + "Percentage is " + percentage2 + "<br>" + "Score of " +  students[2]  + " is "  + marks[2]  + "." + "Percentage is " + percentage3  )


// Question # 09

// var colors = ["red" , "green" , "blue"]

// A
// var a = prompt("Enter any colour's name: ")
// colors.unshift(a)

// B
// var b = prompt("Enter any colour's name: ")
// colors.push(b)

// C
// colors.unshift("violet" , "brown")

// D
// colors.shift()

// E
// colors.pop()

// F
// var f1 = prompt("Enter index in which you want to add the colour: ")
// var f2 = prompt("Enter color's name : ")
// colors.splice(f1 , 0 , f2)

// G
// var g1 = prompt("Enter index at which you want to delete the colour: ")
// var g2 = prompt("How many colors you want to delete : ")
// colors.splice(g1 , g2)


// console.log(colors)
// document.write(colors)


// Question # 10

// var studentsScore = [188 ,175, 100 ,152 , 190 , 70 , 199]
// studentsScore.sort(function(a, b) {
//     return a - b;
// });
// console.log(studentsScore)


// Question # 11

// var citiesList = ["Karachi" , "Islamabad" , "Lahore" , "Peshawar" , "Quetta"]
// var selectedCities =["Karachi" , "Islamabad"]
// document.write("Cities List :" + "<br>" + citiesList + "<br>"  + "Selected Cities List : " + "<br>" + selectedCities)


// Question # 12

// var array = ["This" , "is" , "my" , "house"]
// a = array.join(" ")
// console.log(a)


// Question # 13

// var array = ["keyboard" , "mouse" , "printer" , "monitor"]
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])


// Question # 14

// var array = ["keyboard" , "mouse" , "printer" , "monitor"]
// console.log(array[array.length-1])
// console.log(array[array.length-2])
// console.log(array[array.length-3])
// console.log(array[array.length-4])


// Question # 15


// const manufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony"];

// const dropdown = document.getElementById("manufacturerDropdown");

// for (let i = 0; i < manufacturer.length; i++) {
//     const option = document.createElement("option");
//     option.value = manufacturer[i]; 
//     option.text = manufacturer[i];  
//     dropdown.appendChild(option);
// }

