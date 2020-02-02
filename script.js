// Task1

//document.getElementById("test").innerHTML = "last";

document.getElementsByTagName("div")[0].innerHTML = "last";

// Task 2

let cat = "images/cat.jpg";
document.getElementsByTagName("img")[0].src = cat;

alert(cat);

// Task 3

/*let div = document.getElementById("text");
let elem = div.getElementsByTagName("p");
for (let i = 0; i < elem.length; i++)
  console.log("Selector text", "" + [i], ":", elem[i].textContent);*/

let elem = document.querySelectorAll(".p");
for (let i = 0; i < elem.length; i++)
  console.log("Selector text", "" + [i], ":", elem[i].textContent);

// Task 4

let list = document.getElementById("list");
let elemList = list.getElementsByTagName("li");
console.log(
  elemList[0].textContent,
  elemList[elemList.length - 1].textContent,
  elemList[1].textContent,
  elemList[3].textContent,
  elemList[2].textContent
);
// 2
let li = document.querySelectorAll("li");

console.log(
  li[0].textContent,
  elemList[elemList.length - 1].textContent,
  li[0].nextElementSibling.textContent,
  elemList[3].textContent,
  elemList[3].previousElementSibling.textContent
);

// Task 5

let bigHeader = document.querySelectorAll("h1");
bigHeader[0].style.backgroundColor = "green";

let paragraf = document.querySelectorAll(".par");
for (let i = 0; i < paragraf.length; i++) {
  if (paragraf[i] == paragraf[0]) {
    paragraf[i].style.fontWeight = "bold";
  }
  if (paragraf[i] == paragraf[1]) {
    paragraf[i].style.color = "red";
  }
  if (paragraf[i] == paragraf[2]) {
    paragraf[i].style.textDecoration = "underline";
  }
  if (paragraf[i] == paragraf[3]) {
    paragraf[i].style.fontStyle = "italic";
  }
}
let vertical = document.querySelectorAll(".horizontal");
for (let i = 0; i < vertical.length; i++) {
  vertical[i].style.display = "inline-block";
}
vertical[2].innerHTML = "vertical!";

vertical[2].innerHTML = "vertical!";

let invisible = document.getElementsByTagName("span");
invisible[0].style.display = "none";

// Task 6

var in1 = prompt("Enter Your First input");
var in2 = prompt("Enter Your Second Input");

let input1 = document.getElementById("input1");
input1.setAttribute("value", in1);

let input2 = document.getElementById("input2");
input2.setAttribute("value", in2);

input1.setAttribute("value", in2);
input2.setAttribute("value", in1);

// Task 7

document.getElementById("body");

let newMain = document.createElement("main");
newMain.className = "mainClass check item";
newMain.id = "main";
newMain.innerHTML;
body.prepend(newMain);

let main1 = document.getElementsByClassName("mainClass check item");
let newDiv = document.createElement("div");
newDiv.id = "myDiv";
newDiv.innerHTML;
main.append(newDiv);

let div = document.getElementById("myDiv");
let newP = document.createElement("p");
newP.innerHTML = "First paragraf";
div.prepend(newP);

console.log(document.body);
