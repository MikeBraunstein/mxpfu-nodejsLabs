const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(users) //returns all users
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  const email = req.params.email; //assignes a constant to the given email in a url call
  let filtered_users = users.filter((user)=>user.email === email); //filters the users parent object into a single user based on the email that is assigned to the constant 'email'
  
  if (filtered_users.length > 0) {
    res.send(filtered_users); //gets the value of the entire user array object stored in the filtered_users variable
  } else {
      res.send(`unable to find user, ${email}!`);
  }
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"email":req.query.email,"DOB":req.query.DOB});

  res.send("The user " + req.query.firstName + " has been added!");
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  let filtered_users = users.filter((user)=>user.email === email);

  if (filtered_users.length > 0) {
      let filtered_user = filtered_users[0];
      let DOB = req.query.DOB;
      let lastName = req.query.lastName;
      let firstName = req.query.firstName;

      if (DOB) {
          filtered_user.DOB = DOB;
      }
      if (lastName) {
          filtered_user.lastName = lastName;
      }
      if (firstName) {
          filtered_user.firstName = firstName;
      }

      users = users.filter((user)=> user.email != email);
      users.push({filtered_user});
      res.send(`The user with the email ${email} has been updated!`);
  } else {
      res.send("Please enter a valid email to update user info. Unable to find user.");
  }
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  users = users.filter((user)=> user.email != email);
  res.send("The user with email " + email + " has been deleted!");
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
