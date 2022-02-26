var data = {
  cards: [
    {
      id: "0001",
      numbers: [57, 14, 25, 68, 4, 23, 26, 27, 11, 62, 65, 20, 8, 33, 21, 10],
    },
    {
      id: "0002",
      numbers: [62, 28, 47, 11, 37, 58, 13, 36, 17, 0, 25, 50, 20, 26, 19, 16],
    },
    {
      id: "0003",
      numbers: [49, 23, 36, 51, 9, 58, 31, 56, 47, 16, 32, 28, 0, 35, 19, 10],
    },
    {
      id: "0004",
      numbers: [18, 52, 56, 20, 46, 27, 64, 44, 9, 23, 30, 28, 57, 3, 53, 24],
    },
    {
      id: "0005",
      numbers: [4, 58, 15, 61, 42, 24, 43, 29, 69, 23, 2, 25, 5, 21, 17, 10],
    },
    {
      id: "0006",
      numbers: [60, 20, 17, 25, 33, 7, 10, 47, 9, 54, 16, 27, 23, 14, 8, 57],
    },
    {
      id: "0007",
      numbers: [28, 1, 41, 31, 8, 15, 17, 25, 0, 29, 46, 16, 39, 27, 32, 14],
    },
    {
      id: "0008",
      numbers: [13, 39, 6, 43, 1, 24, 12, 11, 25, 15, 19, 58, 40, 20, 64, 9],
    },
    {
      id: "0009",
      numbers: [48, 19, 26, 27, 62, 20, 25, 13, 1, 46, 53, 37, 31, 15, 11, 9],
    },
    {
      id: "0010",
      numbers: [17, 33, 60, 13, 8, 50, 68, 63, 29, 54, 62, 44, 0, 1, 43, 11],
    },
    {
      id: "0011",
      numbers: [2, 31, 8, 4, 5, 67, 25, 24, 49, 15, 16, 29, 33, 51, 65, 27],
    },
    {
      id: "0012",
      numbers: [52, 61, 39, 29, 14, 44, 28, 18, 47, 11, 3, 65, 15, 2, 49, 19],
    },
    {
      id: "0013",
      numbers: [53, 21, 3, 22, 7, 39, 67, 8, 28, 31, 19, 38, 6, 16, 50, 14],
    },
    {
      id: "0014",
      numbers: [52, 1, 19, 58, 55, 17, 3, 10, 13, 15, 48, 21, 54, 62, 27, 9],
    },
    {
      id: "0015",
      numbers: [42, 50, 22, 66, 67, 26, 18, 35, 12, 49, 62, 15, 14, 53, 25, 3],
    },
    {
      id: "0016",
      numbers: [24, 19, 7, 57, 22, 42, 23, 63, 10, 17, 28, 59, 0, 6, 15, 68],
    },
    {
      id: "0017",
      numbers: [12, 20, 4, 10, 65, 45, 2, 30, 26, 21, 6, 46, 11, 47, 7, 13],
    },
    {
      id: "0018",
      numbers: [22, 59, 6, 10, 8, 0, 33, 26, 11, 68, 49, 67, 16, 45, 61, 7],
    },
    {
      id: "0019",
      numbers: [23, 24, 45, 66, 36, 62, 20, 22, 21, 6, 65, 13, 5, 46, 14, 27],
    },
    {
      id: "0020",
      numbers: [16, 7, 15, 47, 23, 17, 5, 19, 69, 32, 53, 60, 18, 51, 68, 3],
    },
  ],
};
//
let win = true;
var checking = [];
const cols = 4;
var winners = 1;
function checkWin(cardNum) {
  let k = 0;
  var result = search(data.cards, cardNum); // search "items" for a query value
  console.log(cardNum);
  for (let i = 0; i < cols; i++) {
    checking[i] = [];
    for (let j = 0; j < cols; j++) {
      let r = result[0];
      //console.log(usedindex.includes(r.numbers[k]));
      if (usedindex.includes(r.numbers[k])) {
        checking[i][j] = 1;
      } else {
        checking[i][j] = 0;
      }
      k++;
    }
  }
  checkBingo(cardNum);
}

function checkBingo(cardNum) {
  if (
    checkHorizontal(checking) ||
    checkVertical(checking) ||
    checkDiagnol(checking)
  ) {
    if (winners < 4) {
      if (winners == 3) {
        finishGame();
      }
      let div = document.getElementById("winners");
      let text = div.innerHTML;
      div.style.removeProperty("display");
      div.innerHTML = "";
      console.log("congratiolations!!!");
      document.getElementById("image").src = "./winning.png";
      div.innerHTML = text + "<br/>" + winners + ". כרטיס מס' " + cardNum;
    }

    // for starting the confetti
    const start = () => {
      setTimeout(function () {
        confetti.start();
      }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    //  for stopping the confetti

    const stop = () => {
      setTimeout(function () {
        confetti.stop();
      }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };
    // after this here we are calling both the function so it works
    start();
    stop();
    winners++;

    // if you dont want to make it stop and make it infinite you can just remove the stop function 😊
  } else {
    console.log("oh no");
    alert("אין בינגו, נסו שוב מאוחר יותר");
  }
}

function finishGame() {
  let button = document.getElementById("btn");
  button.disabled = true;
  button.style.cursor = "not-allowed";
  button.innerHTML = "המשחק נגמר";
}

function search(arr, s) {
  var matches = [],
    i,
    key;

  for (i = arr.length; i--; )
    for (key in arr[i])
      if (arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1)
        matches.push(arr[i]); // <-- This can be changed to anything

  return matches;
}

function checkHorizontal(arr) {
  //console.log(arr);
  let right = 0;
  // horizontal line
  for (let i = 0; i < cols; i++) {
    right = 0;
    for (let j = 0; j < cols; j++) {
      //console.log(i, j);
      if (arr[i][j] == 1) {
        //console.log("if");
        //console.log(right);
        if (right == cols - 1) {
          console.log("bingo!!");
          win = true;
          return true;
        }
        right++;
      }
    }
  }
}

function checkVertical(arr) {
  // vertical
  let right = 0;
  for (let t = 0; t < cols; t++) {
    right = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols; j++) {
        if (t == j && arr[i][j] == 1) {
          console.log("right");
          if (right == cols - 1) {
            console.log("bingooo");
            win = true;
            return true;
          }
          right++;
        }
      }
    }
  }
  console.log("hello");
  console.log(right);
}

function checkDiagnol(arr) {
  // Diagnol
  let right = 0;
  let sum = cols - 1;
  //let options = [0, 1, 2, 3];
  // let temp = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      if (i == j && arr[i][j] == 1) {
        if (right == cols - 1) {
          console.log("bingoooo!!!");
          win = true;
          return true;
        }
        right++;
      }
    }
  }
  right = 0;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      if (i + j == sum && arr[i][j] == 1) {
        if (right == cols - 1) {
          console.log("bingowow!!!");
          win = true;
          return true;
        }
        right++;
      }
    }
  }
  console.log(right);
}

function test() {
  for (let times = 0; times < 30; times++) {
    generate();
  }
}
