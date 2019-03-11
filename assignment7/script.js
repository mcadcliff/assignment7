//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;


var consoleDisplay = document.getElementById ('ConsoleDisplay');
var sideNav = document.getElementById('SideNav');
var donation = document.getElementById('article');


//DONATE
document.getElementById('BtnDonate').addEventListener('click', function(){
    
var donate = window.prompt("How much would you like to donate?");

if (donate < 100) 
{var captionElement = document.createElement('h3');
BtnDonate.appendChild(captionElement);
var caption = document.createTextNode('Thank you for your donation of $ ' + donate);
captionElement.appendChild(caption);}
    
  
else if (donate >= 100)
{var captionElement = document.createElement('h3');
BtnDonate.appendChild(captionElement);
var caption = document.createTextNode('Thank you for your generous donation');
captionElement.appendChild(caption);}
});



//CHURCHILL
document.getElementById("BtnChurchill").addEventListener('click', function(){
    
consoleDisplay.innerHTML = "This speech was written by " + speechesArray[0].author + " in " + speechesArray[0].year + " . "; 

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest += speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest += speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});



//GHANDI
document.getElementById("BtnGhandi").addEventListener('click', function(){
    
consoleDisplay.innerHTML = "This speech was written by " + speechesArray[1].author + " in " + speechesArray[1].year + " . "; 
  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});



//DEMOSTHENES
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
    
consoleDisplay.innerHTML = "This speech was written by " + speechesArray[2].author + " in " + speechesArray[2].year + " . "; 

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});

