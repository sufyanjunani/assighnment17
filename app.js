// Q # 1& 2
//Empty arry
var studentsnames=[]
// Q # 3
// String[]
var student=["Ali","Akbar","Yamin","Ahmed","Kareem"]

// Q # 4
//  int[]
var numbers=[1,2,3,4,5,6]

// Q # 5
// Boolean[]
var flag = false

// Q#6
// MIXED ARRAY
for (var i = 0 ; i<=4 ; i++){
    document.write(student[i]+"<br>")
}

// Q # 7
var Education_Qualification =["1)SSC", "2)HSC", "3)BCS","4)BS", "5)BCOM", "6)MS ", "7)M.Phil.", "8)PhD"]
for (var z = 0 ;z <8 ; z++){
    document.write("<br>"+Education_Qualification[z]+"<br>")
}

// Q # 8
var studentNames = ["Alice", "Bob", "Charlie"];
var scores = [420, 380, 450];
var totalMarks = 500;

document.write("<h2>Student Scores and Percentages:</h2>");
document.write("<table>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("<tr><td>" + studentNames[i] + "</td><td>" + scores[i] + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
}
document.write("</table>");
// Q#9

// var colorname=["red"+"orange"+"green"+"black"+"yellow"]
// var choosen_color= prompt("Select one colour given \ red , orange , green , black , yellow")
// if(colorname === choosen_color){
//     flag=true ;
// }
// if(flag = true){
//     // alert(choosen_color)
//     document.getElementById("#myH2") .style.color="#750204";
// }
// document.body.style.backgroundColor= ["#750204"];

// Q#10
var studentscore= [320,230,480,120];
studentscore.sort(function(a,b){return a-b});
document.getElementById("demo1").innerHTML = studentscore;


// Q#11
var cities=["karachi","lahore","islamabad","peshawre","quetta"]
document.write("<br>Citis in Pakistan <br>"+cities)
document.write("<br><br>Slected Cities in Pakistan")

for(var i=1 ; i<4 ; i++){
    document.write("<br>"+cities[i]+"<br>")
}
// Q#12
var naration = ["This " , "is ", "my ", "cat ."];
for(var i=0 ; i<4 ; i++){
document.write(naration[i])
}
// Q#13
var devices=["<br>Devices:<br>keyboard,mouse,printer,moniter"]
var device=["keyboard","mouse","printer","moniter"]
document.write(devices+"<br>")
device.shift()
document.write(device+"<br>")
device.shift()
document.write(device+"<br>")
device.shift()
document.write(device+"<br>")
device.shift()
document.write(device+"<br>")

// Q#14
device.unshift("moniter")
document.write(device+"<br>")
device.unshift("printer")
document.write(device+"<br>")
device.unshift("mouse")
document.write(device+"<br>")
device.unshift("keyboard")
document.write(device+"<br>")
document.write(devices+"<br>")


// Q#15
var phone=("Apple","Samsung", "Motorola", "Nokia", "Sony" ,"& Haier")
document.write( "<select><Option>Apple</option><option>Samsung</option><option>Motorola</option><option>Nokia</Option></select>")


