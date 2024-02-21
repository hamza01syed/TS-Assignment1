let users=["hamza","admin","ali","arshad","noman"];
for(let user of users){
    if(user==="admin"){
        console.log(
            "Hello admin, would you like to see a status report?"
        )
    }
    else{
        console.log(`hello ${user},thankyou for logging in`);
    }
}