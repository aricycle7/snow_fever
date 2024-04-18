let msg = "Enjoy your time at this luxorious, and scenic retreat!";
let el = document.getElementById("message");

function updateMessage(element, messageString){
    element.textContent = messageString;
}

let retreat1 = {
    name: "Mountain Retreat",
    rooms: 4,
    scenery: true,
    tents: false,
    cost: 50
}

let retreat2 = {
    name: "Trail Getaway",
    rooms: 3,
    scenery: true,
    tents: true,
    cost: 40
}

let elName = document.getElementById('retreat');
elName.innerText = retreat1.name;
let el1 = document.getElementById('rooms');
el1.innerText = "Number of rooms: " + retreat1.rooms;
let el2 = document.getElementById('scenery');
el2.innerText = "Scenery: " + retreat1.scenery;
