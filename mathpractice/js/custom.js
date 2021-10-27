

console.log('Hello World!');

// function addition(){
//     var num1 = parseInt(document.getElementById('num1').value);
//     var num2 = parseInt(document.getElementById('num2').value);

//     var result = num1 + num2;
//     document.getElementById('showData').innerHTML = result;
// }



var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

function addition(){
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var result = x + y;
    document.getElementById('showData').innerHTML = result;
    
    // document.getElementById('num1').value = '';
    // document.getElementById('num2').value = '';
}


function addition2(){
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var result = x - y;
    document.getElementById('showData').innerHTML = result;
    
    // document.getElementById('num1').value = '';
    // document.getElementById('num2').value = '';
}

function addition3(){
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var result = x * y;
    document.getElementById('showData').innerHTML = result;

    // document.getElementById('num1').value = '';
    // document.getElementById('num2').value = '';
}

function addition4(){
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var result = x / y;
    document.getElementById('showData').innerHTML = result;

    // document.getElementById('num1').value = '';
    // document.getElementById('num2').value = '';
}

function addition5(){
    var x = parseInt(num1.value);
    var y = parseInt(num2.value);
    var result = x % y;
    document.getElementById('showData').innerHTML = result;

    // document.getElementById('num1').value = '';
    // document.getElementById('num2').value = '';
}
