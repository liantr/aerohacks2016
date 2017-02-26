var fs = require("fs");
var array = fs.readFileSync("aero.txt").toString().split('\n');





var t_initial = array[0];
var h_initial = array[1];

var i = 2;
var j = 3;
var our_variable = true

while (j < array.length && our_variable) {
    
    var t_next = parseFloat(array[i]);
    var h_next = parseFloat(array[j]);


    if (Math.abs(t_next - t_initial) > 0.4) {
        our_variable = false;
        console.log("Temp diff large, start");
        
        
    } else if (Math.abs(h_next - h_initial) > 20) {
        our_variable = false;
        console.log("Humidity difference large, start");
    }
    
    if (!our_variable) {
        console.log("fly!");
    }
    
    t_initial = t_next;
    h_initial = h_next;
 
    i += 2;
    j += 2;
}

/*function processFile(inputFile) {
    var fs = require('fs');
    readline = require('readline');
    instream = fs.createReadStream(inputFile);
    outstream = new (require('stream'))();
    rl = readline.createInterface(instream, outstream);
    
    rl.on('line', function(line) {
        console.log(line);
        System.out.println(line);node
    });
    
    rl.on('close', function(line) {
        console.log(line);
    });
}*/

//function processFile(inputFile) {



//var inputFile = "aero.txt";
//var fs = require('fs')
//var readFile = function(inputFile) {
//    console.log(fs.readFileDync(inputFile).toString());
//}
//var readline = require('readline');

//var rd = readline.createInterface({
//    input: fs.createReadStream(inputFile),
//    output: process.stdout,
//    terminal: false
//});
//var t;
//var h;
//
//while (rd.ReadAll()) {
//rd.on('line', function(line) {
//    console.log(line);
//    //console.log(line);
//});
//    
//}

















/*while (temp < 100 && humidity < 100) {
    
    console.log("temp ok");
    console.log(pro"humid ok");
    temp += 10;
    humidity += 20;
    console.log( "temp is " + temp);
    console.log("humidity is " + humidity);
    
    if (temp >  100) {
        console.log("temp not ok. exit loop");
    }
    
    if (humidity > 100) {
        console.log("humid not ok. exit loop");
    }
}*/
