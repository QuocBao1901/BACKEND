import express from 'express';
import path from 'path';
const app = express();
const port = 5001
const __dirname = path.resolve()
app.use("/static",express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.set("views",__dirname + "/src/views")
app.get('/',(req,res) => {
    res.render("pages/index");
})
app.get('/component',(req,res) => {
    res.render("pages/component",{
        title: "Component Page"
    });
})
app.get('/form',(req,res) => {
    res.render("pages/form",{
        title: "Form Page"
    });
})
app.get('/icon',(req,res) => {
    res.render("pages/icon",{
        title: "Icon Page"
    });
})
app.get('/notification',(req,res) => {
    res.render("pages/notification",{
        title: "Notification Page"
    });
})
app.get('/table',(req,res) => {
    res.render("pages/table",{
        title: "Table Page"
    });
})
app.get('/typography',(req,res) => {
    res.render("pages/typography",{
        title: "Typography Page"
    });
})
app.listen(port, function(){
    console.log("http://localhost:"+ port);
})