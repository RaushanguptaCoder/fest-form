import figlet from "figlet"


figlet("hello Raushan", function(err,data){
    if (err){
        console.log("Something went wrong");
        console.log(err);
        return;
    }
    console.log(data)

});