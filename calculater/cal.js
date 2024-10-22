var a = prompt("Enter num1:");
a = Number(a);
var b = prompt("Enter num2:");
b = Number(b);
console.log(a);
console.log(b);
function sum(a, b) {
    var sum1 = a + b;
    console.log(sum1);
}

function sub(a, b) {
  var  sub1 = a - b;
    console.log(sub1);
}

function mul(a, b) {
    var mul1 = 0;
    mul1 = a * b;

    console.log(mul1);
}
function div(a, b) {
    var div1;
    div1 = a / b;
    console.log(div1);
}
var c = prompt("Enter choice:");
c = Number(c);

switch (c) {
    case 1:
        {
            sum(a, b);
            break;
        }

    case 2:
        {
            sub(a,b);
            break;
        }

    case 3:
        {
            mul(a,b);
            break;
        }


    case 4:
        {
            div(a,b);
            break;
        }
        
}
