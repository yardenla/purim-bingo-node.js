const rows = 4;
const cellWidth = 100;
var usedIndex = [];
var start = true;
let number = 0;

function addTable() {
  var myTableDiv = document.getElementById("card");

  var table = document.createElement("TABLE");
  table.border = "1px solid black";
  table.classList.add("center");

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);

  for (var i = 0; i < rows; i++) {
    var tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (var j = 0; j < rows; j++) {
      var td = document.createElement("TD");
      td.id = i + "," + j;
      td.width = cellWidth;
      td.height = cellWidth;
      //td.appendChild(document.createTextNode(i + "," + j));
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
}
addTable();

function generateCard() {
  usedIndex = [];
  clearTable();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      var randomIndex = Math.floor(Math.random() * 100) % picLength;
      //console.log(randomIndex);
      //console.log(usedIndex);
      randomIndex = checkDoubles(randomIndex);
      let cellId = i + "," + j;
      let cell = document.getElementById(cellId);
      let image = document.createElement("img");
      image.id = randomIndex;
      image.src = pictures[randomIndex];
      image.classList.add("cell");
      cell.appendChild(image);
      //console.log(cellId);
    }
  }
}

function clearTable() {
  var images = document.getElementsByTagName("img");
  var l = images.length;
  for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
  }
}

function checkDoubles(current) {
  //console.log("doubles");
  start = true;
  while (start) {
    if (usedIndex.includes(current) == false) {
      usedIndex.push(current);
      //console.log("used in a loop " + usedIndex);
      //console.log(current);
      return current;
    } else {
      current = Math.floor(Math.random() * 100) % picLength;
      //console.log("new current " + current);
    }
  }
}

function save() {
  var num = document.getElementById("cardnum");
  console.log(num.value);
  var images = document.getElementsByTagName("img");
  if (images.length > 0) {
    alert("copied to clipboard");
    let object = {
      id: num.value,
      numbers: getnumbers(),
    };
    navigator.clipboard.writeText(Object.values(object));
  }
}

function getnumbers() {
  let arr = [];
  let imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
    arr.push(imgs[i].id);
  }

  return arr;
}

function insertText() {
  var line = document.getElementById("cardtext");
  var input = document.getElementById("cardnum");
  line.innerHTML = "מס' כרטיס " + input.value;
}
