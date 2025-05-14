let obj1 ={
    fname:"Raushan",
    lname:" Kumar",
};
function PrintFullName(city, district, state, country){
    console.log(this.fname + "" + this.lname + " from" + city, district, state, country);
}


// call method:
// PrintFullName.call(obj1, "  Kahalgaon", "Bhagalpur", "Bihar", "India"); 

// apply method:
// PrintFullName.apply(obj1, ["  Kahalgaon", "Bhagalpur", "Bihar", "India"]); 

// bind method:
let binding = PrintFullName.bind(obj1, " kahalgaon,", "bhagalpur,", "bihar,", "india");
binding();