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

$.getJSON("Script.json", function(json) {
    console.log(Script.json); // this will show the info it in firebug console

});


var globalVar;
var messages;
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
