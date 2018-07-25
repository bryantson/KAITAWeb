var cool = require('cool-ascii-faces');
var express = require('express');
var pg = require("pg");
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

router.use(bodyParser.urlencoded({ extended: true }));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

  app.get('/conference', function(request, response) {
    response.render('pages/conference');
  });

app.get('/times', function(request, response) {
	var result = ''
	var times = process.env.TIMES || 5
	for (i = 0; i < times; i++) {
		result += i + ' ';
	}
	response.send(result);
});

app.post('/rsvpConference', function(request, response) {
//  console.log("REQUEST NORMAL: " + request.body);
 // response.send("RESPONSE BODY: " + JSON.stringify(request.body));

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   // console.log("REQUEST NORMAL: " + request.body);
    client.query('INSERT INTO tblConferenceAttendees (NAME,EMAIL) VALUES ($1,$2)', [request.body.name, request.body.email], function(err, result) {
      done();
      if(err) {
      //  console.error(err); 
        response.send("RSVP Error " + err + " NAME : " + JSON.stringify(request.body));
      }
      else {
      //  console.log("REQUEST NORMAL AFTER: " + request.body);
        response.status(200).send(result.rows);
      }
    });
  });

});

app.get('/members', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   client.query('SELECT * FROM tblMembersBasicInfo', function(err, result) {
     done();
     if (err)
      { console.error(err); response.send("Error " + err); }
     else
      {
        //response.render('pages/db', {results: result.rows} );
        response.status(200).send(result.rows);
      }
   });
 });
});

app.get('/companies', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   client.query('SELECT * FROM tblCompanies', function(err, result) {
     done();
     if (err)
      { console.error(err); response.send("Error " + err); }
     else
      {
        //response.render('pages/db', {results: result.rows} );
        response.status(200).send(result.rows);
      }
   });
 });
});
app.get('/company/:id', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   client.query("SELECT * FROM tblCompanies WHERE id=($1)", [request.params.id], function(err, result) {
     done();
     if (err)
      { console.error(err); response.send("Error " + err); }
     else
      {
        //response.render('pages/db', {results: result.rows} );
        response.status(200).send(result.rows);
      }
   });
 });
});

app.get('/skills/:id', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   client.query('SELECT * FROM tblSkillMembers WHERE rid=($1)', [request.params.id], function(err, result) {
     done();
     if (err)
      { console.error(err); response.send("Error " + err); }
     else
      {
        //response.render('pages/db', {results: result.rows} );
        response.status(200).send(result.rows);
      }
   });
 });
});

app.get('/events', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   client.query('SELECT * FROM tblEvents ORDER BY event_date DESC, event_time DESC', function(err, result) {
     done();
     if (err)
      { console.error(err); response.send("Error " + err); }
     else
      {
        //response.render('pages/db', {results: result.rows} );
        response.status(200).send(result.rows);
      }
   });
 });
});

app.get('/jobs', function(request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   client.query('SELECT * FROM tblJobs ORDER BY created_date DESC', function(err, result) {
     done();
     if (err)
      { console.error(err); response.send("Error " + err); }
     else
      {
        //response.render('pages/db', {results: result.rows} );
        response.status(200).send(result.rows);
      }
   });
 });
});

app.get('/cool', function(request, response) {
	response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
