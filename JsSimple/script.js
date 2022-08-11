let task3a=document.getElementsByClassName('task3a')[0]
.addEventListener('click',function(){
    this.innerHTML="PING"
    
});

let allElements=document.getElementsByClassName('mc');


let task3b=document.getElementsByClassName('task3b')[0]
.addEventListener('click',function(){
    for (let i = 0; i < allElements.length; i++) {
        if(allElements[i].style.fontWeight==='900'){
            allElements[i].style.fontWeight = "400";
        }else{
            allElements[i].style.fontWeight = "900";
        }
      
    }
})

//task 3c

let row1 = document.getElementsByClassName("r1");
let row2 = document.getElementsByClassName("r2");
let row3 = document.getElementsByClassName("r3");
let row4 = document.getElementsByClassName("r4");

let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];

//init function will reset all the values

function init(){
  row1 = document.getElementsByClassName("r1");
  row2 = document.getElementsByClassName("r2");
  row3 = document.getElementsByClassName("r3");
  row4 = document.getElementsByClassName("r4");

 arr1 = [];
 arr2 = [];
 arr3 = [];
 arr4 = [];
}


let inita1 = [];
let inita2 = [];
let inita3 = [];
let inita4 = [];

 for (let i = 0; i < row1.length; i++) {
   inita1.push(row1[i].innerHTML);
 }
 for (let i = 0; i < row2.length; i++) {
   inita2.push(row2[i].innerHTML);
 }
 for (let i = 0; i < row3.length; i++) {
   inita3.push(row3[i].innerHTML);
 }
 for (let i = 0; i < row4.length; i++) {
   inita4.push(row4[i].innerHTML);
 }
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == "38") {
    UpArrow();
  } else if (e.keyCode == "40") {
    DownArrow();
  } else if (e.keyCode == "37") {
    LeftArrow();
  } else if (e.keyCode == "39") {
    RightArrow();
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function readRows() {
  for (let i = 0; i < inita1.length; i++) {
    arr1.push(row1[i].innerHTML);
  }
  for (let i = 0; i < inita2.length; i++) {
    arr2.push(row2[i].innerHTML);
  }
  for (let i = 0; i < inita3.length; i++) {
    arr3.push(parseInt(row3[i].innerHTML));
  }
  for (let i = 0; i < inita4.length; i++) {
    arr4.push(row4[i].innerHTML);
  }
}

function writeArray() {
  for (let i = 0; i < inita1.length; i++) {
    row1[i].innerHTML = arr1[i];
  }

  for (let i = 0; i < inita2.length; i++) {
    row2[i].innerHTML = arr2[i];
  }
  for (let i = 0; i < inita3.length; i++) {
    row3[i].innerHTML = arr3[i];
  }
  for (let i = 0; i < inita4.length; i++) {
    row4[i].innerHTML = arr4[i];
  }
}

function sortHelper(a, b) {
    return a - b;
}



function UpArrow(){

    for (let i = 0; i < inita1.length; i++) {
      row1[i].innerHTML = inita1[i];
    }

    for (let i = 0; i < inita2.length; i++) {
      row2[i].innerHTML = inita2[i];
    }
    for (let i = 0; i < inita3.length; i++) {
      row3[i].innerHTML = inita3[i];
    }
    for (let i = 0; i < inita4.length; i++) {
      row4[i].innerHTML = inita4[i];
    }

}

function RightArrow(){

  
  init();

  readRows();

  arr1.sort(sortHelper);
  arr2.sort(sortHelper);
  arr3.sort(sortHelper);
  arr4.sort(sortHelper);
    
  writeArray();
    
}

function LeftArrow() {

init();

readRows();

 arr1.sort(sortHelper);
 arr2.sort(sortHelper);
 arr3.sort(sortHelper);
 arr4.sort(sortHelper);

 arr1.reverse();
 arr2.reverse();
 arr3.reverse();
 arr4.reverse();

writeArray();
}

function DownArrow(){

  init();

  readRows();

  // Used like so
  shuffle(arr1);
  shuffle(arr2);
  shuffle(arr3);
  shuffle(arr4);
 

  writeArray();
}

