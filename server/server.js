const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs')

const search=[{
    name:'Youtube',
    url:'http://www.youtube.com',
    description:'videos',

},{
    name:'GAME',
    url:'http://www.game.co.uk',
    description:'retail store',
},{
    name:'primark',
    url:'http://www.primark.com',
    description:'retail store',
}]



app.get(('/search') , (req,res) => {
    res.send(search)
})



app.use(cors());

app.set('view engine','ejs')

app.get(('/test'),(req,res)=>{
    res.render('page',{details:search[0]})
})



app.get(('/') , (req,res) => {
    res.send('Hello World!')
})

app.listen(3000);

