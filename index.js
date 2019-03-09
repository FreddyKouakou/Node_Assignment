const express = require("express")
const app = express()
app.use(express.static('statics')) //get static file from myStatic directory
app.set('view engine', 'ejs');
app.set('views', 'response');

app.get("/getRate", function(req, res){
    var weight = req.query.weight;
    var type = req.query.type;
    
    if (type == "stamp") {
        if(weight <= 1){
            var rate = "0.55";
            }else if(weight <= 2){
                var rate = "0.70";
            }else if(weight <= 3){
                var rate = "0.85";
            }else if(weight <= 3.5){
                var rate = "1.00";
            }
            else{
                var rate = "Please select a valid weight (1-3.5)"
            }
    }

//Metered
if (type == "meter") {
    if(weight <= 1){
        var rate = "0.50";
        }else if(weight <= 2){
            var rate = "0.65";
        }else if(weight <= 3){
            var rate = "0.80";
        }else if(weight <= 3.5){
            var rate = "0.95";
        }
        else{
            var rate = "Please select a valid weight (1-3.5)"
        }
}
//flat
if (type == "flat") {
    if(weight <= 1){
        var rate = "1.00";
        }else if(weight <= 2){
            var rate = "1.15";
        }else if(weight <= 3){
            var rate = "1.30";
        }else if(weight <= 4){
            var rate = "1.45";
        }else if(weight <= 5){
            var rate = "1.60";
        }else if(weight <= 6){
            var rate = "1.75";
        }else if(weight <= 7){
            var rate = "1.90";
        }else if(weight <= 8){
            var rate = "2.05";
        }else if(weight <= 9){
            var rate = "2.20";
        }else if(weight <= 10){
            var rate = "2.35";
        }else if(weight <= 11){
            var rate = "2.50";
        }else if(weight <= 12){
            var rate = "2.65";
        }else if(weight <= 13){
            var rate = "2.80";
        }
        else{
            var rate = "Please select a valid weight (1-13)"
        }
}

//retail first class
if (type == "retail") {
    if(weight <= 1){
        var rate = "3.66";
        }else if(weight <= 2){
            var rate = "3.66";
        }else if(weight <= 3){
            var rate = "3.66";
        }else if(weight <= 4){
            var rate = "3.66";
        }else if(weight <= 5){
            var rate = "4.39";
        }else if(weight <= 6){
            var rate = "4.39";
        }else if(weight <= 7){
            var rate = "4.39";
        }else if(weight <= 8){
            var rate = "4.39";
        }else if(weight <= 9){
            var rate = "5.19";
        }else if(weight <= 10){
            var rate = "5.19";
        }else if(weight <= 11){
            var rate = "5.19";
        }else if(weight <= 12){
            var rate = "5.19";
        }else if(weight <= 13){
            var rate = "5.71";
        }
        else{
            var rate = "Please select a valid weight (1-13)"
        }
}
var changeToJson = {
    rate: rate, weight: weight, type: type
}
res.render("response", changeToJson);

})

function calculateRate(){

}
const port = process.env.PORT || 5000

app.listen(port, function(){
    console.log("The is up and listernining to port 5000")
})