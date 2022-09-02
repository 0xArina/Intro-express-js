// import 
const express = require('express');
// run express and save it to a var
const app = express();
// show properties
// console.dir(app);

//////////////////////          METHODS          /////////////////////////

// whenever there is any request this runs and stops at this response
/*    app.use((req, res) => {
        // callback 
        console.log('WE GOT A NEW REQUEST!');
        // send and generate http response
        // res.send('HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!')
        res.send('<h1>This is my webpage!</h1>')
    })
*/

// basic routing 
app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

app.get('/cats', (req, res) => {
    // console.log('CATS REQUEST!')
    // response
    res.send('MEOW')
})

app.post('/cata', (req, res) => {
    res.send('POST REQUEST TO /cats!')
})

app.get('/dogs', (req, res) => {
    // response
    res.send('WOOF')
})

// defining a pattern 
app.get('/r/:subreddit', (req, res) => {
    // shows what :subreddit equals to
    // console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post ID: ${postId} on the ${subreddit} subreddit </h1>`)
})

// search querries 
app.get('/search', (req, res) => {
    const { q } = req.query;
    // if nothing searched
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    }
    res.send(`<h1>Seacrh results for: ${q}</h1>`)
})

// all other paths
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

// listen to port 3000
app.listen(3000, () => {
    // callback 
    console.log('LISTENING ON PORT 3000!');
})