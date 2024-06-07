console.log("Hello World");

var test = 3; 
var k = 0;
for (var i = 2; i <= parseInt(test/2); i++) {
    if (test % i == 0) {
        console.log("Your inserted number is not a prime number");
        console.log("please try enter another number");
        k = 1;
       
        break;
    }
}

if (k === 0) {
    var hello1 = "hello";
    console.log("Your inserted number is a prime number");
    console.log(hello1);
} 

