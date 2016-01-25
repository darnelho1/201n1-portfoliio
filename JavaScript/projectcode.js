guessGame = function(){ /********** GUESSING GAME SCRIPTS by ANTHONY S. CASSON and Darnell Holder **********/

var tally = 0; // tallies total score
var positiveResponse = ["You are correct! It's quite the battle sedan.",'Correct! Yeeehhhaaawww!','No','Correct! I graduated from Oregon State University.','Incorrect. I wish I did!','Correct! I am 28 years old!'];
var negativeResponse = ["Actually, I do! It's a pretty awesome ride.",'Tisk, tisk, tisk! Incorrect. Was to!','You are correct! I much prefer blue.','Incorrect. I graduated from Oregon State University','You are correct! I will one day, though!','Incorrect. I am 28 years old and thus closer to 30!'];
var question = ['Do I drive a sweet 1986 Volvo?','Did I grow up in Texas?','Is my favorite color green?','Did I go to college?','Do I own a dog?','Is my age closer to 20 or 30?'];
var CorrectPic=['http://tinyurl.com/o6y7pwq','http://tinyurl.com/paa4klv','http://tinyurl.com/nwhcz3g','http://tinyurl.com/nf6hzll','http://tinyurl.com/ow2op77','http://cdn.meme.am/instances/56324890.jpg','http://lewamack.com/Facebook/Pics/Congrats-Yippee-Hooray-Wow/Congrats-fireworks-animated-BlackPinkCongrats.gif'];
var IncorrectPic=['http://tinyurl.com/p3h78ch','http://tinyurl.com/nlynuwn','https://s-media-cache-ak0.pinimg.com/236x/48/05/2e/48052e82bc805b34c109acffefe1e96a.jpg','http://tinyurl.com/oxvzxnp','http://tinyurl.com/o5g6e3l','http://i245.photobucket.com/albums/gg46/Ko-Ko-Klown/you-sir-are-wrong.jpg','http://orig04.deviantart.net/1ef4/f/2015/088/f/4/try_again___gif_warning__by_lyricalupin-d8nnjdq.gif'];

var response;
var pic;

var checkAnswer = function(p1,p2,p3,p4,p5){
   var patt = /CORRECT!/g;

   if (((p1.toUpperCase() === 'YES') || (p1.toUpperCase()==='Y')) && (patt.test(p2.toUpperCase()))){
    response = p2;
    pic = p4;
    tally++;


  }

   else if (((p1.toUpperCase() === 'NO') || (p1.toUpperCase() === 'N')) && (patt.test(p3.toUpperCase()))){
      response = p3;
      pic = p5;
      tally++;

    }

   else if ((p1.toUpperCase() === 'YES') || (p1.toUpperCase() === 'Y')){
    response = p2;
    pic = p4;

   }

   else if ((p1.toUpperCase() === 'NO') || (p1.toUpperCase() === 'N')){
    response = p3;
    pic = p5;

   }

   else {
    response = p1 + " is not a correct response. Please enter Yes or No";

  }


   console.log(response);
   console.log(tally);
};

//Script for the FIRST question

var userResponse1 = prompt(question[0]);

checkAnswer(userResponse1,positiveResponse[0],negativeResponse[0],CorrectPic[0],IncorrectPic[0]);
document.getElementById('a1').innerHTML = response;
document.getElementById('pic1').src= pic;

// Script for the SECOND question



var userResponse2 = prompt(question[1]);

checkAnswer(userResponse2,positiveResponse[1],negativeResponse[1],CorrectPic[1],IncorrectPic[1]);
document.getElementById('a2').innerHTML = response;
document.getElementById('pic2').src = pic;


// Script for the THIRD question

var userResponse3 = prompt(question[2]);

checkAnswer(userResponse3,positiveResponse[2],negativeResponse[2],CorrectPic[2],IncorrectPic[2]);
document.getElementById('a3').innerHTML = response;
document.getElementById('pic3').src = pic;




// Script for the FOURTH question

var userResponse4 = prompt(question[3]);

checkAnswer(userResponse4,positiveResponse[3],negativeResponse[3],CorrectPic[3],IncorrectPic[3]);
document.getElementById('a4').innerHTML = response;
document.getElementById('pic4').src = pic;



// Script for the FIFTH question

var userResponse5 = prompt(question[4]);

checkAnswer(userResponse5,positiveResponse[4],negativeResponse[4],CorrectPic[4],IncorrectPic[4]);
document.getElementById('a5').innerHTML = response;
document.getElementById('pic5').src = pic;



// Script for the SIXTH question

var userResponse6 = Number(prompt(question[5]));

if (userResponse6 === 30) {
  tally++;
  document.getElementById('a6').innerHTML = positiveResponse[5];
  document.getElementById('pic6').src = CorrectPic[5];



}else {
  document.getElementById('a6').innerHTML = negativeResponse[5];
  document.getElementById('pic6').src = IncorrectPic[5];
}

// Script for TOTAL score


if (tally >= 4) { //majority reaction
  document.getElementById('finalScore').innerHTML = "You got " + tally + " out of 6 answers correct! Nice work!";
  document.getElementById('pic7').src= CorrectPic[6];
}
  else { //minority reaction
  document.getElementById('finalScore').innerHTML = "You only got " + tally + " out of 6 answers correct! Better luck next time!";
  document.getElementById('pic7').src= IncorrectPic[6];
}
};

