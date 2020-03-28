const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Paths for express and hndle bar configs
const staticFilesDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Server static files
app.use(express.static(staticFilesDir))


//Set up handlebars
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Routes
app.get('', (req, res) => {
    res.render('index.hbs',{
        title:'Weather',
        headerTitle:"Today's Weather",
        authorName:"Shashank Shekher"

    })
})

app.get('/weather', (req, res) => {
    res.render('index.hbs',{
        title:'Weather',
        headerTitle:"Weather News",
        authorName:"Shashank Shekher"

    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        title:'About',
        headerTitle:"About Me!!!",
        authorName:"Shashank Shekher"

    })
})

app.get('/help', (req, res) => {
    res.render('help.hbs',{
        title:'Help',
        headerTitle:"Help",
        authorName:"Shashank Shekher",
        helpText:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    })
})

app.get('*', (req, res) => {
    res.render('404.hbs',{
        title:'404',
        headerTitle:"Page Not Found",
        authorName:"Shashank Shekher"

    })
})
app.listen(4000, () => {
    console.log("Server is up and listening on port 4000...")
})

console.log("this will print before starting server, as starting server is async")