const bodyParser = require('body-parser');
const express = require('express');
const calcsRouter = require('./routes/calcs');
global.db = require('./routes/db');
const logURL = require('./routes/logURL')
const env = process.env.NODE_ENV || 'development';

const app = express();

// ----- Middlewares -----
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logURL)

// ----- Middlewares -----


// ----- Routes -----

app.get('/hello', (req, res) => {
  res.send('hello world');
});
app.use('/calcs', calcsRouter);


	
app.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  global.db.deleteOne(id, (e, r) => {
        if(e) { return console.log(e); }
        res.redirect('/');
      });
});
app.get('/edit/:id', function(req, res, next) {
 var id = req.params.id;
  global.db.findOne(id, (e, docs) => {
      if(e) { return console.log(e); }
      res.send('new', { title: 'Edição livro', doc: docs[0], action: '/edit/' + docs[0]._id });
    });
});

app.get('/find/:id', function(req, res, next) {
  var id = req.params.id;
  global.db.findOne(id, (e, docs) => {
      if(e) { return console.log(e); }
      res.send('new', { title: 'Mostrando Livro', doc: docs[0], action: '/edit/' + docs[0]._id });
    });
})
app.get('/new/id/:bookID/nome/:nome', function (req, res) {
 // res.send(req.params)
var nome = req.params.nome;
//console.log(req.params.nome);
var bookID = req.params.bookID;

   global.db.insert({bookID, nome}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/');
      })
//http://localhost:7777/new/id/:32/nome/:nome
})


	

// ----- Routes -----


// ----- Error handlers -----
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (env === 'development') {
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(err.status || 500).send({
      error: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
// ----- Error handlers -----

module.exports = app;