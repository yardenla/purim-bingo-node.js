var pictures = [];
var usedPictures = [];
var usedindex = [];
var img = document.getElementById("image");
var btn = document.getElementById("btn");
const picLength = 70;
const seconds = 1200;
const maxDigit = 4;
let stop = false;


function loadPictures() {
  for (let i = 0; i < picLength; i++) {
    pictures[i] = "./photos/" + (i + 1) + ".png";
    //console.log(pictures[i]);
  }
}

function generate() {
  if (usedindex.length < picLength - 1) {
    img.src = "./loading.gif";
  } else if (usedindex.length == picLength - 1) {
    img.src = "./loading.gif";
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
    btn.innerHTML = "נגמרו הכדורים";
  }
  setTimeout(function () {
    //console.log("Ready");
    stop = false;
    while (stop == false) {
      //console.log("enter");
      if (usedindex.length < picLength) {
        var randomNumber = Math.floor(Math.random() * 100) % picLength;
        //console.log(randomNumber);

        if (usedindex.includes(randomNumber) == false) {
          //console.log("second");
          var chosen = pictures[randomNumber];
          usedPictures.push(chosen);
          usedindex.push(randomNumber);

          showPicture(randomNumber);
          addToUsed();
          stop = true;
        }
      } else {
        //console.log("finished");
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
        btn.innerHTML = "נגמרו הכדורים";
        stop = true;
      }
    }
  }, seconds);
}

function addToUsed() {
  if (usedPictures.length >= 2) {
    //console.log(usedPictures);
    //console.log("add to used");
    let uimg = document.createElement("img");
    let t = usedindex[usedindex.length - 1];
    uimg.src = pictures[t];
    document.getElementById("used").appendChild(uimg);
  } else if (usedPictures.length == 1) {
    let ouimg = document.createElement("img");
    let t = pictures[usedindex[0]];
    ouimg.src = t;
    document.getElementById("used").appendChild(ouimg);
  }
}

function showPicture(index) {
  //console.log(pictures);
  img.src = pictures[index];
}

function getCard() {
  var cardNum = window.prompt("הכנס מס כרטיס ");
  console.log(search(data.cards, cardNum));
  if (search(data.cards, cardNum).length > 0 && cardNum.length == maxDigit) {
    checkWin(cardNum);
  } else {
    alert("לא נמצא כרטיס בינגו עם מספר זה");
  }
}

loadPictures();
