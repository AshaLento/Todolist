// jshint esversion: 6

////////////////////Comman repeated Code//////////////////////////

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
//const date = require(__dirname + "/date.js");

//console.log(date());

const app = express();
let items =["Buy Food","Cook Food","Eat Food"];
let workItems =[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


//  function getDate(){
/*****************************Date Function****************************************/
/*
    let today = new Date();
    let options = {

    weekday: "long",
    day: "numeric",
    month: "long"

 };

  let day = today.toLocaleDateString("en-US", options);
  */
/********************************************************************************/
app.get("/", function(req, res) {

  let day = date.getDate();

      res.render("list", {listTitle: day, newListItems: items});
});
      app.post("/", function(req , res)
      {
          var item =  req.body.newItem;
      //  console.log(req.body);
      if(req.body.list === "Work")
      {
workItems.push(item);
res.redirect("/work");
}
else {

  items.push(item);
    res.redirect("/");
}



    //  res.render("list",{newListItem: item});
      console.log(item);
      });

app.get("/work", function(req,res){
  res.render("list",{listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req,res){
  res.render("about");
})

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

        /*
      var currentDay = today.getDay();
      var day = "";
      */

      //  alert(currentDay);

      /*
      ///////////////////Use if-else condition if repetition is 5 times or less//////////
      var day = "";
      //  if (currentDay === 6 || currentDay === 0 )
        {
          if(currentDay === 6)
          {
          day = "Saturday"
          }
          else if(currentDay === 0) {
            day = "Sunday"
          }
        else if(currentDay === 1) {
          day = "Monday"
        }
        else if(currentDay === 2) {
          day = "Tuesday"
        }
        else if(currentDay === 3) {
          day = "Wednesday"
        }
        else if(currentDay === 4) {
          day = "Thursday"
        }
        else {
          day = "Friday"
        }
      }
      */
  ///////////////////Use switch condition if repetition is more than 5 times //////////
  /*
      switch (currentDay) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
        default:
          console.log("Error: Currentday is equal to: " + currentDay );
          }
*/

          //res.sendFile(__dirname + "/Weekday.html")
          //day = "weekday"

          //  res.send("<h1>Boo! I have to work</h1>")
          //    res.write(" Its not a weekend")
          //  res.write("<h1>Boo! I have to work</h1>")
          //  res.send();
          //  res.sendFile(__dirname + "/index.html")


          //  res.send("Hello");

/*      code at list.ejs

          <%    if (kindOfDay === "Saturday" || kindOfDay === "Sunday")  { %>
          <h1 style="color:red"><%= kindOfDay %>  Todo List </h1>
           <% } else { %>
          <h1 style="color:purple"><%= kindOfDay %>  Todo List </h1>
          <%  }  %>
*/


    ////////////////////////////////////////////////////////////////
