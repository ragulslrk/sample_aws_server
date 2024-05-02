const express=require('express')
const app =express()
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'1mb'}))
app.set("view engine","ejs")
app.use(express.static('views'))
app.use(express.static('css'))
app.use(express.static('fonts'))
app.use(express.static('images'))
app.use(express.static('js'))
app.use(express.static('vendors'))

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(process.env.PORT ||3232,()=>{
    console.log('server running')
})