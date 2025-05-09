const automailer = new Promise((resolve, reject)=>{
    return  setTimeout(() => {
        resolve("The mail has been sent");
      }, 1000);
});

automailer.then(()=>{
    prompt("Enter your mail id")
    console.log("Your mail is asked");
}).then(()=>{
    prompt("Enter the receiver mail")
    console.log(" sender mail is asked");
}).then(()=>{
    prompt("Enter the Subject of your mail")
    console.log(" Subject for your mail is asked");
}).then(()=>{
    prompt("Enter your Mail Content")
    console.log("provide the  Mail Content");
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Return mail that mail is sent or not")
})