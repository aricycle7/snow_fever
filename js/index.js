let msg = "Enjoy your time at our luxorious, and scenic retreats!";
let el = document.getElementById("message");


function updateMessage(element, messageString) {
  element.textContent = messageString;
}

let retreat1 = {
  name: "Mountain Retreat",
  rooms: 4,
  scenery: "Beautiful",
  tents: "None",
  cost: 50,
};

let retreat2 = {
  name: "Trail Getaway",
  rooms: "None",
  scenery: "Magfinicent",
  tents: 4,
  cost: 40,
};

let cost1 = retreat1.cost * document.getElementById("day_value".value);
let cost2 = retreat2.cost * 50;

if(document.getElementById('txt_input').value == "mountain retreat"){
    let elName = document.getElementById("retreat");
elName.innerText = retreat1.name;
let elImage = document.getElementById("image");
elImage.innerHTML =
  '<img src="../res/Log_cabin_in_Stabbursdalen_Resort,_Porsanger,_Troms_og_Finnmark,_Norway,_2022_August.jpg" width = 500px>';
let el1 = document.getElementById("rooms");
el1.innerText = "Number of rooms: " + retreat1.rooms;
let el2 = document.getElementById("scenery");
el2.innerText = "Scenery: " + retreat1.scenery;
let el3 = document.getElementById("tents");
el3.innerText = "Number of Tents: " + retreat1.tents;
let el4 = document.getElementById("cost");
el4.innerText = "Cost per night: " + "$" + retreat1.cost;
let el5 = document.getElementById('total');
el5.innerText = "Cost For Stay: " + "$" + cost1;
}

if(document.getElementById('txt_input').value == "trail getaway"){
let elName = document.getElementById('retreat');
elName.innerText = retreat2.name;
let elImage = document.getElementById('image');
elImage.innerHTML =
  '<img src="../res/Camping_Tents_in_the_Woods.jpg" width = 500px>';
  let el1 = document.getElementById('rooms');
el1.innerText = "Number of rooms: " + retreat2.rooms;
let el2 = document.getElementById('scenery');
el2.innerText = "Scenery: " + retreat2.scenery;
let el3 = document.getElementById('tents');
el3.innerText = "Number of Tents: " + retreat2.tents;
let el4 = document.getElementById('cost');
el4.innerText = "Cost per night: " + "$" + retreat2.cost;
}