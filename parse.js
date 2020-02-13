var cheerio = require('cheerio');
var fetch = require('node-fetch');
global.Headers = fetch.Headers;

async function GetWebData(url) {
    let headers = new Headers({
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
    });
    let response = await fetch(url, {
        method: 'GET',
        headers: headers
    });
    console.log('\n REQUEST RESPONSE: ', response, '\n');
    let html = await response.text();
    return html;
}
    

async function parseWebPage(url) {
    let html = await GetWebData(url);

    //Load the data into cheerio to be able to traverse the html.
    let $ = cheerio.load(html);

    //Store all image urls.
    let allData = [];
    console.log($('.rg_i'));
    //Loops over each element with the class '.rg_i'
    $('.rg_i').each(function(i, element) {
        let imgUrl = element.attribs['data-iurl'];
        console.log('TO RETURN TO FRONT END');
        console.log('IMAGE: ', imgUrl, '\n');
        allData.push(imgUrl);
    });

    //return all the urls.
    return allData
}



module.exports = parseWebPage;