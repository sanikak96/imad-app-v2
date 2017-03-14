var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article1':{
    title:'Article one | Sanika',
    heading:'Article one',
    date:'13 march 2017',
    content: '<ol><li>I learnt HTML</li><li>I will learn css</li></ol>'
    

},
 'article2':{
    title:'Article Two | Sanika',
    heading:'Article Two',
    date:'14 march 2017',
    content: '<ol><li>I learnt CSS</li><li>I will learn JS</li></ol>'
    

},
'article3':{
    title:'Article Three | Sanika',
    heading:'Article Three',
    date:'15 march 2017',
    content: '<ol><li>I learnt JS</li><li>I will learn DBMS</li></ol>'
    

}
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = `
  <html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
</head>

<body> 
<div>
        ${date}
    </div>
<div>
    <a href="/">Home</a>
</div>
<hr>
<div class="myart">
<div>
    <h3>${heading}</h3>
</div>
<div>
    ${content}
</div>
</div>
</body>
</html>

`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
