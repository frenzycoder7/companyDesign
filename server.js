const express = require('express');
const http = require('http');
const hbs = require('hbs');
var app = express();
var server = http.createServer(app);
hbs.registerPartials(__dirname + '/views/partials/');
app.set('view engine', 'hbs');
app.use('/static', express.static('static'))
app.get('/',(req,res)=>{
    res.render('test');
});
app.get('/hosting',(req, res)=>{
    res.render('hosting');
});
app.get('/faq',(req,res)=>{
    res.render('faq');
});
app.get('/contact',(req, res)=>{
    res.render('contact');
});

server.listen(80,(err)=>{
    if(err) res.send(err);
    console.log('Server is started');
});