catApp = function(){
  //Empty array for storing cat objects
  var cats =[];
  var catNumOne;
  var catNumTwo;
  $image1 = $('#image1');
  $image2 = $('#image2');
  // Get context with jQuery - using jQuery's .get() method.
  var ctx = $("#myChart").get(0).getContext("2d");


  //Cat Object Constructor
  var Cat = function (name, fileLocation,hasStripes,votes,viewed,catColor){
    this.name = name;
    this.fileLocation = fileLocation;
    this.hasStripes = hasStripes;
    this.votes = 0;
    this.viewed = false;
    //this.catColor = catColor;
      cats.push(this);

  };

  //tracker object
  var tracker = {
      totalSelections: 0,
      selectedCats: [],
      picPref1: 0,
      picPref2: 0,
      prefStripesCounter: 0,
      prefStripes: false,
  };



  //Cat objects
  catOne = new Cat ('catOne','images/01.jpg',false);
  catTwo = new Cat ('catTwo', 'images/02.jpg',true);
  catThree = new Cat ('catThree','images/03.jpg',true);
  catFour = new Cat ('catFour','images/04.jpg',true);
  catFive = new Cat ('catFive', 'images/05.jpg',false);
  catSix = new Cat ('catSix','images/06.jpg',false);
  catSeven = new Cat ('catSeven','images/07.jpg',false);
  catEight = new Cat ('catEight', 'images/08.jpg',true);
  catNine = new Cat ('catNine','images/09.jpg',false);
  catTen = new Cat ('catTen','images/10.jpg',false);
  catEleven = new Cat ('catEleven', 'images/11.jpg',false);
  catTwelve = new Cat ('catTwelve', 'images/12.jpg',false);
  catThirteen = new Cat ('catThirteen', 'images/13.jpg',false);
  catFourteen = new Cat ('catFourteen', 'images/14.jpg',true);


  //random number generator between 0-13 (length of cats array)
  function randomInt(){
    return Math.floor(Math.random() * 13);
    //var random2 = Math.floor(Math.random() * 13);
  }

  //data object for chart.
  var data = {
      labels: ['Cat on Left', 'Cat on Right'],
      datasets: [
          {
              label: "My First dataset",
              // fillColor: "red",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [0,0]
          }
      ]
  };

  // This will get the first returned node in the jQuery collection.
  var myBarChart = new Chart(ctx).Bar(data,{
    responsive: true, scaleFontColor: "white", scaleFontSize: 15 });


  myBarChart.datasets[0].bars[0].fillColor = 'blue';
  myBarChart.datasets[0].bars[1].fillColor = 'orange';
  myBarChart.update();

  //Reset Function

  var clearAll = function(){
    cats.forEach(function(cat){
      cat.votes = 0;
      cat.viewed = false;
      });
    tracker.totalSelections = 0;
    tracker.picPref1 = 0;
    tracker.picPref2 = 0;
    tracker.prefStripesCounter = 0;
    tracker.prefStripes = false;
    myBarChart.datasets[0].bars[0].value = 0;
    myBarChart.datasets[0].bars[1].value = 0;
    myBarChart.update();
  };

  //function to randomly select cat images
  function catSelector(){

    var x = randomInt();
    var y = randomInt();

          while ((cats[x] === cats[y]) || cats[x].viewed === true || cats[y].viewed === true){
            if(tracker.totalSelections >= 6){
                  // clearAll();
                  $('#imagearticle').html("<div id='thanks'><p>You have voted on all the cats. Below you will see the cats you selected. Thanks For Voting!!!</p></div>");
                  tracker.selectedCats.forEach(function(cat){
                    $('#imagearticle').append("<div><img class='selectediamge' src='"+cat.fileLocation+"'></div>");
                  });
                  break;
                }
            var x = randomInt();
            var y = randomInt();
          }
    catNumOne = cats[x];
    catNumTwo = cats[y];


    $image1.attr('src', cats[x].fileLocation);
    // $image1.css('background-image', "url('" + cats[x].fileLocation + "')")
    $image2.attr('src', cats[y].fileLocation);
    $image1.css('border-color', 'black');
    $image2.css('border-color', 'black');
    $image1.prop('disabled', false);
    $image2.prop('disabled',false);



      }


  //Intial call of the cat selector function
  catSelector();

  //function to handle if cat on the left is selected.
  function buttonClick1(){
    tracker.selectedCats.push(catNumOne);
    $image1.css({"border-color": "green",
                 "border-width": "15px"
                });
    $image2.css({"border-color": "red",
                 "border-width": "15px"
                });
    // console.log("I'm clicked");
    catNumOne.viewed = true;
    catNumTwo.viewed = true;
    tracker.picPref1++;
    tracker.totalSelections++;
    console.log(tracker.totalSelections);
    myBarChart.datasets[0].bars[0].value = tracker.picPref1;
    myBarChart.update();

        if(catNumOne.hasStripes===true){
          tracker.prefStripesCounter++;
        }
    $image1.prop('disabled', true);
    $image2.prop('disabled', true);
    console.log(tracker);
    $('#cutestcat').html('Press "Next" To Vote on the Next Cat');
    $('#cutestcat').css({"font-size": "40px",
                         "color": "Yellow"
                          });


    //catSelector();

  }

  //function to handle if cat on the right is selected.

  function buttonClick2(){
    tracker.selectedCats.push(catNumTwo);
    $image2.css({"border-color": "green",
                  "border-width": "15px"
                });
    $image1.css({"border-color": "red",
                  "border-width": "15px"
                });
    // console.log("I'm clicked");
    catNumOne.viewed = true;
    catNumTwo.viewed = true;
    tracker.picPref2++;
    tracker.totalSelections++;
    myBarChart.datasets[0].bars[1].value = tracker.picPref2;
    myBarChart.update();
    //console.log(tracker.picPref2);
        if(catNumTwo.hasStripes===true){
          tracker.prefStripesCounter++;
        }
    $image2.prop('disabled', true);
    $image1.prop('disabled', true);
    console.log(tracker);
    $('#cutestcat').html('Press "Next" To Vote on the Next Cat');
    $('#cutestcat').css({"font-size": "40px",
                         "color": "Yellow"
                          });


    //catSelector();



  }

};


