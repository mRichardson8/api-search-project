const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs')

app.use(cors());

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

const search=[{
    name:'YouTube',
    url:'https://www.youtube.com',
    description:'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
},{
    name:'GAME | Gaming Specialist For Consoles, Games & Accessories!',
    url:'https://www.game.co.uk',
    description:`GAME.co.uk is the UK's leading games retailer with great deals on video games, consoles, accessories and the latest pre-order games.`,
},{
    name:'Primark USA | Fashion, Home & Beauty',
    url:'https://www.primark.com',
    description:`Find A Primark Store. Use our store finder: Just enter your zip code and we'll show you your closest stores. Find a store.`,
},
{
    name:'JD Sports™ Official Site - Up To 50% Off Summer Sale',
    url:'https://www.jdsports.co.uk',
    description:`Don't Miss Out On Our Summer Sale With Further Reductions & More Lines Added. Shop Now! Check Out Price Drops Across The Biggest Brands In The Game. Shop Our Summer Sale! 100's Of Exclusive Lines. Summer Offers. Shop Online 24/7. Free Click & Collect.`,
},
{
    name:`SportsDirect.com – The UK's No 1 Sports Retailer`,
    url:'https://www.sportsdirect.com',
    description:`Your one stop sport shop for the biggest brands - browse trainers for Men, Women & Kids. Plus sports fashion, clothing & accessories.`,
},
{
    name:'Tesco - Supermarkets | Online Groceries, Clubcard & Recipes',
    url:'https://www.tesco.com',
    description:`With over 3400 stores nationwide you're sure to find a Tesco near you. Or why not try our online grocery shopping and delivery service. Open 7 days a week.`,
},
{
    name:`Sainsbury's`,
    url:'https://www.sainsburys.co.uk',
    description:`Shop online at Sainsbury's for groceries, clothing, homewares, electricals, financial services and more. Together we're helping everyone eat better.`,
},
{
    name:'Latest Movies - New Films - 3D Movies | Cineworld Cinemas',
    url:'https://www.cineworld.co.uk',
    description:'Cineworld Cinemas is a leading UK multiplex cinema chain and the best way to watch a movie. Watch a huge range of the latest films in comfortable screens in ...',
},
{
    name:'WHSmith: Books, stationery, gifts and much more',
    url:'https://www.whsmith.co.uk',
    description:'Welcome to WHSmith. Here you can find stationery, books, toys and games and many more products. Shop online or find out more about us.',
},
{
    name:'Greggs',
    url:'https://www.greggs.co.uk',
    description:`From sandwiches to pasties, pick a great deal for breakfast and lunch at your local Greggs today. Read more here at greggs.co.uk.`,
}
]



app.get(('/search') , (req,res) => {
    res.send(search)
})




app.get(('/page/:id'),(req,res)=>{
    let id = parseInt(req.params.id)
    res.render('page',{details: search[id]})
})



app.get(('/') , (req,res) => {
    res.send('Hello World!')
})

const port = 3000;
app.listen(port);

