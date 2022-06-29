const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs')

app.use(cors());

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

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
    description:'Cheap clothes',
},
{
    name:'JD Sports',
    url:'http://www.jdsports.co.uk',
    description:'Sports clothes',
},
{
    name:'Sports Direct',
    url:'http://www.sports-direct.com',
    description:'Even more sports clothes',
},
{
    name:'Tesco',
    url:'http://www.Tesco.co.uk',
    description:'Every little helps',
},
{
    name:'Sainsburys',
    url:'http://www.sainsburys.com',
    description:`We're one class higher than tesco's`,
},
{
    name:'Cineworld',
    url:'http://www.cineworld.com',
    description:'Movies at way too high a price',
},
{
    name:'WHSmiths',
    url:'http://www.whsmiths.co.uk',
    description:'The best store',
},
{
    name:'Greggs',
    url:'http://www.greggs.co.uk',
    description:'Vegan sausage rolls are pretty good',
}
]



app.get(('/search') , (req,res) => {
    res.send(search)
})





app.get(('/test'),(req,res)=>{
    res.render('page',{details:search[0]})
})



app.get(('/') , (req,res) => {
    res.send('Hello World!')
})

const port = 3000;
app.listen(port);

