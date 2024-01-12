var result
var results = []


var d100 = function(){
    result = Math.floor(Math.random() * 100)+1   
}

var century = function() {
    for (let i=0; i<20;){
        d100();
        if (!results.includes(result)){
            results.push(result);
            i++;
        }
        else {
            d100();
        }
       }
       console.log(results);
}

century();