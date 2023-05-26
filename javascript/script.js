
//Skapar p element och läggs i body med style
for (let i = 1; i < 6; i++) {
    const rad = document.createElement("p");
    document.body.appendChild(rad);
    rad.innerHTML = "Rad" + i;
    rad.style.fontSize = 5 + i*10 + "px";
    rad.style.textAlign = "center";
    rad.style.backgroundColor = `hsl(${153 + i*6}, 100%, 50%)`;
}

// 3 loopar i en huvud div
const containerDiv = document.createElement("div");
document.body.appendChild(containerDiv);

containerDiv.style.border = "solid 5px black";
containerDiv.style.height = "300px"; 
containerDiv.style.display = "flex";
containerDiv.style.justifyContent = "space-around";
containerDiv.style.alignItems = "center";


//1 Vänstra diven
const leftDiv = document.createElement("div");
leftDiv.style.width = "20%";
containerDiv.appendChild(leftDiv);

const leftCounterDiv = document.createElement("div");
leftDiv.appendChild(leftCounterDiv);
leftCounterDiv.style.backgroundColor = "hsl(240, 71%, 80%)";
leftCounterDiv.style.padding = "10px";
leftCounterDiv.style.width = "40px";

for (let i = 0; i < 10; i++) {
    const counter = document.createElement("p");
    counter.innerHTML = i;
    leftCounterDiv.appendChild(counter);
    counter.style.padding = "0";
    counter.style.margin = "0";

    if (i % 2) {
        counter.style.backgroundColor = "white";
    }

    else {
        counter.style.color = "white";
        counter.style.backgroundColor = "black";
    }

}

//Mitten Div
const midDiv = document.createElement("div");
midDiv.style.width = "15%";
containerDiv.appendChild(midDiv);

const midCounterDiv = document.createElement("div");
midDiv.appendChild(midCounterDiv);
midCounterDiv.style.backgroundColor = "hsl(240, 71%, 80%)";
midCounterDiv.style.padding = "10px";
midCounterDiv.style.width = "40px";
midCounterDiv.style.textAlign = "center";

for (let i = 9; i >= 0; i--) {
    const counter = document.createElement("p");
    counter.innerHTML = i;
    midCounterDiv.appendChild(counter);
    counter.style.margin = "0";

    if (i % 2) {
        counter.style.backgroundColor = "white";
    } 
    
    else {
        counter.style.color = "white";
        counter.style.backgroundColor = "black";
    }
    
}

//2 Högra diven
const rightDiv = document.createElement("div");
rightDiv.style.width = "15%";
containerDiv.appendChild(rightDiv);

const rightCounterDiv = document.createElement("div");
rightDiv.appendChild(rightCounterDiv);
rightCounterDiv.style.backgroundColor = "hsl(240, 71%, 80%)";
rightCounterDiv.style.padding = "10px";
rightCounterDiv.style.width = "40px";
rightCounterDiv.style.textAlign = "right";

const numberCounter = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for (let i = 0; i < 10; i++) {
    const counter = document.createElement("p");
    counter.innerHTML = numberCounter[i];
    rightCounterDiv.appendChild(counter);
    counter.style.margin = "0";

    if (i % 2) {
        counter.style.backgroundColor = "white";
    } 
    
    else {
        counter.style.color = "white";
        counter.style.backgroundColor = "black";
    }
    
    if (i === 5) {
        counter.style.backgroundColor = midCounterDiv.style.backgroundColor;
    }
}