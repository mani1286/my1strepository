document.title = "Dom in JavaScript";
 document.getElementById("header").innerHTML="Hello,World!";

 document.getElementById("para").style.color = "blue";
 document.getElementById("para").style.fontSize = "30px";


document.getElementsByClassName("ds")[0].innerHTML="BGMI";
document.getElementsByClassName("ds")[0].style.color="red";
document.getElementsByClassName("ds")[0].style.fontSize="50px";
document.getElementsByTagName("h1")[1].innerHTML="MALLA REDDY COLLEGE";
document.getElementsByTagName("h1")[1].style.color="ORANGE";
document.body.style.backgroundColor ="lightblue";
//style  elements by class name
let chinnu=document.getElementsByClassName("ds");
chinnu[0].style.color="red";
chinnu[1].style.color="green";
chinnu[2].style.color="red";
chinnu[3].style.color="black";
document.querySelector(".dsa").style.color="red";
//day 8
//query selector all
let depts=document.querySelectorAll(".data")
depts[0].style.color="red";
depts[1].style.color="yellow";
depts[2].style.color="blue";
depts[0].style.fontSize="20px";
depts[1].style.fontSize="30px";
depts[2].style.fontSize="40px";



//function to toggle background color
// function changeBackground() {
//     document.body.style.backgroundColor="green";
// }

/*function changeBackground() {
    if (document.body.style.backgroundColor==="green"){
         document.body.style.backgroundColor="white";
    } else{
         document.body.style.backgroundColor="green";
    }
} */

function ewq() {
        document.body.style.backgroundColor=
        document.body.style.backgroundColor ==="lightblue" ? "red" : "yellow";
        }

function changetext() {
    document.getElementById("clg").innerHTML = "CMRCET , CMREC";
   document.getElementById("clg").style.backgroundColor ="coral";
   document.getElementById("clg").style.color="black";
   document.getElementById("clg").style.fontSize="50px";
   document.getElementById("clg").style.textAlign="center";
    alert("changetext  changed to CMRCET,CMREC");

}