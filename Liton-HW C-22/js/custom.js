// // js output
// document.write("Hello Bangladesh");

// // window.alert("Danger here");

// console.log('where am i ?');

// // Dom (document object model) js output in a html elements

// document.getElementById('one').innerHTML = "Hello Qatar";

// // variable

// var num1 = 10;
// document.getElementById('one').innerHTML = num1;

// var num1 = "100";
// document.getElementById('one').innerHTML = num1;

// var firstname = "Liton";
// document.getElementsByClassName('two')[0].innerHTML = firstname;

// var lastname = "Talukdar";
// document.getElementsByClassName('two')[1].innerHTML = lastname;
// document.getElementsByClassName('two')[1].style.backgroundColor = "#000";
// document.getElementsByClassName('two')[1].style.color = "#fff";

// var fullname = firstname + lastname;
// document.getElementsByClassName('two')[2].innerHTML =firstname + lastname;
// document.getElementsByClassName('two')[2].style.backgroundColor = "red";





var inputData = document.getElementById('inputData');
var showData = document.getElementById('showData');
var remain = document.getElementById('remain');



function totalChar(){
    var limit = 300;
    var total = inputData.value.length;
    var remaining = limit - total;
    showData.innerHTML = total;
    remain.innerHTML = remaining;
}


// form validation


var firstName = document.getElementById('firstName');
var firstNameErr = document.getElementById('firstNameErr');

var surName = document.getElementById('surName');
var surNameErr = document.getElementById('surNameErr');

var userEmail = document.getElementById('userEmail');
var userEmailErr = document.getElementById('userEmailErr');



function subm(){
    if(firstName.value == ""){
        firstName.style.borderColor = "#ff1100";
        firstName.focus();
        firstNameErr.innerHTML = "please enter your first name first";
        return false;
    }
    
    if(surName.value == ""){
        surName.style.borderColor = "#ff1100";
        surName.focus();
        surNameErr.innerHTML = "please enter your  surname first";
        return false;
    }
    
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(userEmail.value == ""){
        userEmail.style.borderColor = "#ff1100";
        userEmail.focus();
        userEmailErr.innerHTML = "please enter your Email first";
        return false;
    }
    
    
}

function erroreRvm(){
    if(firstName.value != ""){
        firstName.style.borderColor = "#DDDDDD";
        firstNameErr.innerHTML = "";
    }
    
    
    if(surName.value != ""){
        surName.style.borderColor = "#DDDDDD";
        surNameErr.innerHTML = "";
    }
    
    if(userEmail.value != ""){
        userEmail.style.borderColor = "#DDDDDD";
        userEmailErr.innerHTML = "";
    }

    

}

//  to remove errore after filli up input;


firstName.addEventListener('blur',erroreRvm);
surName.addEventListener('blur',erroreRvm);
userEmail.addEventListener('blur',erroreRvm);




document.write("Liton Talukdar <br/>");
document.write("My mobile number:+97455739004 <br/>");
document.write("I'm Webner <br/>");
document.write("Train in CIT <br/>");
document.write("Bass No RWD2111 <br/>");


