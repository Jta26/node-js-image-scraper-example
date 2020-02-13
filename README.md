# node-js-image-scraper-example
Example for a friend to show him how to fetch and scrape data from other websites.

View on heroku here:
https://node-js-scraping-example.herokuapp.com/

## Explanation
Type in the search box and see a number of images appear.
These images are pulled directly from google images that are scraped from an HTTP request using the node-fetch and Cheerio library. This technique is not specific to just images and can be used to scrape a whole ton of things from the web. Mind you that some websites actively ward against this technique as they limit the number of requests in a certain period of time (Amazon for example).
