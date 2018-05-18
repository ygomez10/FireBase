/* Yarely Function to turn it into a Global Variable*/
/*
var globalvar = new Array();

function convertVar(obj){
  globalvar =ojb;
  for(int i=0; i<ojb.length; i++){
    globalvar.push(obj[i]);
  }
}

return globalvar;
*/
/*
$.getJSON("Script.json", function(json) {
    console.log(Script.json); // this will show the info it in firebug console
    console.log(myData.messages.Help.Title);
});
*/
/*
var globalVar;
$.getJSON("Script.json", function convert (obj){
  globalVar = obj;
  for(int i = 0; i < obj.length; i++){
    JSON.parse(obj[i]);
  }
});
*/
/*
*/
/*
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'Script.json', true);
  xobj.onreadystatechange = function(){
    if (xobj.readyState == 4 && xobj.status == "200") {
      // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);
  }
}
xobj.send(null);}
// Call to function with anonymous callback
loadJSON(function(response) {
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    //console.log(jsonresponse[0].name);

});

*/
$.getJSON("Script.json", function(json) {
    console.log(Script.json); // this will show the info it in firebug console

});


var globalVar;
var messages;
var notifications;
var particles;
var  music;
var  voice;
var  sound;
var  videos;
var  images;
var  scenes;
var  characters;
var  id;
var script;


function convert (obj){

  globalVar = obj;
  for(var property in obj) {
    console.log(property);
    window[property] = obj[property];
    // JSON.parse(obj[i]);
  }
}

convert(myData);

/* Created loop because I wanted to add the ID to my script variable, it cause
me more problems then expected so I have up on it.
for(var i = 0; i < 3; ++i){
  console.log(id[i]);
  for(var j = 0; j < 7; ++j){
    id[i][j];
    console.log(id[i][j]);
    script.push(id[i][j]);
  }
}
*/
  /*
  console.log(id[1]);
  for(var j = 0; j < 7; ++j){
    id[1][j];
    console.log(id[1][j]);
    script.push(id[1][j]);
  }
  */
//}



/*var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': Script.json,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

*/





/*
function setup(){
    createCanvas(100%, 100%);
  noStroke();
  TextSize(20);
  loadJSON('Script.json');
  var obj = JSON.parse(text);
  console.log(myData);
}
*/
//---------------------------------
//*$.getJSON("Script.json", function(json) {
//    console.log(json); // this will show the info it in firebug console
//});
