// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC20543e1cfeb923abb4f072d52ce611b6';
var authToken = "c36dc1426a3271dab48e28435da34c87";
var client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+17033385999",
    from: "+12403033843 "
}, function(err, call) {
    process.stdout.write(call.sid);
});

var http = require('http'),
    twilio = require('twilio');

http.createServer(function (req, res) {
    //Create TwiML response
    var twiml = new twilio.TwimlResponse();
    twiml.say("Hello from your pals at Twilio! Have fun.");

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

}).listen(1337, '127.0.0.1');

console.log('TwiML servin\' server running at http://127.0.0.1:1337/');