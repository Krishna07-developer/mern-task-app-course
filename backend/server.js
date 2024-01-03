const express = require("express");
const dotenv = require("dotenv").config();
const connectedDb = require("./config/connectedDb");
const Task = require("./model/taskModel.js")
const taskRoutes = require("./routes/taskRouter.js")



const app = express();


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));



app.get("/" , async (req,res)=>{
    res.status(200).send("Home Page");
})

app.use("/api/tasks" , taskRoutes);


const PORT = process.env.PORT || 5000;


const startServer = async()=>{
    try {
        await connectedDb()
        app.listen(PORT , ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}
startServer();