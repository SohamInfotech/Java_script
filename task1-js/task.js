
  // pelindrom num 

var num1 = prompt("Enter num1")
var rev = 0, r, copy;
num1 = Number(num1)
copy = num1;


while (num1 > 0) {
    r = num1 % 10;
    rev = rev * 10 + r;
    num1 = parseInt(num1 / 10);
}
console.log(rev);
if (copy == rev) {
    console.log("its pelindrom");

} else {
    console.log("its not pelindrom");
}


 //  armstrong num 


var num2 = prompt("Enter num2")
var rev = 0, r, copy1;
num2 = Number(num2)
copy1 = num2;
while (num2 > 0) {
    r = num2 % 10;
    rev = (r * r * r) + rev;
    num2 = parseInt(num2 / 10);
}
console.log(rev);
if (copy1 == rev) {
    console.log("its armstrong");

} else {
    console.log("its not armstrong");
}



  // prime num //



var a = prompt("Enter num3");
a = Number(a);
var cnt = 0;


for (i = 1; i <= a; i++) {
    if (a % i == 0) {
        cnt++;
        console.log(i);
    }
}
console.log(a);
if (cnt == 2) {
    console.log("its prime");

} else {
    console.log("its not prime");
}


  // first later capital  

  var str=prompt("Enter string");
    // str=toString(str);
    var s;
  str= str.toLowerCase();
  console.log(str ,typeof str);
  s= str.charAt(0).toUpperCase()+str.substring(1)
  console.log(s);
  