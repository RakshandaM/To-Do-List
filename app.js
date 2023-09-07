const express = require('express');
//const bodyParser = require('body-parser'); // Import body-parser

const app = express();
const port = 3000; // You can choose any available port

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  
  var today = new Date();

  var options = {       //Options
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US" , options ) ;

  res.render("list" , {
    kindOfDay : day 
  });
 
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
