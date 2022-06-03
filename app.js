                    //CHAPTER NO 17 - 20

                    //Question no 1
//Declare and initialize an empty multidimensional array. (Array of arrays)

var arr = [ [], [] , [] , [] ];
console.log(arr);

                    //Question no 2
//Declare and initialize a multidimensional array representing the following matrix:

var arr = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ];
console.log(arr);

                    //Question no 3
//Write a program to print numeric counting from 1 to 10.

for(var i = 1; i <= 10; i++){
    console.log(i)
}


                    //Question no 4
//Write a program to print multiplication table of any number using for loop. Table number & length should be
//taken as an input from user.

var num = +prompt("Input a number to print table: ");
var num1 = +prompt("Length a multipilication table: ");
for(var i=1; i<=num1; i++ ){
    console.log(num + " x " + i + " = " + num*i)
}


                    //Question no 5
//Write a program to print items of the following array using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log(fruits);
for(var i=0; i<fruits.length; i++){
    console.log("Element of " + i + " is " + fruits[i] )
}


                    //Question no 6
//. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("Counting: ")
for(var i=1; i<=15; i++){
    document.write(i + ", ")
}
document.write("Reverse counting: ")
for(var j=10; j>0 ;j--){
    document.write(j + " ,")
}
document.write("Even: ")
for(var i=0; i<21;i++){
    if(i%2==0){
        document.write(i + " ,")
    }
}
document.write("Odd: ")
for(var i=1; i<20;i++){
    if(i%2==1){
        document.write(i + " ,")
    }
}
document.write("Series: ")
for(var i=2; i<21;i++){
    if(i%2==0){
        document.write(i + "k,")
    }
}

                    //Question no 7
//Write a program to print multiples of 5 ranging 1 to 100.
for(var i=5; i<101; i++){
    if( i % 5 == 0){
        document.write(i + " ,")
    }
}

                    // Question no 8
//You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user 
//whether the given item is found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter the value: ");
var flag = false;
for(var i=0; i<A.length;i++){
    if(A[i] === search){
        flag = true;
        document.write(A[i] + " is available in our bakery.");
        break
    }
}
if(flag === false){
    document.write(search + " not found in our bakery. ")
}

