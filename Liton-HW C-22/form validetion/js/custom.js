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