donutShopApp = function () {
  var donutShops = [];
var hours = ['7:00am',
             '8:00am',
             '9:00am',
             '10:00am',
             '11:00am',
             '12:00pm',
             '1:00pm',
             '2:00pm',
             '3:00pm',
             '4:00pm',
             '5:00pm',
             '6:00pm'];


/////////////Donut Shop Object Constructor/////////
  DonutShop=function(location,minCustHrs,maxCustHrs,avgDonutsPerCust,totalDonutsSld){
      this.location = location;
      this.minCustHrs = minCustHrs;
      this.maxCustHrs = maxCustHrs;
      this.avgDonutsPerCust = avgDonutsPerCust;
      this.donutsPerHr=[0];
      this.totalDonutsSld = 0 ;
          donutShops.push(this);
  };



///////Method for calculating donuts purchased/////////
 DonutShop.prototype.calculatedonutsPurchased = function(){
  for (i = 0; i < hours.length; i++) {
      var calculate = (Math.floor(Math.random() * (this.maxCustHrs-this.minCustHrs + 1 )) + this.minCustHrs) * this.avgDonutsPerCust;
      this.donutsPerHr[i] = Math.round(calculate);
      this.totalDonutsSld = this.totalDonutsSld + Math.round(calculate);

};
};



//////////Method for rending the table in HTML////////////

DonutShop.prototype.render = function(){
  var tr = document.createElement('tr');
  var tblLocation = document.createElement('td');
  tblLocation.innerHTML = this.location;
  tblLocation.setAttribute('id', 'location');
  tr.appendChild(tblLocation);

  for (i=0; i < this.donutsPerHr.length; i++){
    var tblDPH = document.createElement('td');
    tblDPH.setAttribute('id','DPH')
    tblDPH.innerHTML = this.donutsPerHr[i];
    tr.appendChild(tblDPH);
  }

  var total = document.createElement('td');
  total.innerHTML = this.totalDonutsSld;
  total.setAttribute('class', 'total');
  tr.appendChild(total);

  document.getElementById('tablebody').appendChild(tr);

}


//////////Donut shop objects/////////////

var dwtnShop = new DonutShop('Downtown',8,43,4.5);
var cHillShop = new DonutShop('Capitol Hill',4,37,2.00);
var sluShop = new DonutShop('South Lake Union',9,23,6.33);
var wdgwoodShop = new DonutShop('Wedge Wood',2,28,1.25);
var ballardShop = new DonutShop('Ballard',8,58,3.75);



////////////Running methods against the donut shop objects////////

dwtnShop.calculatedonutsPurchased();
dwtnShop.render();

cHillShop.calculatedonutsPurchased();
cHillShop.render();

sluShop.calculatedonutsPurchased();
sluShop.render();

wdgwoodShop.calculatedonutsPurchased();
wdgwoodShop.render();

ballardShop.calculatedonutsPurchased();
ballardShop.render();



/////////////Function to create new donut shop objects based on user input///////



var newShop = function(){
    var newShopLoc, newShopMinCust, newShopMaxCust, newShopAvgDonutsPerCust;
    var found = false; //Flag for found existing donut shops
    newShopLoc = document.getElementById('locationName').value;
    newShopMinCust = parseInt(document.getElementById('minCust').value);
    newShopMaxCust = parseInt(document.getElementById('maxCust').value);
    newShopAvgDonutsPerCust = Number(document.getElementById('avgDonutsPerCust').value);

     ///////Loop to find existing donut shop objects in donut shop array////
    for (i=0; i < donutShops.length; i++){
      if (document.getElementById('locationName').value.toUpperCase() === donutShops[i].location.toUpperCase()){
          var dsTblLoc= i+1;// var for handling location of donut shop in table
          document.getElementById('donutshops').deleteRow(dsTblLoc);
          var knownShop=donutShops[i];
          //console.log(knownShop);
          knownShop.maxCustHrs=parseInt(document.getElementById('maxCust').value);
          knownShop.minCustHrs=parseInt(document.getElementById('minCust').value);
          knownShop.avgDonutsPerCust=parseInt(document.getElementById('avgDonutsPerCust').value);
          //console.log(knownShop);
          knownShop.calculatedonutsPurchased();
          //console.log(knownShop);
          knownShop.render();
          //console.log(donutShops);
          found = true; //sets flag to true if donut shop is found
        }
      }

      //////will run if no existing donut shop is found in array////
      while(found!=true){
          var userShop = new DonutShop(newShopLoc,newShopMinCust,newShopMaxCust,newShopAvgDonutsPerCust);
          donutShops.push(userShop);
          userShop.calculatedonutsPurchased();
          userShop.render();
          //console.log(donutShops);
          found=true;



    }
  }

    /////Event listener for for User input/////////
buttonClicker = function(){
  newShop();
};


/////////Easter Egg that Displays Homer eating when you mouse over the total donuts sold for each shop//////
var homers= document.getElementsByClassName('total');

for (i=0; i < donutShops.length; i++){
  homers[i].onmouseover = function(){
    document.getElementById('homerPic').src = 'images/homer.gif';
  }
  homers[i].onmouseout = function(){
    document.getElementById('homerPic').src ='http://unlimiteddonuts.com/wp-content/uploads/2015/02/homer-simpson.jpg';
  };
}

var dsloc = donutShops.map(function(loc){
    return loc.location;
});

var locData = donutShops.map(function(locData){
  return locData.donutsPerHr;
});

console.log(dsloc);

};
