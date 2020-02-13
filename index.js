var express = require('express');
var app = express();

var parser = require('./parse');

app.use(express.static('public'));

app.get('/images', async (req, res) => {
    let toSearch = req.query.toSearch;
    let data = await parser(`https://www.google.com/search?q=${toSearch}&biw=884&bih=978&tbm=isch&source=lnt&tbs=isz:ex,iszw:800,iszh:800`);
    //send data to front end as json payload.
    res.json({imgs: data});

});


app.listen(process.env.PORT || 5000, function() {
    console.log('listening on ' + process.env.PORT || 5000);
})