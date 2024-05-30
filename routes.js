import taskRouter from "./src/modules/task/task.router.js"

const allRoutes=(app)=>{
    app.use('/api/v1/task',taskRouter)
}


export default allRoutes