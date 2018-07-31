# Terminal Sweetness
##### Because sometimes, a spoon full of sugar helps the coding go down

This is a mini-project designed shine a little ray of sunshine into your terminal while you're neck-deep in debugging nastiness. 

To use, require the module and save as a variable. Calling the required variable as a function will send a nice quote to your terminal. 

The project is intended to run on server start, so that when a watch flag causes your code to restart and you anxiously await errors, you get a wee bit of encouragement. For example, see the server/index.js of the project I'm currently working on:

```
const server = require('./server')
const port = 3000
const beNice = require('../../terminal-sweetness')

server.listen(port, ()=> {
    console.log(`Listening on port ${port}, time is ${new Date}`)
    beNice();
})
```

##### Future Goals:

This can always do with more quotes. They don't just have to be serious inspirational stuff, they can be song lyrics or funny lines from movies/TV. Anything to lighten the mood while doing serious web dev bsns. Feel free to submit pull reqs for more. 

Once there are enough quotes spread over enough different topics, I will likely make different batches of quotes you can add and remove modularly.
