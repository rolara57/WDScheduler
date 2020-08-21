// Declare variables
//let is a element/signal that can be reassigned such as a counter loop
//moment().format converts dates to neatly formatted strings.ref momentjs.com
//parsInt function parses(analyzes item into parts and describes their syntactic roles)
//and returns an integer
var currentTime = moment().format('dddd, MMMM Do YYYY');
var currentHour = moment().format('H');
var currentHh= parseInt(moment().format('HH'));
var currentInt = parseInt(currentHour);
var Timer;
//const can not be reassigned/specific use
//$('#time1').text(); method sets or returns the text content of the selected elements.ref w3schools
const hour1 = $('#time1').text();
const hour2 = $('#time2').text();
const hour3 = $('#time3').text();
const hour4 = $('#time4').text();
const hour5 = $('#time5').text();
const hour6 = $('#time6').text();
const hour7 = $('#time7').text();
const hour8 = $('#time8').text();
const hour9 = $('#time9').text();

const hour1Int = parseInt(hour1);
const hour2Int = parseInt(hour2);
const hour3Int = parseInt(hour3);
const hour4Int = parseInt(hour4);
const hour5Int = parseInt(hour5);
const hour6Int = parseInt(hour6);
const hour7Int = parseInt(hour7);
const hour8Int = parseInt(hour8);
const hour9Int = parseInt(hour9);
// Display the time using moment.js
$('#currentDay').append(currentTime);

// Store user input in local Storage
//$('#text1').val() returns the value attribute. ref w3 schools
$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }

  const hour1String = JSON.stringify(hour1);
  
  localStorage.setItem(hour1, $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }

  const hour2String = JSON.stringify(hour2);

  localStorage.setItem(hour2, $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }

  const hour3String = JSON.stringify(hour3);

  localStorage.setItem(hour3, $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }

  const hour4String = JSON.stringify(hour4);

  localStorage.setItem(hour4, $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }

  const hour5String = JSON.stringify(hour5);

  localStorage.setItem(hour5, $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }

  const hour6String = JSON.stringify(hour6);

  localStorage.setItem(hour6, $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }

  const hour7String = JSON.stringify(hour7);

  localStorage.setItem(hour7, $('#text7').val());
})

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }

  const hour8String = JSON.stringify(hour8);

  localStorage.setItem("text8", $('#text8').val());
})

$('#btn9').click(function() { 
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }

  const hour9String = JSON.stringify(hour9);

  localStorage.setItem(hour9, $('#text9').val());
})
// Color coding to reflect whether the time slot is in the past, the present or the future 
//the css()method sets or returns one or more style properties for the selected elements.ref w3schools
colorCoding();

function colorCoding() {

  TIMER = setInterval(colorCoding, 1000);
  // Test check: currentHh = 20;
  if(currentHh >= 9 && currentHh <= 17) {

    for (let i =1; i<=9 ; i++) { 
     let currentInt = parseInt($('#time'+i).text());

      if (currentInt < 9) {
       currentInt = currentInt + 12;
      }
      
      if (currentInt == currentHh) {
        $('#text'+i).css('background-color', '#FB8F78');
        continue;
      }
      
      if (currentInt <currentHh) {
        $('#text'+i).css('background-color', 'lightgray');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'pink');
  }
}