const salon={
    name:"The Fashon Pet",
    address:{
        street:"Av.university",
        number:"212-k",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
//var salonName=saon.name;
//var salonNumber=salon.address.number;

var {name,address:{street,number}}=salon;// object destructuring

document.getElementById('footer-info').innerHTML=`
     <p> ${name} ${street} ${number}</p>`;

function displayText(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);
    }
}

// CREATE THE OBJET CONSTRUCTOR 
class Pet{
    constructor(name,age,gender,type,breed,service,ownerName,contactPhone){
     this.name=name;
     this.age=age;
     this.gender=gender;
     this.type=type;
     this.breed=breed;
     this.service=service;
     this.ownerName=ownerName;
     this.contactPhone=contactPhone;
    }
}

// CREATE THE REGISTER FUNCTION
//read from the inputs and store the information into vars 
var inputName = document.getElementById('petName');
var inputAge = document.getElementById('petAge');
var inputGender = document.getElementById('petGender');
var inputType = document.getElementById('petType');
var inputBreed = document.getElementById('petService');
var inputBreed = document.getElementById('petBreed');
var imputService = document.getElementById('ownerName');
var imputOwner = document.getElementById('ownerName');
var inputPhone = document.getElementById('ownerPhone');   

//create pets name

function register(){
      //create a generic objet and pass the info of the vars 
      var thePet = new Pet(imputName.value,
        inputAge.value,
        inputGender.value,
        inputType.value,
        inputBreed.value,
        inputService.value,
        inputOwner.value,
        inputPhone.value);
    console.log(thePet);
    // push the objet into the array
    salon.pets.push(thePet); 
    // clear the inputs 
    clear();
    displayTable(thePet);
}
function clear(){
    inputName.value="";
    inputAge.value="";
    inputBreed.value="";
    inputGender.value="";
    inputOwner.value="";
    inputPhone.value="";

}

function updteProfits(){
    var profit=0;
    for(var i=0;i<salon.pets.length;i++){
        profit=profit+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`Profits = $${profit}.00`;
}
function init(){
    console.log("Executed"); 
    //create 3 pets 
    var pet1= new Pet("scooby",50,"male","dog","Dane","Hair", "Shaggy","5555555");
    var pet2= new Pet("scrappy ",50,"male","dog","mixed","full", "Shaggy","5555555");
    var pet3= new Pet("Tweety Bird  ",70,"male","mixed","bird","Dane","Full service", "Shaggy","8888-888-888");
    salon.pets.push(pet1);
    salon.pets.push(pet2);
    salon.pets.push(pet3);
}

window.onload=init;















