document.write("<br>")
// Q#1
// var multidemension[2][3]

// Q#3&4
var number=+prompt("Enter whats Table You Need")
var range=+prompt("Enter limit OF table")

for(var i = 1; i<=range ; i++){
    document.write(number+"x"+i+"="+number*i+"<br>")
}

// Q#5
var fruits = ["apple", "banana", "mango", "orange","strawberry"]

for(var i = 0; i<5 ; i++){
document.write(fruits[i]+"<br>")
}

// Q#6
var counting=15 ;
document.write("counting<br>");
for(var i = 1; i<=15 ; i++){
    document.write([i]+"\n" )
};

document.write("<br><br>" )

var counting=10 ;
document.write("Reverse counting<br>");
for(var u = 10; u>=1 ; u--){
    document.write([u]+"\n" )
};

document.write("<br>EVEN NUmber counting<br>" )
var number=0
for(var i=0 ; i<=20 ;i+=2){
    document.write(i+"\n")
}
document.write("<br>ODD NUmber counting<br>" )
var number=1
for(var i=1 ; i<20 ;i+=2){
    document.write(i+"\n")
}
document.write("<br>EVEN NUmber counting<br>" )
var number=0
for(var i=0 ; i<=20 ;i+=2){
    document.write(i+"k \n")
}
document.write("<br><br>" )

// Q#7
var A=["cake", "apple pie","cookie", "chips", "patties"];
var search=prompt("Welcom to ABC bakery. What do you want to order sir/ma'am");
var bakery=false ;
for (var i =0 ; i<A.length ; i++){
    if (search === A[i]){
        bakery=true;
    }
}
if (bakery){
    document.write(search +"\n"+"is availabe at index  in our bakery")
}
else{
    document.write("we are sorry"+search+"is not available in our bakery")
}

document.write("<br><br>" )

// Q#8
var A = [24, 53, 78, 91, 12]
A.sort(function(a,b){return a-b});
document.write("<br>Array item:"+A+"<br>The Largest Number is "+A[A.length-1])
document.getElementById("demo4").innerHTML = A[A.length-1]

document.write("<br><br>" )

// Q#9
var S = [24, 53, 78, 91, 12]
S.sort(function(a,b){return a-b});
document.write("<br>Array item:"+S+"<br>The Smallest Number is "+S[0])
document.getElementById("demo3").innerHTML = S[0]

document.write("<br><br>" )

// Q#10
var number=5
var range=20
for(var i = 1; i<=range ; i++){
    document.write(number*i+"\n")
}
document.write("<br><br>" )

document.write("All Don")