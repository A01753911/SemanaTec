// Importar bibliotecas

const express= require("express"); 
const app = express();
const personaRoutes = require("./routes/persona")
const proyectoRoutes = require("./routes/proyecto")

//Traer el objeto de conexion

const sequelize = require("./util/database")

//middleware
app.use(express.json());
app.use("/persona",personaRoutes);
app.use("/proyecto",proyectoRoutes);

//middleware

app.use(express.json());

// Mala practica 

app.get("/test", (request, response)=>{
    console.log("Esto no se debe de hacer pero funciona");
    response.send('<h1>Sevidor funcionado</h1>');
})

//levantar el server y escuchar peticiones

sequelize.sync(/*{force:true}*/)
    .then(result=>{
        app.listen(8080, () =>{
            console.log("Sevidor escuchando")
        })
    })
    .catch(error=>console.log(error));

