const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const router = require("./routes/todoRoutes");
const taskRouter = require("./routes/todoRoutes");
//const{getAllTasks}=require("./controllers/taskController");
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("todoList", taskRouter); //get single task //}
/* app.something("/todoList");
app.something("/auth");
app.something("/blogs"); */

/* app.get("/todolist/tasks",getAllTasks);
app.post("/todolist/tasks",createTask); */
/* app.get("/todolist/tasks",(req,res))=>{

}
app.post("/todolist/tasks",(req,res))=>{
    
}
app.get("/todolist/tasks/:id",(req,res))=>{
     */
//app.delete("/todoList");

app.listen(
  process.env.PORT,
  console.log(`App started on port ${process.env.PORT}`)
);
