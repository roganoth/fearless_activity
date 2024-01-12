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

var display = function(){
    var index = 0;
    var intervalID ;
    var orderedDisplay = function(){
        intervalID = setInterval(order, 1000);
    };
    var order = function(){
        if (index !== results.length){
            console.log(results[index]);
            index++;
        } else {
            if (intervalID){
                clearInterval(intervalID);
            }
        }
    };
    orderedDisplay();
};

century();
display();