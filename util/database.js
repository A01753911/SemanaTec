const Sequielize= require("sequelize");
//Configurar la conexion
const {applyRelations} = require("./relations")

const sequelize = new Sequielize("semanatec","admin","Oswa2203#1",{
    dialect:"mysql",
    host: "database-1.cubm0go9x970.us-east-1.rds.amazonaws.com",
    define:{
        // Evitar que nos ponga CreatedAt y updateAt
        timestamps: false,
        //pluralizar
        freezeTableName:true
    }
});

//Cargar modelos

const modelDefiners = [
    require("../models/persona"),
    require("../models/proyecto"),
    require("../models/proyectoPersona")
];

//vincular el modelo con el objeto de conexion

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}


// Construir las relaciones 

applyRelations(sequelize);

// Exportar el elemento de conexion

module.exports = sequelize;