
//Assignment 1//

var Rectangle = function(width,height) //declaring object with "constructor function"
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is : " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(10,20); //calling objects/making intances
var myRect2 = new Rectangle(30,40);
var myRect3 = new Rectangle(50,60);
var myRect4 = new Rectangle(30,90);

console.log(myRect1.width); //calling objects' properties
console.log(myRect1.height);
myRect1.area();
console.log("---------------------");
console.log(myRect2.width); //calling objects' properties
console.log(myRect2.height);
myRect2.area();
console.log("---------------------")
console.log(myRect3.width); //calling objects' properties
console.log(myRect3.height);
myRect3.area();
console.log("---------------------")
console.log(myRect4.width); //calling objects' properties
console.log(myRect4.height);
myRect4.area();
console.log("---------------------")




//Assignment 2//
Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); //calling method which is created using prototype property
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();


//Assignment 3//
Rectangle.prototype.getAreaForRect = function(width,height)  //this is because of Global scope and LOcal scope.
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(4,5); //calling method which is created using prototype property
myRect2.getAreaForRect(5,6);
myRect3.getAreaForRect(7,8);
myRect4.getAreaForRect(11,2);

//Assignment 4//
var obj = {
    firstName : "Nasiha",
    lastName : "Mahmudha"
};
console.log(obj);

//Assignment 5//

var middle = {
    firstName : "Nasiha",
    middleName : "Mahmudha",
    lastName : "M"
};
console.log(middle);


//Assignment 6//

var myString = new String('3 + 2')
eval(myString.toString());
console.log(eval(myString.toString()));

//Assignment 7//

const myString = '{"firstName":"Habeema",  "lastName":"Hanees"}';
const ob = JSON.parse(myString);
ob.firstName = eval("(" +ob.firstName+")");

//Assignment 8//
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("Awdhil","ihthisham",99,['java','c#'],"01/01/1998",{city:"Bangalore",pincode:67856},"false","AnalystA4");
Person2 = new Person("Hameem","Mohamed",3,["c","c#"],"02/02/1998",{city:"Hospet",pincode:76766},"false","AnalystA10");

console.log(Person1);
console.log(Person2);

print=function()       //printing the object using Global print method.
{
    console.log(Person1);
    console.log(Person2);
}();



//Assignment9//
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
safrin = new Person("safrin","mahmudha",99,['java','c#'],"01/01/1969",{city:"Bangalore",pincode:67856},"false","AnalystA4");
athiba = new Person("athiba","mahmudha",55,["html","css"],"05/06/1975","false","JrAnalyst");
aseema = new Person("aseema","mahmudha",10,"01/01/2005","false","film");

var athiba = Object.create(safrin); //inheriting the common properties/storing Akshay object in Twinkle
var aseema = Object.create(athiba);  //it has become Heirarchical inheritance now--> Akshay is a supermost class 

print = function()
{
    console.log(safrin);
    console.log(athiba.lastName);
    console.log(athiba.address);
    console.log(aseema.lastName);
    console.log(aseema.skills);
    console.log(aseema.address);
    console.log(aseema.firstName);
}();



//Assignment 10//

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! You have less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log("ATM says! I cant give you the money, Please deposit some amount to withdraw later, Now Please goo!");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odLimit = odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
       
}

var obj1 = new Account(321345,"Nasiha",65536);
console.log(obj1);


var objSavings = new Savings("true",98765,"ratheema",546776); //creating Savings object
console.log(objSavings);
console.log(objSavings.withdraw(500));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(550,9876543,"Safrin",5467878); //creating Current object
console.log(objCurrent);
console.log(objCurrent.withdraw(2000));
console.log(objCurrent.getCurrentBalance());
