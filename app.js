var bodyParser=require("body-parser");
var express=require("express");
var app=express();
var port=process.env.PORT || 8000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.status(200).send('hello bot!');
});

app.post('/hello', function(req, res, next){
  var username = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', welcome to Devdactic Slack channel! I\'ll be your guide.'
  };
  if (user_name !== "slackbot") {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }

})

app.listen(port, function (){
  console.log ('slackbot listening on port', port)
})
